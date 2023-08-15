import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  margin-bottom: 10px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  color: black; /* Cor do texto do label */
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white; /* Cor do fundo do campo de entrada */
  color: black; /* Cor do texto do campo de entrada */

  ::placeholder {
    color: #777; /* Cor do placeholder */
  }
`;