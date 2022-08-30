import { FC } from "react";
import axios from "axios";

import { IUserAccount } from "../../types/user";

import Form from "../Form/Form";

const fields = [
    { key: "login", value: "Login", type: "text", placeholder: "vasyapupkin" },
    { key: "password_1", value: "Password", type: "password", placeholder: "password" },
    { key: "password_2", value: "Confirm password", type: "password", placeholder: "password" },
    { key: "phone", value: "Phone", type: "number", placeholder: "+375 29 228 1337" },
    { key: "email", value: "Email", type: "email", placeholder: "billyherrington@gmail.com" },
];

const SignUp: FC = () => {
    const signUp = async (data: IUserAccount) => {
        await axios.post("http://localhost:4000/signup/succes", data);
    };

    return (
        <div>
            <Form formSubmit={signUp} fields={fields}>
                <p>Sign Up</p>
            </Form>
        </div>
    );
};

export default SignUp;
