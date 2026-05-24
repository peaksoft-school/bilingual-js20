import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// Base URL
const API = 'https://jsonplaceholder.typicode.com/todos'

// Async thunks
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await axios.get(`${API}?_limit=5`)
  return res.data 
})
export const addTodoAsync = createAsyncThunk('todos/addTodo', async (todo) => {
  const res = await axios.post(API, todo)
  return res.data
})

export const deleteTodoAsync = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`${API}/${id}`)
  return id
})

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      // Add
      .addCase(addTodoAsync.fulfilled, (state, action) => {
        state.items.push(action.payload)
      })

      // Delete
      .addCase(deleteTodoAsync.fulfilled, (state, action) => {
        state.items = state.items.filter((t) => t.id !== action.payload)
      })
  },
})

export const selectTodos = (state) => state.todos.items
export const selectLoading = (state) => state.todos.loading
export const selectError = (state) => state.todos.error

export default todoSlice.reducer
