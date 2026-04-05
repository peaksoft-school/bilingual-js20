import * as React from 'react';
import { Checkbox as MuiCheckbox } from '@mui/material';
import { styled } from '@mui/material/styles';

const Icon = styled('span')({
  width: 22,
  height: 22,
  border: '2px solid #9e9e9e',
  borderRadius: 4,
  backgroundColor: 'transparent',
});


const CheckedIcon = styled(Icon)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&::after': {
    content: '"✔"',
    fontSize: 14,
    color: '#4caf50',
  },
});

function Checkbox() {
  return (
    <div>
      <MuiCheckbox
        defaultChecked
        icon={<Icon />}
        checkedIcon={<CheckedIcon />}
        sx={{
          padding: 1.2,
          '&:hover': {
            backgroundColor: 'transparent',
          },
        }}
      />
    </div>
  );
}

export default Checkbox;