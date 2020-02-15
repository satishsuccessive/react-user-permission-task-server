// import Data from '../../lib/data';
import {validateEmail,search, hasPermissions} from '../../lib/validation';
import {usersRole} from '../../lib/mock-data';
// import {da} from '../../lib/inputData';
export const inputArr = [];
const updUsersRole = usersRole[0];

const Query = {
    getUser: async () => updUsersRole,
    getRole: async (parent, args ) => {
        const email = args.data.inputEmail;
        const role = args.data.selectRole;
        // validation for successive id
        const valid = validateEmail(email,role);
        // match for db
        if (valid===true) {
           const matched = search(email,updUsersRole);
            if (!matched) return {error:'Email is not matched from DB'};

            const preparedArrayOfPrms ={
              read:hasPermissions('getUsers',matched,'read'),
              write:hasPermissions('getUsers',matched,'write'),
              delete:hasPermissions('getUsers',matched,'delete'),
              role:matched,
            };
            return preparedArrayOfPrms;

        }
        else {return {error: valid}}
    }
}
export default Query;