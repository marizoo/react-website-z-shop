import React from "react";
import { ScGallery } from "./gallery.styled";
import Section from "../../UI/Section";
import { BsArrowLeft, BsArrowRight, BsSuitHeartFill } from "react-icons/bs";
import Jacket from "../../images/jacket.png";
import Jeep from "../../images/jeep.png";

const Gallery = () => {
    return (
        <ScGallery>
            <Section>
                <div className="gallery__container">
                    <div className="gallery__container-navbar">
                        <div className="gallery__navbar-list">
                            <ul className="gallery__navbar-ul">
                                <li className="gallery__navbar-li">
                                    <a
                                        className="gallery__navbar-li-a"
                                        href="#"
                                    >
                                        Electronics
                                    </a>
                                </li>
                                <li className="gallery__navbar-li">
                                    <a
                                        className="gallery__navbar-li-a"
                                        href="#"
                                    >
                                        Fashion
                                    </a>
                                </li>
                                <li className="gallery__navbar-li">
                                    <a
                                        className="gallery__navbar-li-a"
                                        href="#"
                                    >
                                        Sports
                                    </a>
                                </li>
                                <li className="gallery__navbar-li">
                                    <a
                                        className="gallery__navbar-li-a"
                                        href="#"
                                    >
                                        Cosmetics
                                    </a>
                                </li>
                                <li className="gallery__navbar-li">
                                    <a
                                        className="gallery__navbar-li-a"
                                        href="#"
                                    >
                                        Furnitures
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="gallery__navbar-arrow">
                            <span className="gallery__navbar-arrow-left">
                                <BsArrowLeft />
                            </span>
                            <span className="gallery__navbar-arrow-right">
                                <BsArrowRight />
                            </span>
                        </div>
                    </div>
                    <div className="gallery__container-products">
                        {/* Products Card 1 */}
                        <div className="gallery__products-card">
                            <div className="gallery__products-card-img-container">
                                <img
                                    src={Jacket}
                                    alt="product"
                                    className="gallery__products-card-img-img"
                                />
                            </div>
                            <div className="gallery__products-card-data-container">
                                <p className="gallery__product-card-data-title">
                                    Military Jacket
                                </p>
                                <p className="gallery__product-card-data-price">
                                    $1299,-
                                </p>
                                <span className="gallery__product-card-data-icon">
                                    <BsSuitHeartFill />
                                </span>
                            </div>
                        </div>
                        {/* Products Card 2 */}
                        <div className="gallery__products-card">
                            <div className="gallery__products-card-img-container">
                                <img
                                    src={Jeep}
                                    alt="product"
                                    className="gallery__products-card-img-img"
                                />
                            </div>
                            <div className="gallery__products-card-data-container">
                                <p className="gallery__product-card-data-title">
                                    Jeep 4wd
                                </p>
                                <p className="gallery__product-card-data-price">
                                    $ 229,000,-
                                </p>
                                <span className="gallery__product-card-data-icon">
                                    <BsSuitHeartFill />
                                </span>
                            </div>
                        </div>
                        {/* Products Card End */}
                    </div>
                </div>
            </Section>
        </ScGallery>
    );
};

export default Gallery;
