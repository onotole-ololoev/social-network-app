import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Nav/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
