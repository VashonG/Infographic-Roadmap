import axios from 'axios';
const url = 'http://localhost:5000/content';

export const getContent = () => axios.get(url);
export const updateContent = (newContent) => axios.put(url, newContent);