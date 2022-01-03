import styled from 'styled-components';

export const SidebarContainer = styled.div`
  color: white;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;

export const SidebarHead = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 3px;
    color: #49274b;
    font-size: 18px;
    background: #fff;
    border-radius: 50%;
  }
`;

export const SidebarInfo = styled.div``;