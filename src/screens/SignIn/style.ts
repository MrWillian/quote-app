import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #292b38;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 8px;
`;

export const Form = styled.SafeAreaView`
  display: flex;
  margin-top: 20px;
  gap: 20px;
`;

export const Inputs = styled.View`
  display: flex;
  gap: 5px;
`;
