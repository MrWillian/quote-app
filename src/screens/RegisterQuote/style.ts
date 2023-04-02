import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #292b38;
  padding: 25px;
  gap: 5px;
`;

export const Title = styled.Text`
  align-self: flex-start;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
`;

export const Subtitle = styled.Text`
  align-self: flex-start;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 5px;
`;

export const Form = styled.View`
  margin: 20px;
  gap: 15px;
`;
