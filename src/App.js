import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoList from './todolist';
class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
                <AppBar
              title="TodoList"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
                 <TodoList />
         </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
