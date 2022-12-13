import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/profile";
import Dialogs from "./components/dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StateType} from "./types/types";

function App(props: StateType) {
    console.log()
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="container">
                    <Nav/>
                    <div className='container-content'>
                        <Routes>
                            <Route path={'/profile'} element={<Profile {...props.profilePage}/>}/>
                            <Route path={'/dialogs'} element={<Dialogs {...props.dialogsPage}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
