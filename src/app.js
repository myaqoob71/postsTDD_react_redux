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

class App extends React.Component {
    constructor(props){
        super(props);
        this.fetch = this.fetch.bind(this);
    }
    fetch() {
        this.props.fetchPosts();
    }
    render() {
        const { posts } = this.props;
        const buttonProps = {
            buttonText: 'GetPosts',
            emitEvent: this.fetch
        }
        return (
            <div data-test="appComponent">
                <Header />
                <section className = "main">
                    <Headline header = "Posts" desc = "Click the button to render posts" />
                    <Button {...buttonProps} />
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