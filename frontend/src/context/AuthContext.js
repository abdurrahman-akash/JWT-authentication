import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens") 
            ? JSON.parse(localStorage.getItem("authTokens")) 
            : null
    );

    const [user, setUser] = useState(() => {
        return localStorage.getItem("authTokens")
            ? jwtDecode(localStorage.getItem("authTokens")) 
            : null;
    });

    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        const response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
            navigate("/");
            Swal.fire({
                title: "Login successful",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        } else {
            Swal.fire({
                title: "Username or password is incorrect",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }
    };

    const registerUser = async (email, username, password, password2) => {
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, username, password, password2 }),
        });

        const data = await response.json();

        if (response.status === 201) {
            navigate("/login");
            Swal.fire({
                title: "Registration successful",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        } else {
            console.error("Registration failed:", data);
            Swal.fire({
                title: "Registration failed",
                text: data.detail || "Please check your input and try again.",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem("authTokens");
        navigate("/login");
        Swal.fire({
            title: "Logout successful",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        });
    };

    useEffect(() => {
        if (authTokens) {
            const decodedToken = jwtDecode(authTokens.access);
            if (decodedToken.exp * 1000 < Date.now()) {
                logoutUser();  // Auto logout if expired
            } else {
                setUser(decodedToken);
            }
        }
    }, [authTokens]);


    const refreshToken = async () => {
        const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh: authTokens?.refresh })
        });
    
        const data = await response.json();
    
        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            localStorage.setItem("authTokens", JSON.stringify(data));
        } else {
            logoutUser();
        }
    };
    

    return (
        <AuthContext.Provider value={{ user, setUser, authTokens, setAuthTokens, loginUser, registerUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;