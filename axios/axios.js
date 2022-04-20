
import xmlhttpRequest from 'xmlhttprequest';
const XMLHttpRequest = xmlhttpRequest.XMLHttpRequest;
function myaxios(config) {
    const { url = '', method = '', data = {} } = config;
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest;
        xhr.open(method, url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText);
            }
        }
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(JSON.stringify(data));
    })
}
myaxios.__proto__.post = function (config) {
    const { url = '', data = {} } = config;
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest;
        xhr.open("POST", url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText);
            }
        }
        xhr.setRequestHeader("CONTENT-TYPE", "application/x-www-form-urlencoded");
        xhr.send(data);
    })
}
myaxios.__proto__.get = function (config) {
    const { url = '' } = config;
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest;
        xhr.open("GET", url, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4 && xhr.status == 200) {
                resolve(xhr.responseText);
            }
        }
        xhr.send();
    })
}
myaxios.__proto__.all = function (promises) {
    return Promise.all(promises);
}
myaxios.__proto__.spread = function (callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};
