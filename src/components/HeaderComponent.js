import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';


class Header extends Component {

    render() {
        return (
            <>
                <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">Restaurante Confusão</NavbarBrand>
                </div>
                </Navbar>  
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Restaurante Confusão</h1>
                                <p>Inspiramo-nos nas melhores cozinhas do mundo e criamos uma experiência de fusão única. Nossas criações deliciosas vão agradar seus sentidos culinários!</p>
                            </div>
                        </div>
                    </div>  
                </div>
            </>
        )
    }

}


export default Header;