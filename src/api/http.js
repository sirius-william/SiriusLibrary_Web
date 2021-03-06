import * as networks from "./network"
import store from "../store/index"

export function login(username, password, type) {
    return new Promise((resolve, reject) => {
        networks.post("/login", {"type": type, "username": username, "password": password}).then(data => {
            if (data["data"]["success"] == 1) {
                let token = data["data"]["token"];
                let name = data["data"]["name"];
                let id = data["data"]["id"];
                store.commit("setToken", token);
                store.commit("setUserName", name);
                store.commit("setId", id);
                resolve(data["data"]["token"]);
            } else {
                reject(data["data"]);
            }
        }).catch(error => {
            reject(error);
        });
    });
}

export function getAllBooks() {
    return new Promise((resolve, reject) => {

        networks.post("/books/all", {}, {headers: {"token": store.state.token}}).then(data => {

            if (data["data"]["success"] == 1) {
                console.log("success")
                resolve(data["data"]["data"])
            } else {
                reject(data["data"]);
            }
        }).catch(error => {
            reject(error);
        })
    })
}

/*
* 按名称查找书籍
* */
export function searchBook(name) {
    return new Promise((resolve, reject) => {
        networks.get("/book/search", {name: name}, {headers: {"token": store.state.token}}).then(data => {
            if (data["data"]["success"] == 1) {
                console.log("success");
                console.log(data["data"]["data"])
                resolve(data["data"]["data"]);
            } else {
                reject(data["data"]);
            }
        }).catch(error => {
            reject(error);
        });
    });
}

export function getAllUsers() {
    return new Promise((resolve, reject) => {
        networks.post("/user", {type: 0}, {headers: {"token": store.state.token}}).then(data => {
            if (data["data"]["success"] == 1) {
                resolve(data["data"]["data"]);
            }else{
                reject(data["data"]);
            }
        }).catch(error => {
            reject(error);
        });
    })

}

export function getUserInfo(id) {
    return new Promise((resolve, reject) => {
        networks.post("/info", {id: id}, {headers: {"token": store.state.token}}).then(data => {
            if (data["data"]["success"] == 1){
                resolve(data["data"]["data"]);
            }else{
                reject(data["data"]);
            }
        }).catch(error => {
            reject(error);
        })
    })
}