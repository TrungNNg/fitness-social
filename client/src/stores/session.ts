import { reactive } from "vue";
import router from '@/router';
import data from '../data/data.json'

const session = reactive( {
    user: null as User | null,
});

export function login(username: string, password: string) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].username === username && data[i].password === password) {
            //console.log("correct")
            session.user = {
                username,
                index:i,
            };
            return
        }
    }
    session.user = null
}

export function logout() {
    session.user = null;
    router.push({name:"home"})
    console.log("logout passed")
}

export class User {
    public username!: string;
    public index!: number;
}

export default session;