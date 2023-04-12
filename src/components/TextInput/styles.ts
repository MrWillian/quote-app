import styled from 'styled-components/native';

type ErrorProps = {
  showBorder: boolean;
};

export const Container = styled.View`
  display: flex;
  justify-content: center;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 2px;
`;

export const Input = styled.TextInput<ErrorProps>`
  background-color: #fff;
  border-radius: 5px;
  width: 300px;
  font-size: 18px;

  ${({showBorder}) => (showBorder ? 'border: 1px solid red' : '')}
`;

export const ErrorLabel = styled.Text`
  color: red;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 2px;
`;
