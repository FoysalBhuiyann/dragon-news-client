import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const user = { displyName: 'Batas Ali' }

    const authInfo = { user };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;