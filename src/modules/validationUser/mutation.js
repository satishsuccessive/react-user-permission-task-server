import { validateEmail } from '../../lib/validation';
import {usersRole} from '../../lib/mock-data';

const Mutation = {
    postData: async (parent, args, { DataSource }, info ) => {
         const email = args.data.inputEmail;
         const role =args.data.selectRole;

         const valid = validateEmail(email,role);
            if(valid===true) {
                usersRole[0].push(args.data);
        return true;
            }
            else {
                return {error: valid}
            }

    }
}


export default Mutation;