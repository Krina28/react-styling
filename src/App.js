import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Form from './form';
import logo from './logo.png';
import { dayTheme, nightTheme } from './common';

const AppWrapper = styled.div`
  text-align: center;
`
const AppLogo = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 80px;
`
const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  background-color: ${props => props.theme.headerColor};
`
const AppTitle = styled.h1`
  font-size: 1.3em;
  color: ${props => props.theme.fontColor};
`
const AppIntro = styled.p`
  font-size: large;
`
const Button = styled.button`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.primary};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.primary};
  border-radius: 2px;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: dayTheme
    }
  }

  _changeTheme = (val) => {
    this.setState({ theme: val === 'night' ? nightTheme : dayTheme })
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <AppHeader>
            <AppLogo src={logo} alt="logo" />
            <AppTitle>Welcome to React + Styled-Components </AppTitle>
          </AppHeader>
          <AppIntro>
            To get started, edit <code>src/App.js</code> and save to reload.
            <Button onClick={this._changeTheme.bind(this, 'day')}>Day Theme</Button>
            <Button onClick={this._changeTheme.bind(this, 'night')}>Night Theme</Button>
            <Form />
          </AppIntro>
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
