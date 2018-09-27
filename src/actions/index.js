import axios from 'axios';

export const FETCH_POSTS = 'fetch_post';
const API_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'stepanushariara1234';

export function fetchPosts() {
    const request = axios.get(`${API_URL}/posts?key=${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

