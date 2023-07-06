import styled from "styled-components";

export default styled.header`
    display: flex;
    align-items: center;
    padding: 0 25%;
    width: 100%;
    height: 70px;
    position: fixed;
    top: 0;
    background: #0e0e0f;
    border-bottom: #1e1d21 1px solid;
`;

const Logo = styled.a`
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: 170px;

    & h1 {
        font-size: 22px;
    }
`;

const Input = styled.div`
    position: relative;
    background-color: #19191d;
    display: flex;
    align-items: center;
    width: 250px;
    height: 35px;
    margin-left: 20px;
    border-radius: 15px;
    padding-left: 15px;

    & input {
        width: 100%;
        height: 100%;
        position: absolute;
        padding-left: 35px;
        &::placeholder {
            color: inherit;
        }
        &:focus::placeholder {
            opacity: 0.2;
        }
    }
`;

const Notification = styled.button``;

const Avatar = styled.button`
    & img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
`;

const User = styled.div`
    display: flex;
    margin-left: auto;
    justify-self: end;
    column-gap: 15px;
`;

export { Logo, Input, Notification, Avatar, User };
