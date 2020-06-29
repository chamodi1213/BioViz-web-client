import React from 'react';
React.useLayoutEffect = React.useEffect;
import {mount} from 'enzyme';
import {findByAttr} from '../../helper';
import GameFileUpload from '../../../Components/GameSection/GameFileUpload';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {setGameInputA} from '../../../Redux/Actions/Game';

const mockStore = configureStore();

describe('GameFileUplod Component', () => {
    const store = mockStore({});
    const testProp = {
        inputAction: setGameInputA,
    };

    const wrapper = mount(<Provider store={store}>
        <GameFileUpload {...testProp}></GameFileUpload></Provider>);

    it('render upload button', ()=>{
        const btn = findByAttr(wrapper, 'testid',
        'uploadbtn').hostNodes();
    expect(btn.length).toBe(1);
    });

    it('should simulate onchange function', ()=>{
        const wrapper2 = mount(<Provider store={store}>
            <GameFileUpload {...testProp}></GameFileUpload></Provider>);
        const file = new File(
            ['>seq\nAACGT'], 'inputseq.txt',
            {type: 'text/plain'});
        findByAttr(wrapper2, 'testid',
            'file').hostNodes().at(0).props().
                onChange({target: {files: [file]}});
    });

    it('should log error for invalid input', ()=>{
        const file = new File(['TTCCA'], 'inputseq.png', {
            type: 'file',
        });
        findByAttr(wrapper, 'testid',
        'file').hostNodes().at(0).props().
            onChange({target: {files: [file]}});
    });

    it('should handle file read function', ()=>{
        findByAttr(wrapper, 'testid',
        'handleFileRead').hostNodes().simulate('click');
    });
});
