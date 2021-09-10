import React from 'react';
import Navigation from './Components/Pages/Navigation';
import Main from './Components/Pages/Main';
import {createMuiTheme, ThemeProvider} from '@material-ui/core'

const theme = createMuiTheme({
  typography:{
    fontFamily: 'Futura',
    h3:{
      fontFamily: 'Bona Nova'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <main>
      <Navigation />
      <Main />
      </main>
    </div>
    </ThemeProvider>
  );
}

export default App;
