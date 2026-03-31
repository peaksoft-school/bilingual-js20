import styled from "styled-components";

function Radio() {
  return (
    <Wrapper>
      <RadioGroup>
        <RadioLabel>
          <input type="radio" name="test" />
        </RadioLabel>
        <RadioLabel>
          <input type="radio" name="test" />
        </RadioLabel>
      </RadioGroup>
    </Wrapper>
  );
}

export default Radio;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

/* --- Radio --- */
const RadioGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const RadioLabel = styled.label`
  input {
    -webkit-appearance: none;
    height: 36px;
    width: 36px;
    border: 4px solid grey;
    border-radius: 100%;
    position: relative;
    top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  input::before {
    content: "";
    height: 18px;
    width: 18px;
    background-color: grey;
    border-radius: 100%;
    position: absolute;
    transform: scale(0);
    transition: all ease 0.3s;
  }

  input:checked::before {
    transform: scale(1.1);
    background-color: #3a10e5;
  }

  input:checked {
    border: 4px solid #3a10e5;
    transition: all ease 0.3s;
  }
`;
