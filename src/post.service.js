import axios from "axios";
import Header from "./Header";

const getAllPrivatePosts = () =>{
    return axios.get('alluser', {Authorization: Header()})
}

const postService  = {
    getAllPrivatePosts
}

export default postService;