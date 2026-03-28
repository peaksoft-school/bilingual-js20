// Input.jsx
import React from 'react'
import { Box, TextField, Typography } from '@mui/material'

export const Input = () => {
  return (
    <Box p={4}>
      <Typography variant="h6" mb={3}>
        INPUT
      </Typography>

      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={4}>
        <Box>
          <Typography variant="subtitle2">DEFAULT</Typography>
          <TextField placeholder="text" variant="outlined" fullWidth size="small" />
        </Box>

        <Box>
          <Typography variant="subtitle2">HOVER</Typography>
          <TextField
            placeholder="text"
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: '#7B61FF',
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="subtitle2">CLICK</Typography>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#7B61FF',
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="subtitle2">DISABLED</Typography>
          <TextField placeholder="text" variant="outlined" fullWidth size="small" disabled />
        </Box>

        <Box>
          <Typography variant="subtitle2">ACTIVE</Typography>
          <TextField
            label="Name"
            defaultValue="text"
            variant="outlined"
            fullWidth
            size="small"
            focused
          />
        </Box>

        <Box>
          <Typography variant="subtitle2">ERROR</Typography>
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            size="small"
            error
            helperText=" "
            sx={{
              '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
                borderColor: '#FF4D4F',
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="subtitle2">FILLED</Typography>
          <TextField label="Name" defaultValue="Aidana" variant="outlined" fullWidth size="small" />
        </Box>

        <Box>
          <Typography variant="subtitle2">FOCUS</Typography>
          <TextField
            label="Name"
            defaultValue="text"
            variant="outlined"
            fullWidth
            size="small"
            focused
            sx={{
              '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: '#7B61FF',
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
