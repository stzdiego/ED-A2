import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import { useDispatch } from 'react-redux';
import { setUser } from '../Store/authSlice';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            dispatch(setUser({ uid: userCredential.user.uid, email: userCredential.user.email }));
            navigate('/'); // Redirige a la página principal
        } catch (error) {
            console.error(error);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const userCredential = await signInWithPopup(auth, provider);
            dispatch(setUser({ uid: userCredential.user.uid, email: userCredential.user.email }));
            navigate('/'); // Redirige a la página principal
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleEmailLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo Electrónico"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    required
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
            <button onClick={handleGoogleLogin}>Iniciar Sesión con Google</button>
        </div>
    );
};

export default Login;
