import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Headline from './components/headline';
import './app.css';

class App extends React.Component {
    render() {
        return (
            <div className = "App">
                <Header />
                <section className = "main">
                    <Headline header = "Posts" desc = "Click the button to render posts" />
                </section>
            </div>
        );
    }
}
ReactDOM.render(<App />,document.getElementById("app"));