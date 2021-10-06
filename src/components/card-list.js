import React from 'react';

//import CardPage from './card';
import movies  from './movies-data';
import { Card } from 'react-bootstrap';
import './card-list.css';

const CardListPage = () => {
    return (
        <div className="row">
        {movies.map((data,key) => {
            return(
                <div className="col-lg-4 col-md-4">
                <Card key={key} >    
                    <Card.Header>{data.movie}</Card.Header>       
                    <Card.Body>                      
                        <Card.Text>
                            Release date : {data.release}
                        </Card.Text>
                        <Card.Text>
                            Rating : {data.rating}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </div>
            )
            
        })}
        </div>
    )
}

export default CardListPage;