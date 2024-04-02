import React from "react";
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Arpitha</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                {/* <div className="footer__social">
                    <a href="https://www.linkedin.com/in/arpitha-sheshadri-bhat-017069183?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="home__social-icon" target="_blank">
                    <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="https://github.com/bhatappu11" className="home__social-icon" target="_blank">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div> */}
                <span className="footer__copy">&#169; Arpitha Portfolio. All rights reserved</span>
                <span className="footer__copy">Created using React by Arpitha</span>
            </div>
        </footer>
    )
}

export default Footer