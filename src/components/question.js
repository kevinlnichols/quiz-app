import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
    return (
        <div>
            <h3 className="question">{props.content}</h3>
        </div>
    );
}

Question.propTypes = {
    content: PropTypes.string.isRequired
};

export default Question;