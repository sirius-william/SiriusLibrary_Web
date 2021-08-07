import * as networks from "./network"
import store from "../store/index"
export function login(username, password, type) {
   return new Promise((resolve, reject) => {
       networks.post("/login", {"type": type, "username": username, "password": password}).then(data => {
           if(data["data"]["success"] == 1){
               let token = data["data"]["token"]
               store.commit("setToken", token);
               resolve(data["data"]["token"]);
           }else {
               reject(data["data"]);
           }
       });
   });
}

export function getAllBooks(){
    return new Promise((resolve, reject) => {

        networks.post("/books/all", {}, {headers: {"token": store.state.token}}).then(data => {

            if (data["data"]["success"] == 1){
                console.log("success")
                resolve(data["data"]["data"])
            }else{
                reject(data["data"]);
            }
        })
    })
}
/*
* 按名称查找书籍
* */
export function searchBook(name){
    return new Promise((resolve, reject) => {
        networks.get("/book/search", {name: name}, {"token": store.state.token}).then(data => {
            if (data["data"]["success"] == 1){
                console.log("success");
                console.log(data["data"]["data"])
                resolve(data["data"]["data"]);
            }else{
                reject(data["data"]);
            }
        })
    })
}