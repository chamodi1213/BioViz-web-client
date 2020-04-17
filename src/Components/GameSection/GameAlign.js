import React , {useState} from 'react';
import Base from './Base';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import DnaIcon from '../../assets/icons/dna.svg';
import { Tooltip , Box } from '@material-ui/core';
import CommonScore from '../CommonScoreSchema/ScoreSchema';


export default function GameAlign() {

    const inputAlign = {
        algnA:"AAGTC-GCCCTTTA-AAAAAA",
        algnB:"AA-AAGTTTT-TTCCCGTTTT",    
    }
    const [algn , setAlgn ] = useState(inputAlign);

    const row1 = [];
    for (let i = 0; i < algn.algnA.length; i++) {
        const index = i;
        const base = algn.algnA.charAt(i) === '-' || algn.algnA.charAt(i) === 'g' ? 'ga' : algn.algnA.charAt(i);
        const title = base === "ga" ? "Remove Gap" : "Add Gap";
        row1.push({base:<Base index={index} base={base}/>, id:index, title:title});
    }
   
    const row2 = [];
    for (let j = 0; j < algn.algnB.length; j++) {
        const index = j;
        const base = algn.algnB.charAt(j) === '-' || algn.algnB.charAt(j) === 'g' ? 'ga' : algn.algnB.charAt(j);
        const title = base === "ga" ? "Remove Gap" : "Add Gap";
        row2.push({base:<Base index={index} base={base}/>, id:index, title:title});
    }
        
    function addGapA(index){

        if(algn.algnA.charAt(index)==='g' || algn.algnA.charAt(index) === '-'){
            setAlgn({
                algnA : algn.algnA.substring(0,index) + algn.algnA.substring(index+1),
                algnB : algn.algnB
            })
            // remove gap at the given index
            // update this change in alignA in state object
        }
        else{
            setAlgn({
                algnA : algn.algnA.substring(0,index) + 'g' + algn.algnA.substring(index),
                algnB : algn.algnB
            })
            // add a gap next to the base element at the given index
            // update this change in alignA in state object
        }        
    }

    function addGapB(index){

        if(algn.algnB.charAt(index)==='g' || algn.algnB.charAt(index) === '-'){
            setAlgn({
                algnA : algn.algnA,
                algnB : algn.algnB.substring(0,index) + algn.algnB.substring(index+1)
            })
            // remove gap at the given index
            // update this change in alignB in state object
        }
        else{
            setAlgn({
                algnA : algn.algnA,
                algnB : algn.algnB.substring(0,index) + 'g' + algn.algnB.substring(index)
            })
            // add a gap next to the base element at the given index
            // update this change in alignB in state object
        }        
    }

    const align1 = row1.map(ele => <td key={ele.id}><Tooltip title={ele.title} placement="top" arrow><Button variant="contained" style={{minWidth:25, minHeight:25 , borderRadius:2, padding:4, backgroundColor:"#0a22536e"}} onClick={() => addGapA(ele.id)} >{ele.base}</Button></Tooltip></td>)
    const align2 = row2.map(ele => <td key={ele.id}><Tooltip title={ele.title} placement="bottom" arrow><Button variant="contained" style={{minWidth:25, borderRadius:2, padding:4, backgroundColor:"#0a22536e"}}  onClick={() => addGapB(ele.id)} >{ele.base}</Button></Tooltip></td>)
    // #2e3770
    return (
        <Box boxShadow={3} style={{backgroundColor:"#0a22536e" , height:"470px" , borderRadius:"10px" , padding:10}}>
            {/* "#171b32" #3a3f57 #171b32 */}
            <br/>
            <h2 style={{color:"#ffffff", textShadow: "1px 1px 2px #2728b4"}}>GamePlay</h2>
            <br/><br/>
            <div style={{marginLeft:55}}>
            <CommonScore/>
            </div>
            <br/><br/><br/>
            <table>
                <tbody>
                    <tr>
                        <td style={{minWidth:50}}>
                            <Icon><img src={DnaIcon} alt="seq 1" /></Icon>
                        </td>
                        {align1}
                    </tr>
                </tbody>
            </table>
            <table>
                <tbody>
                    <tr>
                        <td style={{minWidth:50}}>
                            <Icon><img src={DnaIcon} alt="seq 2" /></Icon>
                        </td>
                        {align2}
                    </tr>
                </tbody>
            </table>
            <br/>
            <br/>
            <Button variant="contained" color="secondary" endIcon={<Icon>send</Icon>}
                >
                Submit
            </Button>
        </Box>
    );
}


