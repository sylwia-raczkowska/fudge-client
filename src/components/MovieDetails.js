import React, {Component} from "react";
import {Avatar, Card, CardText, Chip, List, ListItem} from "material-ui";
import styled from 'styled-components';

const detailsStyle = {
    marginLeft: "550px",
    position: "absolute",
    left: 70,
    right: 50,
    top: 150
};


const listItemStyles = {
    display: "flex",
    flexDirection: "row"
};


const LabelDiv = styled.div`
    font-weight: bold;
`;

const info = ["Plot", "Actors", "Writer", "Country", "Awards", "Production"];

export default class MovieDetails extends Component {
    render() {
        let details = this.props.details;
        return (
            <Card style={detailsStyle}>
                <CardText>
                    <div>
                        <List>
                            {Object.keys(details).filter(value => info.includes(value)).map(value =>
                                ( <ListItem disabled={true} style={listItemStyles}>
                                    <LabelDiv>
                                        {value.toUpperCase()}:
                                    </LabelDiv>
                                    <div className="details">
                                        &nbsp;{details[value]}
                                    </div> </ListItem>)
                            )
                            }
                        </List>
                        <Chip onClick={handleClick} style={{ marginLeft: "15px" }}>
                            <Avatar src="http://icons.iconarchive.com/icons/danleech/simple/128/imdb-icon.png   " />
                            Go to IMDb movie website!
                        </Chip>
                    </div>
                </CardText>
            </Card>
        );

        function handleClick() {
            window.location = details && details.Website;
        }
    }


}