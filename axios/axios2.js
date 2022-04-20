class Axios{
    constructor(){
 
    }
    request(config){
        return new Promise((resolve) => {
            const {url='',data={},method='get'} = config; 
            const xhr = new XMLHttpRequest;    
            xhr.open(method,url,true); 
            xhr.onreadystatechange = () => {
                if(xhr.readyState == 4 && xhr.status == 200){
                    resolve(xhr.responseText);
                }
            }
            xhr.send(JSON.stringfy(data));
        })
    }
}
 
function CreateAxiosFn(){
    let axios = new Axios;
    let req = axios.request.bind(axios);
    return req;
}
 
let axios = CreateAxiosFn();