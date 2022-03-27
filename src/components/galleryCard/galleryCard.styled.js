import styled from "styled-components";

export const ScGalleryCard = styled.div`
    /* Product Card */
    .gallery__products-card {
        width: 280px;
        height: 360px;
        /* border-bottom: 1px solid black; */
    }

    .gallery__products-card-img-container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--color-bg-galleryCard);
    }
    .gallery__products-card-img-img {
        width: 70%;
        color: var(--color-text-2);
    }

    .gallery__products-card-data-container {
        width: 100%;
        height: 17%;
        line-height: 180%;
        position: relative;
    }
    .gallery__product-card-data-title {
        font-size: 1.1rem;
        letter-spacing: 1px;
        margin-left: 2%;
    }
    .gallery__product-card-data-price {
        font-weight: 600;
        margin-left: 2%;
    }

    .gallery__product-card-data-icon {
        position: absolute;
        top: 15%;
        right: 6%;
        font-size: 1.2rem;
        cursor: pointer;
    }
`;

// How to use media queries
/* /420 */
// ${mobile({})}
/* 576 */
// ${mobileMd({})}
/* 768 */
// ${tablet({})}
/* 992 */
// ${tabletMd({})}
/* 1050 */
// ${tabletLg({})}
/* 1200 */
// ${laptop({})}
