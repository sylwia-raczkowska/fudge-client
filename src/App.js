import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from "./components/NavBar";
import Body from "./pages/Body";


class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <NavBar/>
                <Body/>
            </MuiThemeProvider>
        );
    }
}

export default App;
