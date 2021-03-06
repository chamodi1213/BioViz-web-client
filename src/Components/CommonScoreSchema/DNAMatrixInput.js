import React from 'react';
import {Box, TextField} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector, useDispatch} from 'react-redux';
import {editDNASimilarityMatrix} from '../../Redux/Actions/Score';

const bases = ['A', 'G', 'C', 'T'];

const useStyles = makeStyles((theme) => ({
    table: {
        width: 200,
        height: 200,
        margin: '0 auto',
    },
    cell: {
        borderWidth: 1,
        borderStyle: 'solid',
        minWidth: 50,
    },
}));

/**
 * Function to get the id of each cell in similarity matrix
 * @param {String} a - DNA base in the row of the cell
 * @param {String} b - DNA base in the column of the cell
 * @return {String} a and b parameters concatenated in revese alphabetic order
 */
const getIdentifier = function(a, b) {
    if (a < b) {
        return b.concat(a);
    } else {
        return a.concat(b);
    }
};

/**
 * Component to input similarity matrix for DNA algorithms
 * @param {Object} props
 * @return {React.ReactElement}
 */
export default function DNAMatrixInput() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const matrix = useSelector((state) => state.DNASimilarityMatrix);

    const onChange = (e) => {
        const val = Math.floor(Number(e.target.value));
        if (Number.isInteger(val)) {
            dispatch(editDNASimilarityMatrix(e.target.id, val));
        } else {
            dispatch(editDNASimilarityMatrix(e.target.id, e.target.value));
        }
    };

    const tableBody = [];
    for (let i = 0; i < bases.length + 1; i++) {
        const row = [];
        for (let j = 0; j < bases.length + 1; j++) {
            const key = `${i}${j}`;
            // i=0, j=0 denotes header cells
            // header cells contain symbol of base
            if (i === 0 && j === 0) {
                row.push(<th key={key} className={classes.cell}>...</th>);
            } else if (i === 0) {
                row.push(
                    <th key={key} className={classes.cell}>{bases[j - 1]}</th>);
            } else if (j === 0) {
                row.push(
                    <th key={key} className={classes.cell}>{bases[i - 1]}</th>);
            } else {
                const identifier = getIdentifier(bases[i - 1], bases[j - 1]);
                // textfield input for each cell
                row.push(
                    <td key={key} className={classes.cell}>
                        <TextField
                            id={identifier}
                            size="small"
                            type='number'
                            onChange={onChange}
                            value={matrix[identifier]}
                        />
                    </td>,
                );
            }
        }
        tableBody.push(<tr key={i}>{row}</tr>);
    }

    return (
        <div>
            <Box alignContent='center' alignItems='center'>
                <table className={classes.table}>
                    <tbody>
                        {tableBody}
                    </tbody>
                </table>
            </Box>
        </div>
    );
}
