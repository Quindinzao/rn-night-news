// External Libraries
import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://newsapi.org/v2/',
});
