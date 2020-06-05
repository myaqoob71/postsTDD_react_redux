import React from 'react';
import PropTypes, { shape } from 'prop-types';

/* Class component */
class Headline extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const { header, desc } = this.props;
        if(!header){
            return null;
        }
        return (
            <div data-test="headlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="desc">
                    {desc}
                </p>
            </div>
        );
    };
}
Headline.propTypes = {
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
};
export default Headline;