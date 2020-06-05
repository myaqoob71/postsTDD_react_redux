import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.css';

const tempArr = [{
    fName: "M",
    lName: "Yaqoob",
    email: "myaqoob71@gmail.com",
    age: 28,
    onlineStatus: true
}];

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
export default App;