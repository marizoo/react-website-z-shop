import React, { useState } from "react";
import { ScGallery } from "./gallery.styled";
import Section from "../../UI/Section";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import GalleryCard from "../galleryCard/GalleryCard";
import { products } from "../../datas/products";

// import Jacket from "../../images/jacket.png";
// import Jeep from "../../images/jeep.png";
// import Lighter from "../../images/lighter.png";
// import Perfume from "../../images/perfume.png";
// import Scooter from "../../images/scooter.png";
// import Sofa from "../../images/sofa.png";
// import Wallet from "../../images/wallet.png";

const Gallery = () => {
    const [favorite, isFavorite] = useState(false);

    const setFavorite = (id) => {
        isFavorite(!favorite);
    };

    // const GalleryImg = [Jacket, Jeep, Lighter, Perfume, Scooter, Sofa, Wallet];

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
                        {products.map((product) => (
                            <GalleryCard
                                key={product.id}
                                product={product}
                                favorite={favorite}
                                onSetFavorite={setFavorite}
                            />
                        ))}

                        {/* Products Card End */}
                    </div>
                </div>
            </Section>
        </ScGallery>
    );
};

export default Gallery;
