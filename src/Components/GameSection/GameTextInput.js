import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';


export default function GameTextInput(props) {
    const dispatch = useDispatch();

    function inputSeq(event) {
        dispatch(props.inputAction(event.target.value.trim()));
    }

    return (
        <div>
            <TextField
                multiline
                rowsMax={4}
                placeholder='DNA Sequence'
                style={{width: '100%'}}
                value={props.value}
                onChange={inputSeq} >
            </TextField>
        </div>
    );
}

GameTextInput.propTypes = {
    inputAction: PropTypes.func,
    value: PropTypes.string,
};