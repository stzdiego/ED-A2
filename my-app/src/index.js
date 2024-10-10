import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Store/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import TodoApp from './Components/TodoApp';
import About from './Components/About';
import NavComponent from './Components/NavComponent';
import { AuthProvider } from './Helpers/AuthContext';
import Login from './Components/Login';
import PrivateRoute from './Helpers/PrivateRoute';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <AuthProvider>
            <Router>
                <NavComponent />
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/todos" element={<PrivateRoute element={<TodoApp />} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Router>
        </AuthProvider>
    </Provider>
);
