import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID d3b10d5d22537ed19cc187ba83f5cf42408bc5b325881864b81b237d85585475'
    }
});