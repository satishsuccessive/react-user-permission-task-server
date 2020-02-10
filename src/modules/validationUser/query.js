import Data from '../../lib/data';
// import {da} from '../../lib/inputData';
import {da} from './mutation';

// const Query = {
//     getUser: async () => {
//         return Data
//     },
//     getRole: async () => {
//         return da
//     }
// }
const Query = {
    getUser: async () => Data,
    getRole: async () => da,
}
console.log(da,'>>>>>>>>da for seon');
export default Query;