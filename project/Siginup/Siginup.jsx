
import React, { useState } from 'react';
import './siginup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signups() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/datas", formData).then((res) => {
            alert("Data saved");
            navigate("/");
        });
    };

    return (
        <div className="login_container">
            <div className="login">
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="login_fields">
                        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                    </div>
                    <button type="submit">Continue</button>
                </form>
                <p className="login_acc">
                    Already have an Account?{' '}
                    <Link style={{ textDecoration: 'none', color: '#ff4141' }} to="/">
                        login here
                    </Link>
                </p>
                <div className="signin">
                    <input type="checkbox" required />
                    <p>I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    );
}

export default Signups;
