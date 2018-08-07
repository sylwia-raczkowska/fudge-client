import React, {Component} from "react";

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {inject, observer} from "mobx-react/index";

const style = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0'
  },
  button: {
    margin: '0 10px'
  }
};


@inject("movieStore")
@observer
class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  _handleInputChange(event) {
    const {value} = event.target;
    if (value.length > 3) {
      this.props.movieStore.fetchSearch(value);
    }
  }

  _searchReset(event) {
    this.setState({
      input: ''
    });
    this.props.movieStore.fetchMovies();
  }

  render() {
    return (
      <div style={style.root}>
        <TextField
          hintText="Movie title"
          style={style}
          onChange={(e) => this._handleInputChange(e)}
        />
        <FlatButton label="Reset search" onClick={(e) => this._searchReset(e)}/>
      </div>
    );
  }
}

export default SearchBar;