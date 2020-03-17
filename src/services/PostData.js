export function PostData(type, userData){
    let BaseURL='http://localhost/react_feed/api/index.php'; //TODO: uwaga na link bazowy
    return new Promise((resolve, reject)=>{
        fetch(BaseURL+'?tp='+type,
        {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json' //TODO: do sprawdzenia z kursem
            },
            body: JSON.stringify(userData)
        })
        .then((response)=>response.json()
        .then((res)=>{
            resolve(res);
        }))
        .catch((error)=>{
            reject(error);
        });
    });
}