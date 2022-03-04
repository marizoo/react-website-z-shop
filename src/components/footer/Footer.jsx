import React from "react";
import { ScFooter } from "./footer.styled";
import Section from "../../UI/Section";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <ScFooter>
            <Section>
                <div className="footer__container">
                    {/* container 1 */}
                    <div className="footer__container-logo">
                        <div className="footer__box-logo">
                            <h3 className="footer__box-logo-text">Z-shop</h3>
                        </div>
                        <div className="footer__box-socialMedia">
                            <span className="socialMedia-logo">
                                <FaFacebook />
                            </span>
                            <span className="socialMedia-logo">
                                <FaTwitter />
                            </span>
                            <span className="socialMedia-logo">
                                <FaInstagram />
                            </span>
                        </div>
                        <div className="footer__box-copyright">
                            <p className="footer__box-copyright-p">
                                Designed by &#128526; Marizoo
                            </p>
                            <p>2022 &copy; All Rights Reserved </p>
                        </div>
                    </div>
                    {/* container 2 */}
                    <div className="footer__container-siteMenu">
                        <h4 className="footer__container-siteMenu-title">
                            Shop
                        </h4>
                        <ul className="footer__links-ul">
                            <li className="footer__links-li">
                                <a href="#">Home</a>
                            </li>
                            <li className="footer__links-li">
                                <a href="#">Gallery</a>
                            </li>
                            <li className="footer__links-li">
                                <a href="#">Price</a>
                            </li>
                            <li className="footer__links-li">
                                <a href="#">Stories</a>
                            </li>
                            <li className="footer__links-li">
                                <a href="#">FAQ</a>
                            </li>
                        </ul>
                    </div>
                    {/* container 3 */}
                    <div className="footer__container-categories">
                        <h4 className="footer__container-categories-title">
                            Categories
                        </h4>
                        <ul className="footer__categories-ul">
                            <li className="footer__categories-li">
                                <a href="#">Electronics</a>
                            </li>
                            <li className="footer__categories-li">
                                <a href="#">Fashion</a>
                            </li>
                            <li className="footer__categories-li">
                                <a href="#">Sports</a>
                            </li>
                            <li className="footer__categories-li">
                                <a href="#">Cosmetics</a>
                            </li>
                            <li className="footer__categories-li">
                                <a href="#">Furnitures</a>
                            </li>
                        </ul>
                    </div>
                    {/* container 4 */}
                    <div className="footer__container-contact">
                        <h4 className="footer__container-contact-title">
                            Contact
                        </h4>
                        <ul className="footer__contact-ul">
                            <li className="footer__contact-li">
                                <a href="#">Electronics</a>
                            </li>
                            <li className="footer__contact-li">
                                <a href="#">Fashion</a>
                            </li>
                            <li className="footer__contact-li">
                                <a href="#">Sports</a>
                            </li>
                            <li className="footer__contact-li">
                                <a href="#">Cosmetics</a>
                            </li>
                            <li className="footer__contact-li">
                                <a href="#">Furnitures</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Section>
        </ScFooter>
    );
};

export default Footer;
