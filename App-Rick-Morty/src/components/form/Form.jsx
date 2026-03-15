import { useState, useEffect, useMemo } from "react";
import { authAPI } from '../../api/api';
import validation from "./validation";
import "./Form.css";

// Genera estrellas aleatorias una sola vez
const STARS = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
}));

export default function Form(props) {
    const [isRegister, setIsRegister] = useState(false);
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const [isPortalEntry, setIsPortalEntry] = useState(false);

    // Naves aleatorias
    const SHIPS = useMemo(() => {
        const directions = ['horizontal', 'horizontal-rev', 'diagonal'];
        return Array.from({ length: 3 }, (_, i) => {
            const direction = directions[i]; // cada nave tiene su propia dirección garantizada
            const isHorizontal = direction.includes('horizontal');
            const isVertical = direction.includes('vertical');
            return {
                id: i,
                direction,
                size: 70 + Math.random() * 90,
                duration: 12 + Math.random() * 8,
                delay: i * 3 + Math.random() * 3, // delays escalonados para que no salgan juntas
                top: isHorizontal ? `${10 + Math.random() * 75}%` : (isVertical ? '-150px' : `${Math.random() * 60}%`),
                left: isVertical ? `${10 + Math.random() * 75}%` : '-150px',
                src: ['/spaceship.png', '/spaceship3.png'][i % 2],
            };
        });
    }, []);

    // Portales mini
    const MINI_PORTALS = useMemo(() => Array.from({ length: 6 }, (_, i) => ({
        id: i,
        top: `${5 + Math.random() * 85}%`,
        left: `${5 + Math.random() * 85}%`,
        size: 40 + Math.random() * 60,
        duration: 6 + Math.random() * 6,
        delay: Math.random() * 4,
        spinDuration: 2 + Math.random() * 3,
    })), []);

    const handleChange = event => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
        setErrors(validation({ ...userData, [name]: value }));
    };

    const handleSubmit = async event => {
        event.preventDefault();

        if (isRegister) {
            try {
                await authAPI.register(userData);
                alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
                setIsRegister(false);
                setUserData({ email: "", password: "" });
            } catch (error) {
                const msg = error.response?.data?.message || 'Error al registrar';
                alert(msg);
            }
        } else {
            try {
                const { data } = await authAPI.login(userData);
                localStorage.setItem('token', data.token);
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                setIsPortalEntry(true);
                setTimeout(() => {
                    props.login(data.user);
                }, 1000);
            } catch (error) {
                alert("Credenciales incorrectas. Si no tienes cuenta, regístrate.");
            }
        }
    };

    const toggleMode = () => {
        setIsRegister(!isRegister);
        setUserData({ email: "", password: "" });
        setErrors({});
    };

    const SPACE_OBJECTS = [
        // Cortados en orillas — asomándose desde los bordes
        { id: 'p1a', src: '/planet1.png', top: '-5%',  left: '-4%',  size: 140, type: 'planet', zIndex: 0,  blend: true  }, // esquina top-left
        { id: 'p2a', src: '/planet2.png', top: '75%',  left: '-5%',  size: 120, type: 'planet', zIndex: 0,  blend: false }, // orilla izquierda
        { id: 'p3a', src: '/planet3.png', top: '85%',  left: '90%',  size: 130, type: 'planet', zIndex: 0,  blend: false }, // esquina bottom-right
        { id: 'p2b', src: '/planet2.png', top: '-3%',  left: '85%',  size: 100, type: 'planet', zIndex: 0,  blend: false }, // orilla top-right

        // Visibles completos pero pequeños — sensación de lejanía
        { id: 'p3b', src: '/planet3.png', top: '40%',  left: '92%',  size: 45,  type: 'planet', zIndex: 0,  blend: false },
        { id: 'p1b', src: '/planet1.png', top: '88%',  left: '55%',  size: 40,  type: 'planet', zIndex: 0,  blend: true  },

        // Galaxias — detrás del portal algunas
        { id: 'g1a', src: '/galaxy1.png', top: '3%',   left: '68%',  size: 110, type: 'galaxy', zIndex: -1, blend: false }, // detrás portal
        { id: 'g2a', src: '/galaxy2.png', top: '55%',  left: '88%',  size: 70,  type: 'galaxy', zIndex: 0,  blend: true  },
        { id: 'g3a', src: '/galaxy3.png', top: '80%',  left: '10%',  size: 60,  type: 'galaxy', zIndex: -1, blend: true  }, // detrás portal
        { id: 'g1b', src: '/galaxy1.png', top: '92%',  left: '78%',  size: 45,  type: 'galaxy', zIndex: 0,  blend: false },
    ];

    return (
        <div className="form-container">
            {/* Estrellas de fondo */}
            {STARS.map(star => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                    }}
                />
            ))}

            {/* Planetas y galaxias de fondo */}
            {SPACE_OBJECTS.map(obj => (
                <img
                    key={obj.id}
                    src={obj.src}
                    alt=""
                    className={`space-object ${obj.type}`}
                    style={{
                        top: obj.top,
                        left: obj.left,
                        width: `${obj.size}px`,
                        zIndex: obj.zIndex,
                        mixBlendMode: obj.blend ? 'screen' : 'normal',
                    }}
                />
            ))}

            {/* Naves aleatorias */}
            {SHIPS.map(ship => (
                <img
                    key={ship.id}
                    src={ship.src}
                    alt=""
                    className="spaceship-random"
                    style={{
                        top: ship.top,
                        left: ship.left,
                        width: `${ship.size}px`,
                        animationName: {
                            'horizontal':     'flyRight',
                            'horizontal-rev': 'flyLeft',
                            'vertical':       'flyDown',
                            'vertical-rev':   'flyUp',
                            'diagonal':       'flyDiagonal',
                        }[ship.direction],
                        animationDuration: `${ship.duration}s`,
                        animationDelay: `${ship.delay}s`,
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                    }}
                />
            ))}

            {/* Portales mini absorbidos */}
            {MINI_PORTALS.map(portal => (
                <img
                    key={portal.id}
                    src="/portal.png"
                    alt=""
                    className="mini-portal"
                    style={{
                        top: portal.top,
                        left: portal.left,
                        width: `${portal.size}px`,
                        animationDuration: `${portal.duration}s`,
                        animationDelay: `${portal.delay}s`,
                        '--spin': `${portal.spinDuration}s`,
                    }}
                />
            ))}

            {/* Portal de fondo — imagen real */}
            <div className="portal-bg">
                <img src="/portal.png" alt="portal" />
            </div>

            {/* Formulario */}
            <div className={`form-wrapper ${isPortalEntry ? 'portal-entry' : ''}`}>
                {/* Logo oficial de Rick and Morty */}
                <img src="/rick-morty-logo.png" alt="Rick and Morty" className="form-logo" />

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-group">
                        <input
                            type="text"
                            name="email"
                            id="email"
                            value={userData.email}
                            placeholder="Email"
                            onChange={handleChange}
                            className={errors.email ? "input-error" : ""}
                        />
                        {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={userData.password}
                            placeholder="Password"
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
