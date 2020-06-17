import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import PropTypes from 'prop-types';

export default function MinHeightTextarea(props) {
    return <TextareaAutosize
        style={{
            maxWidth: 300,
            minWidth: 150,
            minHeight: 50,
            maxHeight: 100,
        }}
        aria-label="minimum height"
        rowsMin={3}
        rowsMax={6}
        minLength={20}
        placeholder="Any other comments"
        maxLength={30}
        value={props.currentValue}
        onChange={props.onChange}

    />;
}

MinHeightTextarea.propTypes = {
    currentValue: PropTypes.string,
    onChange: PropTypes.func,
};
