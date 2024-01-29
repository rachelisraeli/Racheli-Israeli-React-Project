import { observer } from "mobx-react";
import { useState } from "react";
import { Button } from "@mui/material";
import { CheckLogin } from "../../store/server";
import TextField from '@mui/material/TextField';
import AdminHome from "./AdminHome";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../Color/Color.jsx';


const Login = observer(() => {

    const [isLogin, setIsLogin] = useState(false);

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

    const setFalse = () => {
        userName = '',
            password = ''
    }

    return (
        <>
            <ThemeProvider theme={theme}>
                <TextField
                    type="text"
                    id="name"
                    label="User Name"
                    value={userName}
                    onChange={handleUserNameChange}
                />

                <br />
                <br />

                <TextField
                    type="password"
                    id="password"
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                />

                <br />
                <br />

                <Button variant="contained" onClick={handleLoginClick}>to login</Button>

                {console.log(isLogin)}
                {isLogin && <AdminHome />}
                {/* {isLogin ? <AdminHome /> : { setFalse }} */}

            </ThemeProvider>
        </>
    );
});

export default Login;
