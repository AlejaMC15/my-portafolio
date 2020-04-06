import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Styles/index.css'
import imgIn from '../images/linkedin.jpg'
import imgInstagram from '../images/instagram.png'
import imgGitHub from '../images/gitHub.png'

class Footer extends React.Component {

    render() {
        return (

            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="footer__sections">
                            <div className="foo">
                                <h3>Medellín-Colombia</h3>
                                <h3>Alejandra Meneses Carmona</h3>
                                <h4>aleja-mc@hotmail.com</h4>
                                <h5>300 700 62 12</h5>
                            </div>
                            <section>
                                <div className="footer__icons">
                                    <a href="https://www.linkedin.com/in/alejandra-meneses-carmona-b651551a0/" target="_blank">
                                        <img src={imgIn} alt="" /></a>
                                    <a href="https://www.instagram.com/alejamc15/?hl=es-la" target="_blank"><img
                                        src={imgInstagram} alt="" /></a>
                                    <a href="https://github.com/AlejaMC15" target="_blank"><img src={imgGitHub}
                                        alt="" /></a>
                                </div>
                            </section>
                        </div>
                    </div>
                </footer>
            </div>

        )
    }

}

export default Footer
