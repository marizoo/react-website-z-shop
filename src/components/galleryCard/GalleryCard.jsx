import React from "react";
import { ScGalleryCard } from "./galleryCard.styled";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const GalleryCard = ({ product, onSetFavorite, index }) => {
    return (
        <ScGalleryCard id="gallery">
            <div className="gallery__products-card">
                <div className="gallery__products-card-img-container">
                    <img
                        src={
                            require(`../../images/${product.image}.png`).default
                        }
                        alt={product.title}
                        className="gallery__products-card-img-img"
                    />
                </div>
                <div className="gallery__products-card-data-container">
                    <p className="gallery__product-card-data-title">
                        {product.title}
                    </p>
                    <p className="gallery__product-card-data-price">
                        $ {product.price},-
                    </p>
                    <span
                        onClick={() => onSetFavorite(index)}
                        className="gallery__product-card-data-icon"
                    >
                        {product.isFavorite && (
                            <BsSuitHeartFill
                                style={{
                                    color: "var(--color-brand)",
                                }}
                            />
                        )}
                        {!product.isFavorite && <BsSuitHeart />}
                    </span>
                </div>
            </div>
        </ScGalleryCard>
    );
};

export default GalleryCard;
