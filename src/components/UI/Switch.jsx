import styled from "styled-components";

function Switch() {
  return (
    <Wrapper>
      <SwitchLabel>
        <input type="checkbox" />
        <span className="slider"></span>
      </SwitchLabel>

      <RadioGroup>
        <RadioLabel>
          <input type="radio" name="test" />
        </RadioLabel>
        <RadioLabel>
          <input type="radio" name="test" />
        </RadioLabel>
      </RadioGroup>

      <CheckboxLabel>
        <input type="checkbox" />
        <div className="checkmark"></div>
      </CheckboxLabel>

      <CheckboxLabel2>
        <input type="checkbox" />
        <div className="checkmark3"></div>
      </CheckboxLabel2>
    </Wrapper>
  );
}

export default Switch;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

/* ── Switch ── */
const SwitchLabel = styled.label`
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 70.4px;
  height: 44px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background-color: #adb5bd;
    border: 1px solid #adb5bd;
    transition: all 0.3s;
    border-radius: 30px;
  }

  .slider:before {
    content: "";
    position: absolute;
    height: 38.32px;
    width: 37px;
    border-radius: 20px;
    left: 0.15rem;
    bottom: 0.1rem;
    background-color: #fff;
    transition: all ease 0.3s;
  }

  input:checked + .slider {
    background-color: #2ab930;
    border-color: #2ab930;
  }

  input:checked + .slider:before {
    transform: translateX(1.72rem);
  }
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

/* --- Checkbox 1 ---*/
const CheckboxLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: relative;
    height: 1.3em;
    width: 1.3em;
    background: #fff;
    border: 3px solid grey;
    border-radius: 7px;
    box-shadow:
      0 0 1px rgba(0, 0, 0, 0.3),
      0 1px 1px rgba(0, 0, 0, 0.05);
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 0.45em;
    top: 0.2em;
    width: 0.24em;
    height: 0.6em;
    border: 0 solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }

  input:checked ~ .checkmark {
    background-color: #2ab930;
    border-color: #2ab930;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }
`;

/* --- Checkbox 2 --- */
const CheckboxLabel2 = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  margin-top: 10px;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark3 {
    position: relative;
    height: 1.3em;
    width: 1.3em;
    background: #fff;
    border: 2px solid #999;
    border-radius: 5px;
    box-shadow:
      0 0 1px rgba(0, 0, 0, 0.3),
      0 1px 1px rgba(0, 0, 0, 0.05);
  }

  .checkmark3:after {
    content: "";
    position: absolute;
    display: none;
    left: 0.45em;
    top: 0.2em;
    width: 0.24em;
    height: 0.6em;
    border: 0 solid rgb(0, 255, 0);
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }

  input:checked ~ .checkmark3 {
    background-color: #fff;
    border: 2px solid #999;
  }

  input:checked ~ .checkmark3:after {
    display: block;
  }
`;
