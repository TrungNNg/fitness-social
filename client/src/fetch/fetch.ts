export const API_ROOT = 'http://localhost:3000/';
const root_url = import.meta.env.VITE_API_ROOT;

console.log(root_url);

export default function myFetch<T>(url:String): Promise<T> {
    console.log("fetch hit")
    return fetch(API_ROOT + url).then(x =>  x.json())
}

