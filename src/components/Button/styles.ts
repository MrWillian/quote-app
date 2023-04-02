import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5c5091;
  border-radius: 5px;
  padding: 10px;
  elevation: 10;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;
