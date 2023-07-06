import { FC } from "react";

import Container from "../../../styles/container";
import Button from "../../../styles/button";

const User: FC<any> = ({ user, deleteUser }) => {
    const { _id, roles, avatar, username } = user;

    const handleDeleteUser = () => {
        deleteUser(_id);
    };

    return (
        <Container width="320px" border="2px solid #ffffff14" radius="10px" padding="15px" align="center" justify="space-between">
            <img src={`data:image/jpg;base64;` + avatar} alt="" width="50px" />
            <p>{`${roles} - ${username}`}</p>
            <Container column="5px">
                <Button background="#36355c">Role</Button>
                <Button background="#ce8c2a">Ban</Button>
                <Button onClick={handleDeleteUser} background="#b64242">
                    Delete
                </Button>
            </Container>
        </Container>
    );
};

export default User;
