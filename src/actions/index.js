import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const CREATE_POSTS = 'create_post';
const API_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = 'stepanushariara1234';

export function fetchPosts() {
    const request = axios.get(`${API_URL}/posts?key=${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPosts(values, callback) {
    const request = axios.post(`${API_URL}/posts?key=${API_KEY}`, values).then(()=> callback());
    return {
        type: CREATE_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${API_URL}/posts/${id}?key=${API_KEY}`);
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios.delete(`${API_URL}/posts/${id}?key=${API_KEY}`).then(()=> callback());
    return {
        type: DELETE_POST,
        payload: id
    };
}

