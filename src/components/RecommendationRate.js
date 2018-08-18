import React, {Component} from "react";
import styled from 'styled-components';
import {inject, observer} from "mobx-react";


const RateDiv = styled.div`
    margin-left: 570px;
    display: flex;
    flex-direction: row;
`;

@inject("movieStore")
@observer
export default class RecommendationRate extends Component {

    constructor(props) {
        super(props);
        props.movieStore.getAverageRating();
        props.movieStore.getPredictedRating();
    }

    render() {
        let imdbAverage = this.props.imdbAverage;
        let fudgeAverage = this.props.movieStore.averageRating;
        let predictedRating = this.props.movieStore.predictedRating;
        let hidePredictedRate = this.props.hidePredictedRate;
        let predictedInfo;
        let averageInfo;
        if (!hidePredictedRate && predictedRating != null) {
            predictedInfo =
                <RateDiv>
                    <h3>Your rate by FUDGE: {predictedRating}</h3>
                </RateDiv>
        }

        if (fudgeAverage) {
            averageInfo = <RateDiv>
                <h3>FUDGE average rate: {fudgeAverage}</h3>
            </RateDiv>
        }

        return (
            <div>
                {predictedInfo}
                {averageInfo}
                <RateDiv>
                    <h3>IMDb average rate: {imdbAverage}</h3>
                </RateDiv>
            </div>
        )
    }
};
