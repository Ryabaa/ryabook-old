import styled from "styled-components";

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    height: 100%;
    & p {
        max-width: 150px;
        font-size: 15px;
    }
    & button {
        border: 2px solid #ffffff00;
        border-radius: 10px;
        padding: 5px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
            border: 2px solid #fff;
        }
    }
`;
