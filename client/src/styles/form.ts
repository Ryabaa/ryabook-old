import styled from "styled-components";

export default styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 10px;
    width: min-content;
    border-radius: 20px;
    font-size: 28px;
    background-color: #f3bf2fff;
    color: #fff;
    padding: 30px 60px;

    & input {
        border-radius: 10px;
        padding: 10px 15px;
    }

    & input[type="submit"] {
        padding: 10px 60px;
    }
`;
