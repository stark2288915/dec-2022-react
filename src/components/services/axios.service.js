import axios from 'axios';
import {baseURL} from "../configs/configs";

let axiosService = axios.create({baseURL:baseURL});

export {
    axiosService
}

//перетворюємо базовий урл в аксіос запрос