/*
* 用于操作cookies
* */

/*
* 获取所有cookies，返回一个kv对象
* */
export function getCookies() {
    let cookiesList = document.cookie.split(";");
    let cookies = {}
    for(let item of cookiesList){
        let keyValue = item.split("=");
        cookies[keyValue[0]] = keyValue[1];
    }
    return cookies;
}
/*
* 通过键名获取键值
* */
export function getCookiesByKey(key){
    let cookiesList = document.cookie.split(";");
    let val = "";
    for(let item of cookiesList){
        let keyValue = item.split("=");
        if (keyValue[0] === key){
            val = keyValue[1];
        }
    }
    return val;
}

/*
* 获取所有cookies的键名，返回一个列表
* */
export function getCookieKeys(){
    let cookiesList = document.cookie.split(";");
    let res = []
    for(let item of cookiesList){
        let keyValue = item.split("=");
        res.push(keyValue[0]);
    }
    return res;
}
/*
* 设置cookies的值
* key：键名
* value：键值
* expireTime：过期时间（毫秒数）
* */
export function setCookies(key, value, expireTime){
    let time = new Date().getTime() + expireTime * 24 * 60 * 60 * 1000;
    let cookies = getCookies();
    cookies[key] = value;
    cookies["expires"] = time;
    let cookiesString = ""
    for (let item in cookies){
        cookiesString += escape(item);
        cookiesString += "="
        cookiesString += escape(cookies[item]);
        cookiesString += ";"
    }
}

/*
* 删除cookies
* */

export function deleteCookies(){
    let time = new Date().getTime() - 365 * 10 * 60 * 60 * 1000;
    let keys = getCookieKeys();
    for (let key in keys){
        setCookies(key, "", time);
    }
}