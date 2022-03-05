import styled from "styled-components";
import {
    laptop,
    mobile,
    mobileMd,
    tablet,
    tabletLg,
    tabletMd,
} from "../../globalStyle/media.styled";

export const ScHero = styled.div`
    height: 100vh;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-1);

    .hero__container {
        position: relative;
        background: pink;
        max-width: 100%;
        min-width: 280px;
        height: 100%;
        border-radius: 30px;
        margin-top: 3rem;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        /* 1050 */
        ${tabletLg({ flexDirection: "row", height: "80%" })};
    }

    /* Data ----- */
    .hero__data-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        line-height: 160%;
        /* 992 */
        ${tabletMd({ alignItems: "center" })}

        /* 1050 */
        ${tabletLg({
            width: "70%",
            height: "90%",
            textAlign: "center",
        })};
    }

    .hero__data-title {
        font-size: 1.5rem;
        max-width: 90%;
        margin-bottom: 1rem;
        line-height: 150%;
        /* /420 */
        ${mobile({ marginBottom: "2rem" })}
        /* 576 */
        ${mobileMd({ fontSize: "1.6rem", marginTop: "2rem" })};
        /* 768 */
        ${tablet({ maxWidth: "80%", marginTop: "3rem" })};
        /* 992 */
        ${tabletMd({
            textAlign: "center",
            marginTop: "2rem",
            width: "70%",
            marginBottom: "2rem",
        })};
        /* 1050 */
        ${tabletLg({ marginTop: "0", marginBottom: "2rem" })};
    }

    .hero__data-search {
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border-radius: 10px;
        /* /420 */
        ${mobile({ justifyContent: "start" })};
        /* 576 */
        ${mobileMd({ width: "90%" })};
        /* 768 */
        ${tablet({ width: "80%" })};
        /* 992 */
        ${tabletMd({ width: "70%" })};
    }

    .hero__data-search-icon {
        display: block;
        display: flex;
        place-content: center;
        margin-left: 2rem;
    }

    .hero__data-search-input-container {
    }

    .hero__data-search-input {
        background: none;
        border: none;
        padding-left: 1rem;
    }

    .hero__data-search-input:focus {
        outline: none;
    }

    /* Image */
    .hero__img-container {
        height: 100%;
        width: 100%;
        margin: 2rem 0;
        display: flex;
        place-content: center;
    }

    .hero__img-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* 576 */
        ${mobileMd({ width: "80%" })};
        /* 768 */
        ${tablet({ width: "60%" })};
        /* 992 */
        ${tabletMd({ width: "50%" })};
        /* 1050 */
        ${tabletLg({ height: "75%", width: "65%" })};
        /* 1200 */
        ${laptop({ height: "80%", width: "60%" })}
    }

    /* Social Media */
    .hero__socialMedia {
        position: absolute;
        top: 10%;
        right: 7%;
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
