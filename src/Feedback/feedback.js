import {fetchGet} from '../util/fetch';


export const submitFeedback = async function(
    ratingValues, generalComment) {
    const url = 'https://us-central1-cloudfunctiontest-9d9d8.cloudfunctions.net/feedback';
    const qParamNames =
        ['attraction', 'functionalities',
            'visualizing', 'response', 'comments'];
    const qParams = [];
    ratingValues.forEach((value, index) => {
        qParams.push([qParamNames[index], value]);
    });
    qParams.push([qParamNames[4], generalComment]);
    await fetchGet(url, qParams, () => { });
};


