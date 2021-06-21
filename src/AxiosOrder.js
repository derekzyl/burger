import axios from 'axios';


const dame = axios.create({
    baseURL:'https://react-bread.firebaseio.com/'
});
export default dame; 