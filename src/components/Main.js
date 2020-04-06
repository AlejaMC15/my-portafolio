import React from 'react'
import pictureAle from '../images/Aleja.jpg'
import landingPage from '../images/landingpage.jpeg'
import formulario from '../images/tributepage.jpeg'
import tributePage from '../images/form.jpeg'
import curriculum from '../CV/CV Alejandra Meneses Carmona.pdf'
import imgCuv from '../images/imgCv.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/index.css'


class Main extends React.Component {

    render() {

        const { imgAle, title, textOne, titleTwo, paragraphOne, titleThree, titleFourth } = this.props

        return (

            <div>
                <div id="inicio" className="container" style={{ 'padding': '55px' }}>
                    <div className="row">
                        <div className="col-md-6 col-md-offset-6">
                            <img className="img-thumbnail img-responsive img-fluid" style={{ 'maxWidth': '100%', height: 'auto' }} src={pictureAle} />
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

                <div id="cards" className="container-fluid center-block d-flex justify-content-around">
                    <div className="row">
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <div className="card" style={{ 'width': '18rem' }}>
                                <img src={landingPage} className="card-img-top" alt="..." style={{'height': '135px', 'padding': '5px'}} />
                                <div className="card-body">
                                    <h5 className="card-title">Página de productos</h5>
                                    <p className="card-text">Mi tercer proyecto.</p>
                                    <a href="https://alejamc15.github.io/pagina-producto/" className="btn btn-dark" target="_blank">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <div className="card" style={{ 'width': '17.5rem', 'height': '18.5rem' }}>
                                <img src={formulario} className="card-img-top" alt="..." style={{'height': '135px', 'padding': '5px'}} />
                                <div className="card-body">
                                    <h5 className="card-title">Formulario de encuesta</h5>
                                    <p className="card-text">Mi segundo proyecto.</p>
                                    <a href="https://alejamc15.github.io/Formulario-FCC/" className="btn btn-dark" target="_blank">Ir a la página</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                            <div className="card" style={{ 'width': '18rem', 'height': '18.5rem'}}>
                                <img src={tributePage} className="card-img-top" alt="..." style={{'height': '135px', 'padding': '5px'}} />
                                <div className="card-body">
                                    <h5 className="card-title">Página tributo</h5>
                                    <p className="card-text">Mi primer proyecto</p>
                                    <a href="https://alejamc15.github.io/tribute-page/" className="btn btn-dark" target="_blank">Ir a la página</a>
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
                            <div className="col-md-2 col-md-offset-2">
                                <a href={curriculum} download="CV Alejandra Meneses Carmona">
                                    <img className="img-responsive" src={imgCuv} style={{'width': '800px', 'height': '500px','padding': '15px', 'background': 'black'}} />
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