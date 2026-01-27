import { useState } from "react";
import validation from "./validation";
import "./Form.css";

export default function Form(props) {

    const [isRegister, setIsRegister] = useState(false);
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({});


    const handleChange = event => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
        setErrors(validation({
            ...userData,
            [name]: value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault();

        if (isRegister) {
            // Registro de nuevo usuario
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userExists = users.find(u => u.email === userData.email);

            if (userExists) {
                alert("Este email ya está registrado. Por favor inicia sesión.");
                return;
            }

            users.push(userData);
            localStorage.setItem('users', JSON.stringify(users));
            alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
            setIsRegister(false);
            setUserData({ email: "", password: "" });
        } else {
            // Login
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === userData.email && u.password === userData.password);

            if (user) {
                props.login(userData);
            } else {
                alert("Credenciales incorrectas. Si no tienes cuenta, regístrate.");
            }
        }
    }

    const toggleMode = () => {
        setIsRegister(!isRegister);
        setUserData({ email: "", password: "" });
        setErrors({});
    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <div className="portal-animation"></div>

                <h1 className="form-title">
                    {isRegister ? "Create Account" : "Welcome Back"}
                </h1>
                <p className="form-subtitle">
                    {isRegister ? "Join the multiverse adventure" : "Enter the portal to continue"}
                </p>

                <form onSubmit={handleSubmit} className="login-form">

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={userData.email}
                            placeholder="rick@citadel.com"
                            onChange={handleChange}
                            className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={userData.password}
                            placeholder="••••••••"
                            onChange={handleChange}
                            className={errors.password ? "input-error" : ""}
                        />
                        {errors.password && <p className="error-text">{errors.password}</p>}
                    </div>

                    <button
                        type="submit"
                        className="submit-btn"
                        disabled={errors.email || errors.password || !userData.email || !userData.password}
                    >
                        {isRegister ? "Register" : "Login"}
                    </button>

                    <div className="toggle-mode">
                        <p>
                            {isRegister ? "Already have an account?" : "Don't have an account?"}
                            <button type="button" onClick={toggleMode} className="link-btn">
                                {isRegister ? "Login" : "Register"}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
