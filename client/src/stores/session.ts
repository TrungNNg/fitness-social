import { reactive } from "vue";
import router from '@/router';
import myFetch from '../fetch/fetch'

const session = reactive( {
    user: null as User | null,
});

export function getUser(id:string) {
    return myFetch<User>('profile/' + id)
}

export function loginUser(username:string, password:string) {
    return myFetch('auth/login', {username:username, password:password})
}

export function logout() {
    session.user = null;
    router.push({name:"home"})
    console.log("logout passed")
}

export interface User {
    id:string
    username:string
    password:string
    bio:string
    picture:string
    friends: string[]
}

export default session;