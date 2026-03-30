import React from 'react'
import { Box, Typography } from '@mui/material'
import bilingualImg from '../assets/icons/images/bilingual.png'
import { LogoutButton } from '../components/ui/LogoutButton'

export const HeaderTwo = ({ role = 'client' }) => {
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
        <Box component="img" src={bilingualImg} alt="logo" sx={{ height: '32px' }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#0909f6',
              cursor: 'pointer',
            }}
          >
            TESTS
          </Typography>

          <Typography
            sx={{
              fontSize: '14px',
              color: '#4C4859',
              cursor: 'pointer',
              
            }}
          >
            {role === 'admin' ? 'SUBMITTED RESULTS' : 'SUBMITTED RESULTS'}
          </Typography>

          
        </Box>
      </Box>
    </Box>
  )
}
