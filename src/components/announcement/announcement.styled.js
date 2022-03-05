import styled from "styled-components";
import {
    mobile,
    mobileMd,
    tablet,
    tabletMd,
} from "../../globalStyle/media.styled";

export const ScAnnouncement = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-1);
    color: var(--color-text-2);

    .announcement__container {
        position: relative;
        background: var(--color-bg-2);
        min-width: 280px;
        width: 100%;
        min-height: 300px;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* 992 */
        ${tabletMd({ alignItems: "end" })}
    }

    /* the image */
    .announcement__img {
        position: absolute;
        width: 100%;
        display: flex;
        justify-content: center;
        top: -20%;
        /* /420 */
        ${mobile({ top: "-25%" })}
        /* 992 */
        ${tabletMd({ left: "-16.5%", top: "-10%" })}
    }
    .announcement__img-img {
        width: 70%;
        /* 992 */
        ${tabletMd({ width: "50%", transform: "rotate(20deg)" })};
    }

    /* the data */
    .announcement__data {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 200%;
        text-align: center;
        /* 992 */
        ${tabletMd({
            width: "40%",
        })}
    }
    .announcement__data-title {
        width: 100%;
        letter-spacing: 2px;
        font-size: 1.5rem;
        margin-top: 1rem;
        line-height: 130%;
        /* /420 */
        ${mobile({ marginTop: "10%" })};
        /* 576 */
        ${mobileMd({ marginTop: "20%" })};
        /* 768 */
        ${tablet({ marginTop: "25%" })}
        /* 992 */
        ${tabletMd({
            marginTop: "0",
            fontSize: "1.7rem",
        })}
    }
    .announcement__data-desc {
        margin: 1.5rem 0;
        font-size: 1.1rem;
        line-height: 130%;
        letter-spacing: 1px;
        /* 992 */
        ${tabletMd({
            letterSpacing: "1.25px",
        })}
    }
    .announcement__data-button {
        width: 100%;
    }
    .announcement__data-button-btn {
        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: 600;
        border: 0;
        background: var(--color-brand);
        color: white;
        cursor: pointer;
        transition: 0.4s;
    }

    .announcement__data-button-btn:hover {
        background: var(--color-brand-dark);
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
