import Vue from 'vue';

// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = 'http://192.168.1.88:8000';
axios.defaults.headers = {
    "Access-Control-Allow-Origin": "*",
    Accept: 'application/json',
    'Cache-Control': 'no-cache, private',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Headers': 'Origin,Content-Type,X-Requested-With,Accept,Authorization'
}
Vue.use(VueAxios, axios);

export default {
    root: 'http://192.168.1.88:8000'
};
