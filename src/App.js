import React from 'react';
import {Provider as StoreProvider} from 'react-redux';
import 'App.css';
import configureStore from "store/configureStore";
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/styles";
import {Container} from "semantic-ui-react";
import NavigationComponent from "./components/NavigationComponent";
import {ScoreApp} from "./material/components/ScoreApp";


const store = configureStore();

const theme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function MaterialApp() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <StoreProvider store={store}>
                   <ScoreApp/>
                </StoreProvider>
            </CssBaseline>
        </ThemeProvider>
    );
}

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

export default MaterialApp;
