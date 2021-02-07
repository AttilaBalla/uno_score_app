import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import 'App.css';
import {Container} from "semantic-ui-react";
import NavigationComponent from "components/NavigationComponent";
import configureStore from "store/configureStore";

const store = configureStore();

function App() {
    return (
        <StoreProvider store={store}>
            <div className="App">
                <Container>
                    <h2 id={"app-title"}>UNO Score App</h2>
                    <NavigationComponent/>
                </Container>
            </div>
        </StoreProvider>
    );
}

export default App;
