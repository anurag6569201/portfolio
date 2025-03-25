import '../../assets/Landing/Landing.css'
import '../../assets/Landing/LandingOver.css'

function Landing() {
    return (
        <>
            <div className="wrapper">
                <canvas id="stars"></canvas>
                <canvas id="yahia"></canvas>
                <div className="container">
                    <div className="template color-yellow" data-template="home">
                        <main>
                            <h1><span>A
                                <mark> 21 years</mark> old</span><span> Musician, Educator, Smart</span></h1>
                            <div className="p"><span>hello@rohitkumarsaket.com</span><span>(+91) 8989591496</span></div>
                            <div className="links">
                                <a className="link color-yellow" href="https://beta.yahiarefaiea.com/#bucket" title="View my bucket list" target="_blank">View my bucket list</a>
                                <a className="link color-green" href="https://beta.yahiarefaiea.com/#secret" title="Tell me a secret" target="_blank">Tell me a secret</a>
                                <a className="link color-red" href="https://beta.yahiarefaiea.com/Yahia_Refaiea_Resume.pdf" title="Download my résumé" target="_blank">Download my résumé</a>
                            </div>
                        </main>
                        <footer>
                            <div className="links"><a className="link small alt" href="http://facebook.com/YahiaRefaiea" title="Facebook (@YahiaRefaiea)" target="_blank">Facebook</a><a className="link small alt" href="http://twitter.com/YahiaRefaiea" title="Twitter (@YahiaRefaiea)" target="_blank">Twitter</a><a className="link small alt" href="http://codepen.io/YahiaRefaiea" title="Codepen (@YahiaRefaiea)" target="_blank">Codepen</a><a className="link small alt" href="http://github.com/YahiaRefaiea" title="GitHub (@YahiaRefaiea)" target="_blank">GitHub</a></div>
                        </footer>
                    </div>
                    <div className="loading" id="identity" title="Yahia Refaiea identity">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <a className="loading" id="signature" href="https://beta.yahiarefaiea.com/" title="Go to home" target="_blank"></a>
                </div>
            </div>
        </>
    )
}

export default Landing;