import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
            <div key={leader.id} className="col-12 mt-3">
                <Media tag="li">
                    <Media left middle>
                        <Media object width="150" src={baseUrl + leader.image} alt={leader.name} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{leader.name}</Media>
                        <p>{leader.designation}</p>
                        <p>{leader.description}</p>
                    </Media>
                </Media>
            </div>
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Página Inicial</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Sobre Nós</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Sobre Nós</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2 className="mb-3">Nossa História</h2>
                    <p>Iniciado em 2010, o Restaurante Confusão rapidamente se estabeleceu como um ícone culinário por excelência em São Paulo. Com sua marca única de cozinha de fusão mundial que não pode ser encontrada em nenhum outro lugar, ele conta com o patrocínio da clientela de primeira linha em São Paulo. Apresentando quatro dos melhores chefs três estrelas do mundo, você nunca sabe o que vai chegar ao seu prato na próxima vez que nos visitar.</p>
                    <p>O restaurante teve suas origens humildes no <em>The Frying Pan</em>, uma rede de sucesso iniciada por nosso CEO, o Sr. Peter Pan, que apresentava pela primeira vez as melhores cozinhas do mundo em uma frigideira.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Visão Geral dos Fatos</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Começou</dt>
                                <dd className="col-6">3 Fev. 2013</dd>
                                <dt className="col-6">Principal Acionista</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Faturamento anual</dt>
                                <dd className="col-6">R$ 1,250,375</dd>
                                <dt className="col-6">Funcionários</dt>
                                <dd className="col-6">40</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0 mb-3">É melhor cortar a pizza em quatro pedaços porque
                                    Não estou com fome o suficiente para comer seis.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title"> A sagacidade e a sabedoria de Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Liderança Corporativa</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    