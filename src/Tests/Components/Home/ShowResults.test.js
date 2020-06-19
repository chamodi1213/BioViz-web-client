/* eslint-disable no-undef */
import React from 'react';
React.useLayoutEffect = React.useEffect;
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {mount} from 'enzyme';
import {findByAttr} from '../../helper';

import ShowResults from '../../../Components/HomeSection/ShowResults';

const mockStore = configureStore();

describe('Testing the Services component', () => {
    const store = mockStore({/* any required initial state */ });

    it('render ShowResult component', () => {
        const wrapper = mount(
            <Provider store={store}><ShowResults /></Provider>,
        );
        expect(wrapper).toBeTruthy();
    });

    it('toggle switch in ShowResult component', () => {
        const wrapper = mount(
            <Provider store={store}><ShowResults /></Provider>,
        );
        expect(wrapper).toBeTruthy();
        const switchComponent = findByAttr(wrapper,
            'testid',
            'switchId').hostNodes();
            switchComponent.simulate('click');
    });
});
