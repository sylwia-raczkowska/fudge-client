export const API_BASE_URL = 'http://localhost:8090';
export const ACCESS_TOKEN = 'accessToken';


const request = (options) => {
    const defaults = {headers: createHeader()};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>
            response.json().then(json => {
                if(!response.ok) {
                    return Promise.reject(json);
                }
                return json;
            })
        );
};


export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function register(signUpRequest) {
    return request({
        url: API_BASE_URL + "/auth/register",
        method: 'POST',
        body: JSON.stringify(signUpRequest)
    });
}

export function rate(ratingRequest) {


    return fetch(API_BASE_URL + "/ratings", {
        method: 'POST',
        headers: createHeader(),
        body: JSON.stringify(ratingRequest)
    });
}

export function createHeader(){
    const headers = new Headers({
        'Content-Type': 'application/json',
    });

    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }
    return headers;
}