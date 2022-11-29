import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Content from "./components/content/content";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                <Nav/>
                <Content/>
            </div>
        </div>
    );
}

export default App;
