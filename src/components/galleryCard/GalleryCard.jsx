import React from "react";
import { ScGalleryCard } from "./galleryCard.styled";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

const GalleryCard = ({ product, favorite, onSetFavorite }) => {
    return (
        <ScGalleryCard id="gallery">
            <div className="gallery__products-card">
                <div className="gallery__products-card-img-container">
                    <img
                        src={product.image}
                        alt="product"
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
                        onClick={() => onSetFavorite(product.id)}
                        className="gallery__product-card-data-icon"
                    >
                        {favorite && (
                            <BsSuitHeartFill
                                style={{
                                    color: "var(--color-brand)",
                                }}
                            />
                        )}
                        {!favorite && <BsSuitHeart />}
                    </span>
                </div>
            </div>
        </ScGalleryCard>
    );
};

export default GalleryCard;
