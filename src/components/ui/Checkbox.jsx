import styled from "styled-components";

function Checkbox() {
  return (
    <Wrapper>
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

export default Checkbox;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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