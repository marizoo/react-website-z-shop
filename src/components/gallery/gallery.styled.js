import styled from "styled-components";
import {
    laptop,
    tablet,
    tabletLg,
    tabletMd,
} from "../../globalStyle/media.styled";

export const ScGallery = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-1);
    /* background: var(--color-bg-1); */

    .gallery__container {
        position: relative;
        min-width: 280px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    /* NAVBAR ------------- */
    .gallery__container-navbar {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 2rem;
        /* 992 */
        ${tabletMd({
            flexDirection: "row",
            justifyContent: "space-between",
        })};
    }
    /* Navbar List */
    .gallery__navbar-list {
        flex: 11;
        height: 100%;
    }
    .gallery__navbar-ul {
        display: flex;
        flex-wrap: wrap;
        display: flex;
        flex-direction: column;
        line-height: 200%;
        text-align: center;
        margin-bottom: 1rem;
        /* 768 */
        ${tablet({
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: "2rem",
            padding: "0 2rem",
        })}
        /* 992 */
        ${tabletMd({
            marginRight: "3rem",
            padding: "0 3rem",
        })};
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
        flex: 1;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .gallery__navbar-arrow-left {
        cursor: pointer;
        transition: 0.4s;
        margin-right: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .gallery__navbar-arrow-right {
        cursor: pointer;
        transition: 0.4s;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .gallery__navbar-arrow-left:hover,
    .gallery__navbar-arrow-right:hover {
        color: var(--color-brand);
    }

    /* PRODUCTS ------------- */
    .gallery__container-products {
        width: 100%;
        height: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        row-gap: 4rem;
        /* 768 */
        ${tablet({
            flexDirection: "row",
            flexWrap: "wrap",
            columnGap: "4rem",
            justifyContent: "center",
        })};
        /* 992 */
        ${tabletMd({ columnGap: "8rem" })};
        /* 1050 */
        ${tabletLg({ columnGap: "3rem" })};
        /* 1200 */
        ${laptop({ columnGap: "5rem" })}
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
