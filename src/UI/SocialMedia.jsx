import React from "react";
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const ScSocialMedia = styled.div`
    color: var(--color-black);
    display: flex;
    flex-direction: column;
    line-height: 180%;

    .socialMedia-logo {
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            color: var(--color-brand);
        }
    }
`;

const SocialMedia = () => {
    return (
        <ScSocialMedia>
            <span className="socialMedia-logo">
                <FaFacebook />
            </span>
            <span className="socialMedia-logo">
                <FaTwitter />
            </span>
            <span className="socialMedia-logo">
                <FaInstagram />
            </span>
        </ScSocialMedia>
    );
};

export default SocialMedia;
