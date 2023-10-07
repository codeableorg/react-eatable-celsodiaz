import styled from "@emotion/styled";
import { colors } from "../styles/colors";

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
  padding:0em 30px; 
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const InputField = styled.input`
background-color: #eeecec;
  border: none;
  border-bottom: 1px solid #ccc; 
  padding: 5px;
  outline: none; 
  width: 100%;
  transition: border-bottom-color 0.3s; 
  
  &:focus {
    border-bottom-color: ${colors.orange}; 
  }
`;

const Input = ({ id, name, type = "text", value, onChange, placeholder, label }) => {
  return (
    <InputContainer>
      {label && <InputLabel htmlFor={id || name}>{label}</InputLabel>}
      <InputField
        type={type}
        name={name}
        id={id || name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};
  export default Input;