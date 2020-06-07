import moxios from 'moxios';
import { testStore } from '../utils';
import { fetchPosts } from '../actions';

describe('fetchPosts action', () => {

    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('Is store updated correctly', () => {
        const expectedState = [{
            title: 'Test title1',
            body: 'Test desc1'
        },{
            title: 'Test title2',
            body: 'Test desc2'
        },{
            title: 'Test title3',
            body: 'Test desc3'
        }];
        const store = testStore();

        /* To make the API request fail make the response to [] */
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            });
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    });
});