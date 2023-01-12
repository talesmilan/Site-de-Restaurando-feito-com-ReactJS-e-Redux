import React, {Component} from 'react'
import {Button, Modal, Form, ModalBody, FormGroup, ModalHeader, Label, Input} from 'reactstrap'


class CommentButton extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isModalOpen: false
          };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleComment(event) {
        this.toggleModal()
        alert("Nota: " + this.rating.value + " Nome: " + this.name.value + " Comentario: " + this.comment.value)
        event.preventDefault()
      }

    render() {
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
                                <Input className='col-12' type="select" name="rating" id="rating" innerRef={(input) => this.rating = input}>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="name">Seu Nome</Label>
                                <Input type="text" id="name" name="name" placeholder='Seu nome' innerRef={(input) => this.name = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comentario</Label>
                                <Input type="textarea" id="comment" name="comment" rows="5" innerRef={(input) => this.comment = input} />
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