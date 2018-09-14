import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`

export const nightTheme = {
  primary: '#707B7E',
  secondary: '#01c1d6',
  headerColor: '#071215',
  fontColor: '#FAFCFC'
}

export const dayTheme = {
  primary: '#e7e7e7',
  secondary: '#ffb617',
  headerColor: '#C3C7C8',
  fontColor: '#010404'
}
