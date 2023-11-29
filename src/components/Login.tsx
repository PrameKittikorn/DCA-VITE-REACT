import React from 'react'
import { useState } from 'react';




const Login = () => {
    let isLogin:boolean = false;
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    
    
    const onChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
        console.log(username);
    }
    
    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        console.log(password);
    }
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Submitted");
    }
    
    return (
        <>
        <form onSubmit={onSubmit}>
            <label>Username</label>
            <input type="text" onChange={onChangeUsername} />
            <label>Password</label>
            <input type="password" onChange={onChangePassword} />
            <button type="submit">Login</button>
            </form>
        </>
    )
}



export default Login