import styled from "styled-components";

function Switch() {
  return (
    <Wrapper>
      <SwitchLabel>
        <input type="checkbox" />
        <span className="slider"></span>
      </SwitchLabel>
    </Wrapper>
  );
}

export default Switch;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

/* --- Switch --- */
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

