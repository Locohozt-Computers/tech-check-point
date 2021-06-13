import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    background-color: white;
    padding: 0 15px;

    .menu {
        display: flex;
        align-items: center;
        height: 100%;

        p {
            margin: 0;
        }

        p:last-child {
            margin-left: 15px;
            cursor: pointer;
        }
    }
`;