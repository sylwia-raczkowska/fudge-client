import React, {Component} from "react";
import BackComponent from "../components/BackComponent";
import {Card, CardMedia, CardText, CardTitle, List, ListItem} from "material-ui";
import {Rating} from 'material-ui-rating'
import styled from 'styled-components';



const cardStyles = {
    margin: "20px 100px 20px 100px",
    padding: 40,
    height: "500px",
    position: "relative",
    width: "90%"
};


const rightHalf = {
    marginLeft: "550px",
    position: "absolute",
    left: 70,
    right: 50,
    top: 50
};

const StyledDiv = styled.div`
    position: absolute;
    top: 50;
    left: 50;
    text-align:center;
`;

const mediaStyles = {
    width: "500px"

};

const textStyles = {
    textAlign: "center"
};

const ratingStyles = {
    bottom: 400
};


// const StyledCard = styled(Card)`
//     && {
//     margin: 20px 100px 20px 100px;
//     padding: 40;
//     position: relative;
//     height: 500px;
//     }
// `;

export default class MoviePage extends Component {

    rate(value) {
        console.log(value);
    }

    generate(element) {
        return [0, 1, 2].map(value =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    render() {
        return (
            <div className="container">
                <BackComponent></BackComponent>
                <Card style={cardStyles}>
                    <StyledDiv>
                        <CardMedia style={mediaStyles}
                                   overlay={<CardTitle title="Titanic" subtitle="(1997)" style={textStyles}/>}>
                            <img src={require("../028-titanic-theredlist.jpg")} alt=""/>
                        </CardMedia>
                        <h2>10/10</h2>
                        <Rating style={ratingStyles} value={10} max={10} onChange={v => this.rate(v)}/>
                    </StyledDiv>
                    <Card style={rightHalf}>
                        <CardText>
                            <div>
                                <List>
                                    {this.generate(
                                        <ListItem disabled={true}>
                                            <div> Released: 22 Nov 1995</div>
                                        </ListItem>,
                                    )}
                                </List>
                            </div>
                        </CardText>
                    </Card>
                </Card>
            </div>
        );
    }
}

