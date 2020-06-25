import React from 'react';
React.useLayoutEffect = React.useEffect;
import {mount} from 'enzyme';
import {findByAttr} from '../../helper';
import GameReport from '../../../Components/GameSection/GameReport';

describe('GameReport Component', () => {
    const testProps = {
        input: {
            seqA: 'ACCGBBZR',
            seqB: 'AASDRTTe',
        },
        result: {
            alignA: 'ACCGBBZRee',
            alignB: 'AASD---RTT',
            identity: 0.225,
            match: 1,
            mismatch: -1,
            gap: -1,
        },
        score: 5,
    };
    const wrapper = mount(<GameReport {...testProps}/>);

    it('render the report content', () =>{
        const comp = findByAttr(wrapper, 'id', 'printable-component');
        expect(comp.length).toBe(1);
    });

    // it('download function', ()=>{
    //     // const comp = document.createElement('p');
    //     // comp.id = 'printable-component';
    //     // comp.innerText = 'test';
    //     // const document = {element: comp};
    //     const wrapper2 = mount(<GameReport {...testProps}/>);
    //     findByAttr(wrapper2, 'testid', 'downloadBtn')
    //     .hostNodes().simulate('click');
    // });
});
