import { reactive } from "vue";
import router from '@/router';
import myFetch from '../fetch/fetch'

const session = reactive( {
    user: null as User | null,
    all_users:[] as User[]
});

// get list of all user and store in all_users
export function getAllUser() {
    return myFetch('profile/').then(data => {
        session.all_users.splice(0, session.all_users.length, ...data as User[])
    })
}

export function getUser(id:string) {
    return myFetch<User>('profile/' + id)
}

export function loginUser(username:string, password:string) {
    return myFetch<User>('auth/login', {username:username, password:password})
}

export function logout() {
    session.user = null;
    router.push({name:"home"})
    console.log("logout passed")
}

export interface User {
    _id:string
    username:string
    password:string
    bio:string
    picture:string
    friends: string[]
}

export default session;