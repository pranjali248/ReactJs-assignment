import React from 'react';
import { Card } from 'react-bootstrap';

const CardPage = ({props}) => {
    return (
        <Card id={props.id}>           
            <Card.Body>
                <Card.Title>{props.movie}</Card.Title>
                <Card.Text>
                    {props.release}
                    {props.rating}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default CardPage;