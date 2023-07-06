import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { IUserAccount } from "../../../types/user";

import Container from "../../../styles/container";
import Auth from "./auth-style";

import Form from "../../form/Form";

import setLocalStorage from "../../../utils/setLocalStorage";

const fields = [
    { key: "avatar", value: "Avatar", type: "file" },
    { key: "username", value: "Username", type: "text" },
    { key: "password", value: "Password", type: "password" },
    { key: "password_confirm", value: "Confirm password", type: "password" },
    { key: "mail", value: "E-mail address", type: "email" },
];

const SignUp: FC = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<string>("");

    const signUp = async (data: IUserAccount) => {
        try {
            const res = await axios.post("http://localhost:4000/auth/signup/", data);
            setUserData(res.data.message);
            if (res.status === 201) {
                setLocalStorage("token", res.data.token);
                setLocalStorage("id", res.data.id);
                navigate("/users");
            }
        } catch (error) {
            throw error;
        }
    };

    return (
        <Auth>
            <h2>
                Create
                <br />a new profile
            </h2>
            <p>{userData}</p>
            <Form formSubmit={signUp} fields={fields} submitName="Sign up" />
            <Container aself="center">
                <Link to="/login">Log In</Link>
            </Container>
        </Auth>
    );
};

export default SignUp;
