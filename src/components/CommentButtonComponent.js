import React, {Component} from 'react'
import {Button, Modal, Form, ModalBody, FormGroup, ModalHeader, Label, Input, FormFeedback} from 'reactstrap'


class CommentButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false,
            name: "",
            rating: "",
            comment: "",
            touched: {
                name: false,
                comment: false
            }
          };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name

        this.setState({
            [name]: value
        })

    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        })
    }

    validate(name) {
        const errors = {
            name: ''
        }

        if (this.state.touched.name && name.length < 3) {
            errors.name = "O nome deve ter 3 ou mais caracteres"
        } else if (this.state.touched.name && name.length > 40) {
            errors.name = "O nome deve ter 40 ou menos caracteres"
        }

        return errors
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleComment(event) {
        this.toggleModal()
        alert("Nota: " + this.state.rating + " Nome: " + this.state.name + " Comentario: " + this.state.comment)
        event.preventDefault()
      }

    render() {

        const errors = this.validate(this.state.name)

        return (
            <>
                <div className='mt-5'>
                    <Button onClick={this.toggleModal}><span className='fa fa-pencil fa-lg mr-1'></span> Comentar</Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Escreva um comentário</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleComment}>
                            <FormGroup>
                                <Label htmlFor="rating">Nota</Label>
                                <Input className='col-12' type="select" name="rating" id="rating"
                                    value={this.state.rating}
                                    onChange={this.handleInputChange}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Seu Nome</Label>
                                <Input type="text" id="name" name="name" placeholder='Seu nome'
                                    value={this.state.name}
                                    onChange={this.handleInputChange}
                                    valid={errors.name === ''}
                                    invalid={errors.name !== ''} 
                                    onBlur={this.handleBlur('name')} />
                                    <FormFeedback>{errors.name}</FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comentario</Label>
                                <Input type="textarea" id="comment" name="comment" rows="5"
                                    value={this.state.comment}
                                    onChange={this.handleInputChange} />
                            </FormGroup>
                            <Button type="submit" value="submit" color='primary'>Enviar</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                        </>
        )
    }

}


export default CommentButton