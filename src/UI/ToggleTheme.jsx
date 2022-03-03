import React from "react";
import styled from "styled-components";
import { RiSunLine, RiMoonLine } from "react-icons/ri";
import { laptop, tablet, tabletMd } from "../globalStyle/media.styled";

const ScToggleTheme = styled.div`
    cursor: pointer;
    font-size: 1.25rem;
    position: fixed;
    top: 4rem;
    right: 1.35rem;
    transition: all 0.3s ease;
    ${laptop({ fontSize: "25px" })};
    ${tablet({ fontSize: "18px" })};
    color: var(--color-text-2);
    z-index: 13;
    /* 992 */
    ${tabletMd({ top: "2.2rem" })}
    /* 1200 */
    ${laptop({ right: "2.5rem" })}
`;

const ToggleTheme = ({ onToggleTheme, mainCss }) => {
    return (
        <ScToggleTheme onClick={onToggleTheme}>
            {mainCss === "light" ? <RiMoonLine /> : <RiSunLine />}
        </ScToggleTheme>
    );
};

export default ToggleTheme;
