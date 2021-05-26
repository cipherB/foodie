import {API} from '../../backend';

export const getInfo = () => {
    return fetch(`${API}info/`, {method: "GET"})
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}