import styled from "styled-components";
import { tablet, tabletMd } from "../../globalStyle/media.styled";

export const ScFooter = styled.div`
    min-height: 40vh;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-dark-dark);
    color: var(--color-white);
    text-align: center;
    line-height: 200%;

    .footer__container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        /* 768 */
        ${tablet({
            flexDirection: "row",
            justifyContent: "space-between",
        })}
    }
    /* container 1 */
    .footer__container-logo {
        margin-bottom: 3rem;
        /* 768 */
        ${tablet({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "auto",
            marginTop: "0",
        })}
    }

    .footer__box-logo {
        margin-bottom: 1rem;
    }
    .footer__box-logo-text {
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-left: 1rem;
        margin-top: 2rem;
        font-family: var(--font-family-alt);
        font-size: 1.5rem;
        /* 768 */
        ${tablet({
            marginTop: "0",
        })}
    }

    .footer__box-socialMedia {
        transition: 0.4s;
        cursor: pointer;
    }
    .socialMedia-logo {
        margin: 0 0.8rem;
    }
    .socialMedia-logo:hover {
        color: var(--color-brand);
    }

    .footer__box-copyright {
        font-size: 0.8rem;
        line-height: 150%;
    }
    .footer__box-copyright-p {
    }

    /* container 2 */

    .footer__container-siteMenu {
        margin-bottom: 3rem;
        /* 768 */
        ${tablet({
            marginBottom: "0",
        })}
    }
    .footer__container-siteMenu-title {
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    /* container 3 */
    .footer__container-categories {
        margin-bottom: 3rem;
        /* 768 */
        ${tablet({
            marginBottom: "0",
        })}
    }
    .footer__container-categories-title {
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .footer__categories-ul {
    }
    .footer__categories-li {
    }

    /* container 4 */
    .footer__container-contact {
        margin-bottom: 3rem;
        /* 768 */
        ${tablet({
            marginBottom: "0",
        })}
    }
    .footer__container-contact-title {
        margin-bottom: 1rem;
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    .footer__contact-ul {
    }
    .footer__contact-li {
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
