import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #292b38;
  padding: 25px;
  gap: 5px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.Text`
  align-self: flex-start;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
  font-family: 'NunitoSans-Bold';
`;

export const Subtitle = styled.Text`
  align-self: flex-start;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 5px;
  font-family: 'NunitoSans';
`;

export const RegisterContainer = styled.View`
  margin: 10px;
  gap: 5px;
`;

export const RegisterLabel = styled.Text`
  text-align: center;
  font-family: 'NunitoSans';
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 4px;
`;
