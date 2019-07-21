import Axios from "axios";
import store from "./store/";

export default () =>{
    return Axios.create({
        baseURL: store.state.baseUrl,
        timeout:5000,
    });
};