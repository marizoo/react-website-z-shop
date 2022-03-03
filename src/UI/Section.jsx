import React from "react";
import styled from "styled-components";
import {
    laptop,
    laptopMd,
    mobile,
    mobileMd,
    tablet,
    tabletMd,
} from "../globalStyle/media.styled";

const ScSection = styled.div`
        width: 100%;
        max-width: 1200px;
        height: 100%;
        padding: 5rem 2rem;  
        display: flex;
        place-content: center;
        overflow: hidden;
        ${mobile({ padding: "5.25rem 2.5rem" })};
        ${mobileMd({ padding: "5.5rem 3rem" })};
        ${tablet({ padding: "5.75rem 3.5rem" })};
        ${tabletMd({ padding: "6rem 4rem" })};
        ${laptop({ padding: "6.25rem 6rem" })};
        ${laptopMd({})};
}
`;

const Section = ({ children }) => {
    return <ScSection>{children}</ScSection>;
};

export default Section;
