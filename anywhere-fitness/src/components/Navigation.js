import React from 'react';
import { NavBar, Buttons } from '../styles/styled-components';


export default function Navigation() {
    return (
        <div className="navigation">
            <h1>Anywhere Fitness</h1>
            <div className="links">
                <NavBar>
                    <Buttons href="http://localhost:3000/Home">Home</Buttons>
                    <Buttons href="http://localhost:3000/SignUp">Sign Up</Buttons>
                    <Buttons href="http://localhost:3000/InstructorLogin">Instructor Login</Buttons>
                    <Buttons href="http://localhost:3000/MemberLogin">Member Login</Buttons>
                </NavBar>
            </div>
        </div>
    );
}

