import React from 'react';
import { Button } from '@material-ui/core';
import { LoginContainer, LoginInnerContainer } from './style';

const Login = () => {

  const signIn = (e) => {
    e.preventDefault();
  }
  return (
    <LoginContainer>
      <LoginInnerContainer>
          <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
          alt="" />
          <h1>Sign In</h1>
          <Button type="submit" onClick={signIn}>Sign in with Google</Button>
      </LoginInnerContainer>

    </LoginContainer>
  )
}

export default Login;
