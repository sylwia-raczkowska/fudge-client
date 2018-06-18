import React, { Component }  from 'react';
import {inject, observer} from "mobx-react/index";
import Pagination from 'material-ui-pagination'

@inject("movieStore")
@observer
class Pager extends Component {

    DISPLAY_ELEMENTS = 5;

    constructor(props) {
        super(props);
    }

    render() {
        const { page, totalPages } = this.props.movieStore;
        return (
            <div>
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