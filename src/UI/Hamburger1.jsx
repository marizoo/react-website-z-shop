import React from "react";
import styled from "styled-components";
import { tabletMd } from "../globalStyle/media.styled";

const ScHamburger1 = styled.div`
    cursor: pointer;
    width: 24px;
    height: 18px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
    position: fixed;
    top: 1.5rem;
    right: 1.2rem;
    z-index: 13;
    /* 992 */
    ${tabletMd({ display: "none" })}

    .line1 {
        width: 100%;
        height: 1.5px;
        background: var(--color-text-2);
        transition: all 1s ease;
        transform-origin: left;
        &.active {
            transform: rotate(45deg);
        }
    }

    .line2 {
        width: 100%;
        height: 1.5px;
        background-color: var(--color-text-2);
        transition: all 1s ease;

        &.active {
            opacity: 0;
        }
    }

    .line3 {
        width: 100%;
        height: 1.5px;
        background-color: var(--color-text-2);
        transition: all 1s ease;
        transform-origin: left;

        &.active {
            transform: rotate(-45deg);
        }
    }
`;

const Hamburger1 = ({ toggleMenu, setToggleMenu }) => {
    return (
        <ScHamburger1 onClick={() => setToggleMenu(!toggleMenu)}>
            <span className={toggleMenu ? "line1 active" : "line1"}></span>
            <span className={toggleMenu ? "line2 active" : "line2"}></span>
            <span className={toggleMenu ? "line3 active" : "line3"}></span>
        </ScHamburger1>
    );
};

export default Hamburger1;
