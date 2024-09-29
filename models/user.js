import { v4 as Id } from 'uuid';

const users = [
    {
        id: Id(),
        email: 'massi8@gmail.com',
        password: 'password'
    }
];

class User {
    static getByEmail(){
        return users.find(user=>user.email===email)
    }

    static add(user){
        const newUser={
            id:Id(),
            ...user
        }
        users.push(newUser)
        return newUser
    }
    }


    export default User
