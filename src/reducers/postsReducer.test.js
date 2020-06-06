import { types } from '../actions/types';
import postsReducer from './postsReducer';

describe('Posts Reducer', () => {
    it('Should return default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });
    it('Should return new state if receiving type', () => {
        const posts = [{title: 'Post 1'},{title: 'Post 2'},{title: 'Post 3'}];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    });
});