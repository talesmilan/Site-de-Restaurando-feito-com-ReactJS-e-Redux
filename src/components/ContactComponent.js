import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                name: false,
                telnum: false,
                email: false
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state))
        alert("Current state is: " + JSON.stringify(this.state))
        event.preventDefault()
    }

    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true}
        })
    }

    validate(name, telnum, email) {
        const errors = {
            name: '',
            telnum: '',
            email: ''
        }

        if (this.state.touched.name && name.length < 3) {
            errors.name = "O nome deve ter 3 ou mais caracteres"
        } else if (this.state.touched.name && name.length > 40) {
            errors.name = "O nome deve ter 40 ou menos caracteres"
        }

        const reg = /^\d+$/;

        if (this.state.touched.telnum && !reg.test(telnum)) {
            errors.telnum = "O telefone deve conter apenas números"
        }

        if (this.state.touched.telnum && telnum.length < 10) {
            errors.telnum = "O número de telefone deve ter 10 ou mais digitos"
        } else if (this.state.touched.telnum && telnum.length > 12) {
            errors.telnum = "O número de telefone deve ter 12 ou menos digitos"
        }

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1) {
            errors.email = "O email deve ter esse formato exemplo@exemplo.com"
        }

        if (this.state.touched.email && email.split('').filter(x => x === '.').length !== 1) {
            errors.email = "O email deve ter esse formato exemplo@exemplo.com"
        }

        if (this.state.touched.email && email.length < 10) {
            errors.email = "O email deve ter 10 caracteres ou mais caracteres"
        }

        return errors
    }

    render() {

        const errors = this.validate(this.state.name, this.state.telnum, this.state.email)

        return(
            <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Página Inicial</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Contato</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>Contato</h3>
                        </div>
                    </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Informações de localização</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Nosso Endereço</h5>
                            <address>
                            Rua Mongeira Santos, Número: 1509<br />
                            Bairro: Catapituri, Cidade: São Paulo - SP<br />
                            Brasil<br />
                            <i className="fa fa-phone"></i>: +811 1234 5678<br />
                            <i className="fa fa-fax"></i>: +811 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusao@comida.net">confusao@comida.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Mapa da nossa localização</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+81112345678"><i className="fa fa-phone"></i> Tel</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 mb-3">
                    <h3>Nos envie seu Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup row>
                            <Label htmlFor="name" md={2}>Nome</Label>
                            <Col md={10}>
                                <Input type="text" id="name" name="name" placeholder="Nome completo"
                                    value={this.state.name}
                                    valid={errors.name === ''}
                                    invalid={errors.name !== ''}
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur('name')} />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Telefone</Label>
                            <Col md={10}>
                                <Input type="tel" id="telnum" name="telnum"
                                    placeholder="Telefone com DDD" 
                                    value={this.state.telnum} 
                                    valid={errors.telnum === ''}
                                    invalid={errors.telnum !== ''}
                                    onChange={this.handleInputChange} 
                                    onBlur={this.handleBlur('telnum')} />
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Email</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email"
                                    placeholder="Email" 
                                    value={this.state.email} 
                                    valid={errors.email === ''}
                                    invalid={errors.email !== ''}
                                    onChange={this.handleInputChange} 
                                    onBlur={this.handleBlur('email')} />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 6, offset: 2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleInputChange} /> {' '}<strong>Podemos entrar em contato com você?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handleInputChange}>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Seu Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message" rows="12" value={this.state.message} onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">Envie seu Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
        );
    }
}

export default Contact;