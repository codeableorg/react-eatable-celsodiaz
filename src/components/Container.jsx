import styled from "@emotion/styled";

const ContainerDiv = styled.div`
  width: 390px; 
  height: auto; 
  margin: auto;
  text-align: center;
  background-color: #eeecec;
  border-radius: 25px;
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center;
`;

export default function Container({ children }) {
  return <ContainerDiv>{children}</ContainerDiv>;
}