import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID lNfZnuMHQvW4Ia2F4nkkik1pRG7VMhPmgFsJPGKCFsE'
    }
});