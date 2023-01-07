import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap' 

class DishDetail extends Component {

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h2 className="mb-3">Comentários</h2>
                            {this.props.dish.comments.map((comment) => {
                            return (<><p>{comment.comment}</p>-- {comment.author}, {comment.date.substr(8, 2)}-{comment.date.substr(5, 2)}-{comment.date.substr(0, 4)}</>)
                        })}
                        </div>
                    </div>
                </div>
                )
        } else {
            return (
                <div></div>
            )
        }
    }

}

export default DishDetail;