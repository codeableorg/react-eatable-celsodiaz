import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { colors } from "../styles/colors";

export const CustomContent = styled.div`
  width:380px ;
  height:660px ;
  margin: auto;
  background-color: #eeecec;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  gap :20px ;
`
export const CustomFooter = styled.footer`
   display:flex;
   flex-direction: row;
   justify-content: space-evenly;
   margin:40px;
   align-items: center;
   h1 {
     vertical-align: middle;
     margin: 0;
   }
`;
export const CustomForm =styled.form`
    display:flex;
    flex-direction: column;
    gap:20px;
`;
export const CustomButton = styled.button`
  background-color: ${colors.orange};
  color: white;
  border-radius: 20px;
  border: none;
  padding: 5px 85px;
  &:hover {
    background-color: orange; 
  }
  cursor: pointer;
`;
export const customIcono = css`
  color: ${colors.orange};
  font-size: 2em;
  vertical-align: middle;
  &:hover {
    color: orange;
  } 
`;

export const CustomAlert = styled.p`
 color: green;
`;