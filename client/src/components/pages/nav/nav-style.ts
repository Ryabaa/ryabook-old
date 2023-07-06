import styled from "styled-components";

export default styled.nav`
    display: flex;
    flex-direction: column;
    width: 170px;
    row-gap: 10px;
`;

const StyledLink = styled.a`
    display: flex;
    column-gap: 10px;
    align-items: center;
    padding-left: 10px;
    width: 100%;
    height: 35px;
    border-radius: 15px;
    transition: all 0.1s ease;

    & p {
        color: #b0b0b0;
    }

    &:hover {
        background: #545455;
        & p {
            color: inherit;
        }
    }
`;

export { StyledLink };
