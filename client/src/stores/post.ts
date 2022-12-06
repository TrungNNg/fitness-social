import { reactive } from "vue";
//import router from '@/router';
import myFetch from '../fetch/fetch'

export interface Post {
    _id:string
    userId:string
    image:string
    caption:string
    like:number
}

const post_list = reactive([] as Post[])

// get post for the current user
export function getPosts(userId:string) {
    return myFetch('post/' + userId).then(data => {
        //console.log('data inside get post', data)
        post_list.splice(0, post_list.length, ...data as Post[])
    })
}

// get post of all friend of current user
export function addPost(userId:string) {
    return myFetch('post/' + userId).then(data => {
        post_list.push(...data as Post[])
    })
}

// add a post of current user to db
export function addUserPost(userId:string, image:string, caption:string) {
    console.log(userId, image, caption)
    return myFetch('post/', {userId:userId, image:image, caption:caption})
}

export function deletePost(postId:string){
    return myFetch('post/' + postId,null,'DELETE')
}

export default post_list;