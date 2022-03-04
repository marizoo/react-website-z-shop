import styled from "styled-components";

export const ScGallery = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background: var(--color-bg-1); */
    color: var(--color-text-2);
    margin-top: 10%;

    .gallery__container {
        position: relative;
        background: var(--color-bg-2);
        min-width: 280px;
        width: 100%;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* NAVBAR ------------- */
    .gallery__container-navbar {
        flex: 3;
        display: flex;
        width: 100%;
        margin-bottom: 2rem;
    }
    /* Navbar List */
    .gallery__navbar-list {
        flex: 4;
        height: 100%;
    }
    .gallery__navbar-ul {
        display: flex;
        flex-wrap: wrap;
        background: pink;
        display: flex;
        flex-direction: column;
        line-height: 180%;
        text-align: center;
    }
    .gallery__navbar-li {
    }
    .gallery__navbar-li-a {
        transition: 0.4s;
    }
    .gallery__navbar-li-a:hover {
        color: var(--color-brand);
    }

    /* Navbar Arrow */
    .gallery__navbar-arrow {
        flex: 2;
        height: 100%;
        width: 100%;
        display: flex;
        background: yellow;
        align-items: center;
        justify-content: center;
    }
    .gallery__navbar-arrow-left {
        cursor: pointer;
        transition: 0.4s;
        margin-right: 0.8rem;
        font-size: 1.5rem;
    }

    .gallery__navbar-arrow-right {
        cursor: pointer;
        transition: 0.4s;
        font-size: 1.5rem;
    }

    .gallery__navbar-arrow-left:hover,
    .gallery__navbar-arrow-right:hover {
        color: var(--color-brand);
    }

    /* PRODUCTS ------------- */
    .gallery__container-products {
        flex: 9;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 4rem;
    }

    /* Product Card */
    .gallery__products-card {
        width: 280px;
        height: 360px;
        background: gray;
    }

    .gallery__products-card-img-container {
        width: 100%;
        height: 85%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: lightgray;
    }
    .gallery__products-card-img-img {
        width: 50%;
    }

    .gallery__products-card-data-container {
        width: 100%;
        height: 17%;
        background: pink;
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
    }
`;
