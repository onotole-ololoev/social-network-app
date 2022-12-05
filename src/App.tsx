import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Nav/>
                <div className='container-content'>
                    <Profile />
                    <Dialogs />
                </div>
            </div>
        </div>
    );
}

export default App;
