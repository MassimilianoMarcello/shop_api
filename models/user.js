import { v4 as Id } from 'uuid';

const users = [
    {
        id: Id(),
        email: 'example@example.com',
        password: 'Abcdef1!'
    }
];

class User {
    static getByEmail(email) {  // Passa email come parametro
        return users.find(user => user.email === email);
    }

    static add(user) {
        const newUser = {
            id: Id(),
            ...user
        };
        users.push(newUser);
        return newUser;
    }
}

export default User;
