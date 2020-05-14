import axios from 'axios';

const baseUrl = 'http://localhost:3001/gigs'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const addGig = newNote => {
    const request = axios.post(baseUrl, newNote)
    return request.then(response => response.data)
}



const updateGig = (id, updatedNote) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedNote)
    return request.then(response => response.data)
}

const removeGig = id => {
    return axios.delete(`${baseUrl}/${id}`)
}
const getFuture = data => {
    let curDate = new Date();
    let newData = [];
    data.map(d => {
        let dataDate = new Date(d.pvm);
        
        if (curDate < dataDate) {
            newData.push(d);
        }
    }
        );
        return newData;
        
}
export default {
    getAll: getAll,
    addGig: addGig,
    updateGig: updateGig,
    removeGig: removeGig,
    getFuture: getFuture
}