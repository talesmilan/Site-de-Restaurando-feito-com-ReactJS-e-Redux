import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap' 

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDish: null
        };
    }

    onDishSelected(dish) {
        this.setState({selectedDish: dish})
    }

    renderDish(dish) {
        if (dish != null) {
            return (
            <>
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                <h2 className="mb-3">Comentários</h2>
                {dish.comments.map((comment) => {
                    return (<><p>{comment.comment}</p>-- {comment.author}, {comment.date.substr(8, 2)}-{comment.date.substr(5, 2)}-{comment.date.substr(0, 4)}<p></p>{console.log(comment)}</>)
                })}
            
            </div>
            </>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelected(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        )
    }
}

export default Menu;