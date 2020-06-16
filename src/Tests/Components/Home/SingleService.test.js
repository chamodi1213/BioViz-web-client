/* eslint-disable no-undef */
import React from 'react';
React.useLayoutEffect = React.useEffect;
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {mount} from 'enzyme';
// import {findByAttr} from '../../helper';


const mockStore = configureStore();

import SingleService from '../../../Components/HomeSection/SingleService';
import image1 from '../../../Components/HomeSection/assets/img/1.jpg';
import ViewMore from '../../../Components/HomeSection/ViewMore';

describe('Testing the SingleService component', () => {
    const store = mockStore({/* any required initial state */ });

    const service = {
        title: 'Analyze Alignment',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        image: image1,
    };

    const msa = {
        title: 'MSA Alignment',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        image: image1,
    };

    const pairwise = {
        title: 'Pairwise Alignment',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        image: image1,
    };

    const gameplay = {
        title: 'Simple GamePlay',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        image: image1,
    };

    it('render SingleService component with default value', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService /></Provider>,
        );
        expect(wrapper).toBeTruthy();
        expect(wrapper.find('img').length).toEqual(1);
    });

    it('render SingleService component with right values', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...service}/></Provider>,
        );
        expect(wrapper).toBeTruthy();
        expect(wrapper.find('img').length).toEqual(1);
    });

    it('verify pass prop value title to SingleService component', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...service} /></Provider>,
        );
        const text = wrapper.find(SingleService).prop('title');
        expect(text).toBe(service.title);
    });

    it('verify pass prop value description to SingleService component', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...service} /></Provider>,
        );
        const text = wrapper.find(SingleService).prop('description');
        expect(text).toBe(service.description);
    });

    it('verify pass prop value image to SingleService component', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...service} /></Provider>,
        );
        const text = wrapper.find(SingleService).prop('image');
        expect(text).toBe(service.image);
    });

    it('should show title', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...service} /></Provider>,
        );
        const text = wrapper.find('div div h3');
        expect(text).toBeTruthy();
        expect(text.text()).toBe('Analyze Alignment');
    });

    it('render image', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...service} /></Provider>,
        );
        expect(wrapper).toBeTruthy();
        expect(wrapper.find('img').length).toEqual(1);
    });

    it('should to check image path', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...service} /></Provider>,
        );
        const imageSRC = wrapper.find('img').prop('src');
        expect(imageSRC).toEqual(image1);
    });

    it('render ViewMore component', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...service} /></Provider>,
        );
        expect(wrapper).toBeTruthy();
        const ViewMoreComponent = wrapper.find(ViewMore);
        expect(ViewMoreComponent.length).toBe(1);
    });

    it('clicck title to go MSA', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...msa} /></Provider>,
        );
        const title = wrapper.find('div div h3');
        expect(title).toBeTruthy();
        expect(title.text()).toBe('MSA Alignment');
        title.simulate('click');
    });

    it('clicck title to go pairwise', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...pairwise} /></Provider>,
        );
        const title = wrapper.find('div div h3');
        expect(title).toBeTruthy();
        expect(title.text()).toBe('Pairwise Alignment');
        title.simulate('click');
    });

    it('clicck title to go Gameplay', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...gameplay} /></Provider>,
        );
        const title = wrapper.find('div div h3');
        expect(title).toBeTruthy();
        expect(title.text()).toBe('Simple GamePlay');
        title.simulate('click');
    });

    it('clicck title to go Home', () => {
        const wrapper = mount(
            <Provider store={store}><SingleService {...service} /></Provider>,
        );
        const title = wrapper.find('div div h3');
        expect(title).toBeTruthy();
        expect(title.text()).toBe('Analyze Alignment');
        title.simulate('click');
    });
});
