import React, { useState } from "react";
import { ScGallery } from "./gallery.styled";
import Section from "../../UI/Section";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import GalleryCard from "../galleryCard/GalleryCard";
import { products } from "../../datas/products";

const Gallery = () => {
    const [datas, setDatas] = useState(products);

    const setFavorite = (index) => {
        const newDatas = [...datas];
        newDatas[index].isFavorite = !newDatas[index].isFavorite;
        setDatas(newDatas);
    };

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
                        {datas.map((data, index) => (
                            <GalleryCard
                                key={data.id}
                                product={data}
                                onSetFavorite={setFavorite}
                                index={index}
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
