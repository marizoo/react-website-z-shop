import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyles } from "./globalStyle/GlobalStyles";
import Hamburger1 from "./UI/Hamburger1";
import ToggleTheme from "./UI/ToggleTheme";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Announcement from "./components/announcement/Announcement";
import Gallery from "./components/gallery/Gallery";

const ScApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--color-bg-1);
`;

const App = () => {
    const [mainCss, setMainCss] = useState("light");
    const toggleTheme = () => {
        setMainCss((currentCss) => (currentCss === "light" ? "dark" : "light"));
    };

    const [toggleMenu, setToggleMenu] = useState(false);

    const clickToClose = () => {
        setToggleMenu(false);
    };

    return (
        <>
            <GlobalStyles />
            <ScApp className={`${mainCss}-theme`}>
                <ToggleTheme onToggleTheme={toggleTheme} mainCss={mainCss} />
                <Hamburger1
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
                <Navbar toggleMenu={toggleMenu} clickToClose={clickToClose} />
                <Hero />
                <Gallery />
                <Announcement />
                <Footer />
            </ScApp>
        </>
    );
};

export default App;
