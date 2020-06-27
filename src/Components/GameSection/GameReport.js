import React, {Component, Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {Button} from '@material-ui/core';


const useStyles = (theme) => ({
    paper: {
        width: '75%',
        margin: 'auto',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2),
    },
    wrapped: {
        wordWrap: 'break-word',
    },
    printableComponent: {
        overflowY: 'auto',
        height: '90%',
        padding: theme.spacing(2),

    },
    line: {
        width: '100%',
        textAlign: 'left',
        marginLeft: 0,
    },
});

/**
 * Class component to generate report of the Game
 */
class GameReport extends Component {
    constructor(props) {
        super(props);
        this.downloadTxtFile = this.downloadTxtFile.bind(this);
        this.seqA = this.props.input.seqA;
        this.seqB = this.props.input.seqB;
        this.alignA = this.props.result.alignA;
        this.alignB = this.props.result.alignB;
        this.identity = this.props.result.identity;
        this.match = this.props.result.match;
        this.mismatch = this.props.result.mismatch;
        this.gap = this.props.result.gap;
        this.score = this.props.score;
    }

    // /**
    //  * Displays a prompt to download the content of the component
    //  * as a text file
    //  */
    downloadTxtFile() {
        const element = document.createElement('a');
        try {
            const file = new Blob(
                [document.getElementById('printable-component').innerText],
                {type: 'text/plain'});
            element.href = URL.createObjectURL(file);
            element.download = 'BioViz-game-report.txt';
            document.body.appendChild(element);
            element.click();
        } catch (error) {
            console.log('content not loaded');
        }
    }


    render() {
        const {classes} = this.props;
        const date = new Date();
        const dateStr = date.getFullYear() + '-' +
            (date.getMonth() + 1) + '-' +
            date.getDate() + ' ' +
            date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();

        const inputSequences =<div><Fragment>
                <br />{'>sequence 1'}<br />{this.seqA.replace(/e/g, '')}<br />
            </Fragment>
            <Fragment>
                <br />{'>sequence 2'}<br />{this.seqB.replace(/e/g, '')}<br />
            </Fragment></div>;


        const line = <hr className={classes.line} />;
        const scores = <>
            Match Score : {this.match}<br />
            Mismatch Penalty : {this.mismatch}<br />
            Gap Penalty : {this.gap}<br />
            </>;

        const alignmet = <Fragment>
                {this.alignA.replace(/[e,-]/g, '_')}<br />
                {this.alignB.replace(/[e,-]/g, '_')}<br /><br/>
                {`Identity : ${this.identity.toFixed(3)}`}<br />
                {`Total Score : ${this.score}`}<br />
                <br />
            </Fragment>;

        return (
            <div className={classes.paper} tabIndex={-1}>
            <Button
                testid={'downloadBtn'}
                variant='outlined'
                onClick={this.downloadTxtFile}>
                Download as a text file
            </Button>
            <div
                id='printable-component'
                className={classes.printableComponent}>
                Report created with BioViz
            <br />
        on {dateStr}
                <br />
                {line}
                <br />
        Input Sequences
            <div className={classes.wrapped}>
                    {inputSequences}
                </div>
                {line}
                <div>
                    {scores}
                </div>
                <br />
        Alignment
            <div>
                    {alignmet}
                </div>
            </div>
        </div>
        );
    }
}

GameReport.propTypes = {
    classes: PropTypes.object,
    input: PropTypes.shape({
        seqA: PropTypes.string,
        seqB: PropTypes.string,
    }),
    result: PropTypes.shape({
        alignA: PropTypes.string,
        alignB: PropTypes.string,
        identity: PropTypes.number,
        match: PropTypes.number,
        mismatch: PropTypes.number,
        gap: PropTypes.number,
    }),
    score: PropTypes.number,
};

export default withStyles(useStyles)(GameReport);

