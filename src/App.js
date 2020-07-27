import React from 'react';
import './App.css';
import {Container, Header} from "semantic-ui-react";
import NavigationComponent from "./components/NavigationComponent";

function App() {
    return (
        <div className="App">
            <Container>
                <Header as='h2'>UNO Score App</Header>
                <NavigationComponent/>
            </Container>
        </div>
    );
}

export default App;
