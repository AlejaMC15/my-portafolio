import React from 'react'
import pictureAle from '../images/Aleja.jpg';
import TributePage from '../images/tributepage.jpeg';
import Formulario from '../images/formulario.png';
import Documentación from '../images/documentacion.png';
import PagProducto from '../images/landingpage.jpeg';
import Calculadora from '../images/calculadora.png';
import Pomodoro from '../images/pomodoro.png';
import Ecopay from '../images/ecopay.png';
import Conversor from '../images/conversor.png';
import curriculum from '../CV/CV Alejandra Meneses Carmona.pdf';
import imgCuv from '../images/imgCv.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css';


class Main extends React.Component {

    render() {

        const { imgAle, title, textOne, titleTwo, paragraphOne, titleThree, titleFourth } = this.props

        return (

            <div>
                <div id="inicio" className="container" style={{ 'padding': '55px' }}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-6">
                            <img className="img-thumbnail img-fluid" style={{ 'maxWidth': '100%', height: 'auto' }} src={pictureAle} />
                        </div>
                        <div className="col-md-6 col-md-offset-6 align-self-center align-items-center justify-content-justify">
                            <h2 className="titulo1">{title}</h2>
                            <p className="texto1">{textOne}</p>
                        </div>
                    </div>
                </div>

                <hr />

                <div id="quien-soy" className="quien" className="container text-align-center justify-content-justify align-content-center flex-wrap"
                    style={{ 'padding': '60px' }}>
                    <h2 style={{ 'textAlign': 'center' }}>{titleTwo}</h2>
                    <br />
                    <p className="texto2">{paragraphOne}</p>
                </div>

                <hr />

                <div>
                    <h2 id="proyectos" className="titulo2" style={{ 'padding': '60px' }}>{titleThree}</h2>
                </div>

                <div className="container-fluid">
                    <div className="row row-cols-4">
                        <div className="col-xs-1 col-sm-2 col-md-3 col-lg-3 col-xl-3">
                            <div className="card" style={{ 'width': '18rem' }}>
                                <img src={TributePage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Pagina tributo</h5>
                                    <p className="card-text">Tributo a Ada Lovelace</p>
                                    <a href="#" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-xs-1 col-sm-2 col-md-3 col-lg-3 col-xl-3">
                            <div className="card" style={{ 'width': '18rem' }}>
                                <img src={Formulario} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Formulario</h5>
                                    <p className="card-text">Formulario de encuesta</p>
                                    <a href="#" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-xs-1 col-sm-2 col-md-3 col-lg-3 col-xl-3">
                            <div className="card" style={{ 'width': '18rem' }}>
                                <img src={Documentación} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Pagina Documentación</h5>
                                    <p className="card-text">Documentación ciclismo femenino</p>
                                    <a href="#" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-xs-1 col-sm-2 col-md-3 col-lg-3 col-xl-3">
                            <div className="card" style={{ 'width': '18rem' }}>
                                <img src={PagProducto} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Pagina Producto</h5>
                                    <p className="card-text">Tienda de ropa</p>
                                    <a href="#" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-4">
                        <div className="col-xs-1 col-sm-2 col-md-3 col-lg-3 col-xl-3">
                            <div className="card" style={{ 'width': '18rem' }}>
                                <img src={Calculadora} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Calculadora</h5>
                                    <p className="card-text">Calculadora en Javascript</p>
                                    <a href="#" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-xs-1 col-sm-2 col-md-3 col-lg-3 col-xl-3">
                            <div className="card" style={{ 'width': '18rem' }}>
                                <img src={Pomodoro} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Reloj Pomodoro</h5>
                                    <p className="card-text">Reloj pomodoro en ReactJs</p>
                                    <a href="#" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-xs-1 col-sm-2 col-md-3 col-lg-3 col-xl-3">
                            <div className="card" style={{ 'width': '18rem' }}>
                                <img src={Ecopay} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">ECOPAY</h5>
                                    <p className="card-text">Aplicación de reciclaje</p>
                                    <a href="#" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div classNameName="col-xs-1 col-sm-2 col-md-3 col-lg-3 col-xl-3">
                            <div className="card" style={{ 'width': '18rem' }}>
                                <img src={Conversor} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Conversor</h5>
                                    <p className="card-text">Convertidor de °C a °F</p>
                                    <a href="#" className="btn btn-dark">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h2 id="cv" style={{ 'textAlign': 'center', 'padding': '50px' }}>{titleFourth}</h2>
                    <h2 style={{ 'textAlign': 'center', 'padding': '50px', 'color': 'black' }}>Haga click en la imagen para descargar</h2>
                    <div className="container-fluid center-block d-flex justify-content-around">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-12">
                                <a href={curriculum} download="CV Alejandra Meneses Carmona">
                                    <img className="img-fluid img-responsive" src={imgCuv} style={{ 'width': '600px', 'height': '400px', 'padding': '15px', 'background': 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>

        )
    }

}

export default Main