import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap' 


    function RenderDish({dish}) {
        return (
                    <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
            )
    }

    function RenderComments(comments) {
        return (
            <div className="col-12 col-md-5 m-1">
                <h2 className="mb-3">Comentários</h2>
                {comments.comments.map((comment) => {
                return (<><p>{comment.comment}</p>-- {comment.author}, {comment.date.substr(8, 2)}-{comment.date.substr(5, 2)}-{comment.date.substr(0, 4)}</>)
            })}
            </div>
        )
    }

const DishDetail = (props) => {
    if (props.dish != null) {
        return(
            <div className="container">
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </div>)
    } else {
        return (
            <div></div>
        )
    }
}




export default DishDetail;