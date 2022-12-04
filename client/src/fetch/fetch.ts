export const API_ROOT = 'http://localhost:3000/';

export default function myFetch<T>(url:String): Promise<T> {
    console.log("fetch hit")
    return fetch(API_ROOT + url).then( x =>  {
        return x.json() 
    });
}

