import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext({});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        authenticated: null,
        username: null,
        role: null
    });

    const login = (username, password) => {
        if (username === 'admin' && password === 'admin') {
            setAuthState({
                authenticated: true,
                username: username,
                role: 'admin'
            });
        } else if (username === 'user' && password === 'user') {
            setAuthState({
                authenticated: true,
                username: username,
                role: 'user'
            });
        } else {
            alert('Invalid username or password!');
        }
    };

    const logout = async () => {
        setAuthState({
            authenticated: false,
            username: null,
            role: null
        });
    };

    const value = {
        onLogin: login,
        onLogout: logout,
        authState
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
