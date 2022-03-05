import React from "react";
import { ScAnnouncement } from "./announcement.styled";
import Section from "../../UI/Section";
import Shoe from "../../images/running_shoes_sm.png";

const Announcement = () => {
    return (
        <ScAnnouncement id="announcement">
            <Section>
                <div className="announcement__container">
                    <div className="announcement__img">
                        <img
                            src={Shoe}
                            alt=""
                            className="announcement__img-img"
                        />
                    </div>
                    <div className="announcement__data">
                        <h3 className="announcement__data-title">
                            Latest stylish shoe
                        </h3>
                        <p className="announcement__data-desc">
                            Nike Hulk 2022 mutant{" "}
                        </p>
                        <div className="announcement__data-button">
                            <button className="announcement__data-button-btn">
                                See all
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </ScAnnouncement>
    );
};

export default Announcement;
