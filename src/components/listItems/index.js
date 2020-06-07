import React from 'react';
import PropTypes from 'prop-types';

class ListItems extends React.Component {
    render() {
        const { title, desc } = this.props;
        if(!title){
            return null;
        }
        return(
            <div data-test = "listItemsComponent">
                <h2 data-test = "componentTitle">{title}</h2>
                <div data-test = "componentDesc">
                    {desc}
                </div>
            </div>
        );
    };
}
ListItems.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string
};
export default ListItems;