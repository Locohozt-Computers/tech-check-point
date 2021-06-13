import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 10vh;
    background-color: white;

    .menu {
        display: flex;
        align-items: center;
        height: 100%;
        padding: 0 15px;

        p {
            margin: 0;
        }

        p:last-child {
            margin-left: 15px;
            cursor: pointer;
        }
    }
`;