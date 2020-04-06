import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/index.css'

class Nav extends React.Component {

    render() {
        return (

            <div>
                <header className="header">
                    <div className="container-{breakpoint} fixed-top justify-content-center">
                        <nav
                            className="navbar navbar-inverse navbar-static-top navbar-expand-lg navbar-light bg-white justify-content-between text-responsive">
                            <a className="navbar-brand" href="#">
                                <h2 className="nombre text-responsive">Alejandra Meneses Carmona</h2>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-item nav-link active text-dark" href="#inicio">Inicio <span
                                        className="sr-only">(current)</span></a>
                                    <a className="nav-item nav-link text-dark" href="#quien-soy">¿Quien soy?</a>
                                    <a className="nav-item nav-link text-dark" href="#proyectos">Proyectos</a>
                                    <a className="nav-item nav-link text-dark" href="#cv">CV</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>

        )
    }

}

export default Nav