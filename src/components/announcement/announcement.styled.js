import styled from "styled-components";

export const ScAnnouncement = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-1);
    /* background: lightblue; */

    .announcement__container {
        position: relative;
        background: lightgray;
        max-width: 100%;
        min-width: 280px;
        height: 300px;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
