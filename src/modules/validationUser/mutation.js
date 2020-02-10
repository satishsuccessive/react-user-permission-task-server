import { regex } from '../../lib/validation';
export const da = [];

const Mutation = {
    postData: async (parent, args, { DataSource }, info ) => {
         const email = args.data.inputEmail;
         const role =args.data.selectRole;
const validateEmail = regex.test(email);
        const msg1 = {inputMsg:'Email is not vaild',roleMsg:'Select Role'};
        const msg2 = {inputMsg:'',roleMsg:'Please select Role'};
        const msg3 = {inputMsg:'Email is not vaild',roleMsg:''};

                    if ((!validateEmail)&&(role=='')) return msg1;
                    if ((validateEmail)&&(role=='')) return msg2;
                    if ((!validateEmail)&&(role!=''|role!=null)) return msg3;

            da.push(args.data);
            console.log(da,"<<<<<");
        return validateEmail;
    }
}


export default Mutation;