import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom"
import App from './App';
import { ThemeProvider } from '@material-tailwind/react';
import { createStore      } from 'redux';
import { Provider } from 'react-redux';
import UpdateFormFieldReducer from './layouts/form/reducer/UpdateFormFieldReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Store = createStore(UpdateFormFieldReducer)
root.render(
<React.StrictMode>
    <BrowserRouter>
        <ThemeProvider>
            <Provider store={Store}>
                <App />
            </Provider>
        </ThemeProvider>
    </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
