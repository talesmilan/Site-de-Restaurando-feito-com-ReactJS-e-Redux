import React from 'react';

function Contact(props) {
    return(
        <div className="container">
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
      </div>
    );
}

export default Contact;