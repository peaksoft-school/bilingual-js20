import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchTodos,
  addTodoAsync,
  deleteTodoAsync,
  selectTodos,
  selectLoading,
  selectError,
} from './store/slice/todoSlice'

export const App = () => {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [])

  if (loading) return <div>Жүктөлүүдө...</div>
  if (error) return <div>Ката: {error}</div>

  return (
    <div>
      <h1>Тасктар</h1>
      <button onClick={() => dispatch(addTodoAsync({ title: 'Жаңы таск' }))}>Кошуу</button>

      {todos.map((todo, index) => (
        <div key={`${todo.id}-${index}`}>
          <span>{todo.title}</span>
          <button onClick={() => dispatch(deleteTodoAsync(todo.id))}>Өчүрүү</button>
        </div>
      ))}
    </div>
  )
}
