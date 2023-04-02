import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}))`
  flex: 1;
  background-color: #292b38;
`;

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 8px;
  text-align: center;
`;

export const Form = styled.SafeAreaView`
  display: flex;
  margin-top: 20px;
  padding-bottom: 15px;
  gap: 20px;
`;

export const Inputs = styled.View`
  display: flex;
  gap: 5px;
`;
