import React, {Component} from 'react';
import { Provider } from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from "./containers/NavBar";
import Body from "./pages/Body";

import MovieStore from "./store";


class App extends Component {

    constructor(props) {
      super(props);
      this.movieStore = new MovieStore();
    }

    render() {
        return (
          <Provider movieStore={this.movieStore}>
            <MuiThemeProvider>
                <NavBar/>
                <Body/>
            </MuiThemeProvider>
          </Provider>
        );
    }
}

export default App;
