import React, { Component }  from 'react';
import {inject, observer} from "mobx-react/index";
import Pagination from 'material-ui-pagination'

const styles = {
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0'
  }
};

@inject("movieStore")
@observer
class Pager extends Component {

    DISPLAY_ELEMENTS = 5;

    render() {
        const { page, totalPages } = this.props.movieStore;
        return (
            <div style={styles.root}>
                <Pagination
                    total = { totalPages }
                    current = { page }
                    display = { this.DISPLAY_ELEMENTS }
                    onChange = { number => this.props.movieStore.changePage(number)}
                />
            </div>
        );
    }
}

export default Pager;