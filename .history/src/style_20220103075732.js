import styled from 'styled-components';

export const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;

export const AppLoading = styled.div`

`;
export const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
  }
`;