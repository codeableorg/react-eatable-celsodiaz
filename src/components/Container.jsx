import styled from "@emotion/styled";

const ContainerDiv = styled.div`
  width: 380px; 
  height: auto; 
  margin: auto;
  text-align: center;
  background-color: #eeecec;
  border-radius: 25px;
`;

export default function Container({ children }) {
  return <ContainerDiv>{children}</ContainerDiv>;
}