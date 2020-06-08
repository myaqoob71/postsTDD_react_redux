import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import Button from './components/button';
import ListItems from './components/listItems';
import { fetchPosts } from './actions';
import { connect } from 'react-redux';
// import './app.css';

const tempArr = [{
    fName: "M",
    lName: "Yaqoob",
    email: "myaqoob71@gmail.com",
    age: 28,
    onlineStatus: true
}];
const initialState = {
    hideBtn: false
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ...initialState
        }
        this.fetch = this.fetch.bind(this);
    }
    fetch() {
        this.props.fetchPosts();
        this.toggleButton();
    }
    /* Method that updates the state */
    toggleButton() {
        const { hideBtn } = this.state;
        this.setState({hideBtn: !hideBtn});
    }
    /* Method that returns a value */
    add(num){
        return num + 1;
    }

    render() {
        const { posts } = this.props;
        const { hideBtn } = this.state;
        const buttonProps = {
            buttonText: 'GetPosts',
            emitEvent: this.fetch
        }
        return (
            <div data-test="appComponent">
                <Header />
                <section className = "main">
                    <Headline header = "Posts" desc = "Click the button to render posts" />
                    {/* Hiding button if posts are already rendered */}
                    {!hideBtn &&
                        <Button {...buttonProps} />
                    }
                </section>
                {posts.length > 0 && 
                   <div>
                       {posts.map((post, index) => {
                           const {title, body} = post;
                           const configListItems = {
                               title,
                               desc: body
                           }
                           return (
                               <ListItems key = {index} {...configListItems} />
                           )
                       })}
                   </div>
                }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps, {fetchPosts})(App);