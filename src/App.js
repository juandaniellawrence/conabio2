import Config from "./config.json";
import './App.css';
import './Hello_friend';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello_friend from './Hello_friend';

function App() {
    const environment = Config.ENV;
    const baseUrl = Config.BASE_URL;
    return (
            <Hello_friend />
    );
}
export default App
