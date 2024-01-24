import { observer } from "mobx-react";
import { useState } from "react";
import { Button } from "@mui/material";
import { CheckLogin } from "../../store/server";
import TextField from '@mui/material/TextField';

const Login = observer(() => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');   

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginClick = () => {
        CheckLogin(userName, password);
    };

    return (
        <>
            <TextField
                type="text"
                id="outlined-required"
                label="User Name"
                value={userName}
                onChange={handleUserNameChange}
            />

            <br />
            <br />

            <TextField
                type="password"
                id="outlined-required"
                label="Password"
                value={password}
                onChange={handlePasswordChange}
            />

            <br />
            <br />

            <Button variant="contained" onClick={handleLoginClick}>to login</Button>

        </>
    );
});

export default Login;
