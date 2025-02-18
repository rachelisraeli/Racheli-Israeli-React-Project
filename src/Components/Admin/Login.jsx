import { observer } from "mobx-react";
import { useState } from "react";
import { Button } from "@mui/material";
import { CheckLogin } from "../../store/server";
import TextField from '@mui/material/TextField';
import AdminHome from "./AdminHome";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Color/Color.jsx';
import dataStore from '../../store/store.js';
import "./Admin.css";

const Login = observer(() => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginClick = async () => {
        await CheckLogin(userName, password);
        setUserName('');
        setPassword('');
    };

    return (
        <>
            <div className="container">
                <ThemeProvider theme={theme}>
                    <TextField
                        type="text"
                        id="name"
                        label="User Name"
                        value={userName}
                        onChange={handleUserNameChange}
                        className="button"
                    />
                    <TextField
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="button"
                    />
                    <Button className="button" variant="contained" onClick={handleLoginClick}>to login</Button>
                    {dataStore.isLogin ? <AdminHome /> : null}
                </ThemeProvider>
            </div>
        </>
    );
});

export default Login;

