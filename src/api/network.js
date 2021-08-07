import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081";

/*
* 发送get请求
* */
export function get(url, params, headers) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params,
            headers: headers
        }).then(res => {
            resolve(res);
        }).catch(error => {
            reject(error);
        });
    });
}

export function post(url, params, config) {
    return new Promise((resolve, reject) => {
        let _params = new URLSearchParams();
        for (let item in params) {
            _params.append(item, params[item]);
        }
        axios.post(url, _params, config).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        });
    })
}

