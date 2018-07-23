import React, {Component} from "react";
import styled from 'styled-components';
import {CircularProgress} from "material-ui";


const RateDiv = styled.div`
    margin-left: 570px;
    position: absolute;
    display: flex;
    flex-direction: row;
`;


export default class RecommendationRate extends Component {
    render() {
        return (
            <RateDiv>
                <h3>Ocena FUDGE: &nbsp;</h3> <CircularProgress />
            </RateDiv>
        )
    }
};
