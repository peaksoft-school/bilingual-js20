import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import bilingualImg from '../assets/icons/images/bilingual.png'

export const Header = ({ role = 'client' }) => {
  return (
    <Box
      sx={{
        width: '100%',
        borderBottom: '1px solid #eee',
        backgroundColor: '#fff',
      }}
    >
      <Box
        sx={{
          maxWidth: '1440px',
          height: '80px',
          mx: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 5,
        }}
      >
        
        <Box
          component="img"
          src={bilingualImg}
          alt="logo"
          sx={{
            height: '32px',
          }}
        />

        
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#3A10E5',
              cursor: 'pointer',
            }}
          >
            TESTS
          </Typography>

          
          <Typography
            sx={{
              fontSize: '14px',
              color: '#8C8C8C',
              cursor: 'pointer',
            }}
          >
            {role === 'admin' ? 'SUBMITTED RESULTS' : 'MY RESULTS'}
          </Typography>

          
          <Button
            variant="outlined"
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              fontSize: '12px',
              px: 2.5,
              py: 0.7,
              borderColor: '#121111',
              color: '#000',
              '&:hover': {
                borderColor: '#aaa',
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            LOG OUT
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
