import styled from "styled-components";

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
    width: min-content;
    & h2 {
        font-size: 40px;
        color: #429c3f;
        text-align: center;
    }
    p {
        color: #e9a586;
    }
    a {
        color: #cfd0d1;
    }
`;
