import React from 'react';

import CommonScore from '../CommonScoreSchema/ScoreSchema';
import MSASequencesInput from './Input/MSASequencesInput';
import MSAAlgoSelector from './Input/MSAAlgoSelector';
import {Box, FormLabel} from '@material-ui/core';
import SimilarityMatrixInput from '../CommonScoreSchema/SimilarityMatrixInput';

/**
 * Wrapper component for MSA input section.
 * Contains inputs for maximum 6 sequences, algorithm selector
 *  and score schema input.
 * @return {React.ReactElement}
 */
export default function MSAInput() {
    return (
        <div>
            <Box boxShadow={3} paddingBottom={3}>
                <MSASequencesInput/>
            </Box>
            <MSAAlgoSelector/>
            <Box boxShadow={3} marginTop={7} marginBottom={7} padding={5}>
                <div>
                    <FormLabel>Define your score schema</FormLabel>
                    <br/><br/>
                    <CommonScore />
                    <br/><br/>
                    <SimilarityMatrixInput style={{marginTop: 5}}/>
                </div>
            </Box>


        </div>
    );
}
