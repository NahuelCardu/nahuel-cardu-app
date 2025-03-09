import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Login = () => {
    const { loginWithRedirect } = useAuth0();

    useEffect(() => {
        loginWithRedirect();
    }, [loginWithRedirect]);

    return null; // No renderiza nada en pantalla, solo ejecuta el login
};

export const LoginBTN = () => {
    const { loginWithRedirect } = useAuth0();
    return <button onClick={() => loginWithRedirect()}>Login</button>;
};

export const LogoutBTN = () => {
    const { logout } = useAuth0();
    return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
        </button>
    );
};
