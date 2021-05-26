import {API} from '../../backend';

export const getVendor = () => {
    return fetch(`${API}vendor/`, {method: "GET"})
    .then(response => {
        return response.json();
    })
    .catch(err => console.log(err))
}