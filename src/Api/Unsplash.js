import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
				Authorization: 'Client-ID 8f1ee71da17fba724dddb7b41c58fe913a00cece1a01c28b4a8a6343360394e9'
			}
});