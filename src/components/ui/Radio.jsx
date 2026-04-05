import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiRadio from '@mui/material/Radio';

const StyledRadio = styled(MuiRadio)({
  color: '#9A9A9A',
  '&.Mui-checked': {
    color: '#3A10E5',
  },
});

export const Radio = () => {
  const [selectedValue, setSelectedValue] = React.useState('d');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <div>
      <StyledRadio {...controlProps('d')} />
      <StyledRadio {...controlProps('e')} />
    </div>
  );
};