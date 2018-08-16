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
        let showPredictedRate = this.props.showPredictedRate;
        let predictedInfo;
        if(showPredictedRate) {
            predictedInfo =
            <RateDiv>
                <h3>Twoja ocena wg. FUDGE: {predictedRating}</h3>
            </RateDiv>
        }

        return (
            <div>
                {predictedInfo}
                <RateDiv>
                    <h3>Średnia ocena FUDGE: {fudgeAverage}</h3>
                </RateDiv>
                <RateDiv>
                    <h3>Średnia ocena IMdb: {imdbAverage}</h3>
                </RateDiv>
            </div>
        )
    }
};
