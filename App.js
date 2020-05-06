import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import "./App.css"
import Home from './components/Home'



class App extends React.Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Home />

      </>

    )
  }
}

export default App;
