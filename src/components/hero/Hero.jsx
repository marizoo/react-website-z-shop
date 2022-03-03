import React from "react";
import { ScHero } from "./hero.styled";
import Section from "../../UI/Section";
import { FiSearch } from "react-icons/fi";
import SocialMedia from "../../UI/SocialMedia";
import Bicycle from "../../images/bicycle.png";

const Hero = () => {
    return (
        <ScHero>
            <Section>
                <div className="hero__container">
                    <div className="hero__data-container">
                        <h2 className="hero__data-title">
                            Get awesome products with the best deal in town
                        </h2>
                        <div className="hero__data-search">
                            <div className="hero__data-search-icon">
                                <FiSearch />
                            </div>
                            <div className="hero__data-search-input-container">
                                <input
                                    className="hero__data-search-input"
                                    type="text"
                                    placeholder="Search products"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hero__img-container">
                        <img
                            src={Bicycle}
                            alt="hero"
                            className="hero__img-img"
                        />
                    </div>
                    <div className="hero__socialMedia">
                        <SocialMedia />
                    </div>
                </div>
            </Section>
        </ScHero>
    );
};

export default Hero;
