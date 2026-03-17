import '../assets/styles/InicioHeader.css'
import { FaGithub } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import gifCyrax from "../../public/cyrax.gif";
import gifScorpion from "../../public/scorpion.gif";


export const InicioHeader = () => {
    return (
        <div className="header-container">

            <section className="header-content">
                <div className="header-text">
                    <h1>Hola, soy <span>Felipe</span></h1>
                    <div className="info-profile">
                        <span>Developer</span>
                        <span>19</span>
                        <span>CL</span>
                    </div>
                    <p>
                        Hola, soy Felipe Urtubia. Estudiante de 3er año de Ingeniería en Informática especializado en desarrollo de software. Mi enfoque combina la rigurosidad técnica del backend en Java con la creación de interfaces modernas en React y Kotlin.
                    </p>
                </div>

                <div className='photo-profile'>
                    <img src="https://res.cloudinary.com/dwxz0svlf/image/upload/v1773517447/Gemini_Generated_Image_cnipgacnipgacnip_r7vbju.png" alt="img" />
                </div>

                <div className="logo-cyrax">
                    <img src={gifCyrax} alt="img" />
                </div>

                <div className="logo-scorpion">
                    <img src={gifScorpion} alt="img" />
                </div>
            </section>

            <section className="social-links">
                <a href='https://github.com/git-felipeUrtubia' target='_blank'><FaGithub className='icon-github icon'/></a>
                <a><ImWhatsapp className='icon-whatsapp icon' /></a>
                <a><FaLinkedin className='icon-linkedin icon' /></a>
            </section>

        </div>
    )
}

