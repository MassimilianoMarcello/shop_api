import User from '../models/user.js';
import validateEmail from '../utils/validateEmail.js';
import validatePassword from '../utils/validatePassword.js';
import matchPasswords from '../utils/matchPasswords.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import hashPassword from '../utils/hashPassword.js';

const userControllers = {
    login: (req, res) => {
        const { email, password } = req.body;

        // check if email exist

        const emailExist = User.getByEmail(email);
        if (!emailExist) {
            res.status(404).render('404', {
                title: 'User not found',
                message: 'User not found ,please register'
            });
        }

        // check if password is correct

        bcrypt.compare(password, emailExist.password, (err, isValid) => {
            if (err) {
                console.error(err);
            }
            if (isValid) {
                const token = jwt.sign(
                    { email: emailExist.email },
                    process.env.TOKEN_SECRET
                );

                if (token) {
                    // { httpOnly: true }: This option makes the cookie HTTP-only, which means the cookie cannot be accessed or modified via client-side JavaScript. It helps increase security by protecting the token from potential XSS (Cross-Site Scripting) attacks.

                    res.cookie('token', token, { httpOnly: true });
                    res.status(200).redirect('/api/products');
                }
            } else {
                res.status(409).render('404', {
                    title: 'invalid paassword or email',
                    message: 'Invalid password or email'
                });
            }
        });
    },

    register: (req, res) => {
        const { email, password, rePassword } = req.body;

        //  check if email exist
        const emailExist = User.getByEmail(email);
        if (emailExist) {
            res.status(409).render('404', {
                title: 'Mail already exist',
                message: 'Mail already exist'
            });
        }

        //  check password and mail valid
        const isValidPassword = validatePassword(password);
        const isValidMail = validateEmail(email);
        const doPasswordMatch = matchPasswords(password, rePassword);
        if (isValidMail && isValidPassword && doPasswordMatch) {
            const hashedPassword = hashPassword(password);
            const newUser = User.add({ email, password: hashedPassword });
            console.log(newUser);
            res.status(302).redirect('/api/login/');
        } else {
            res.status(400).render('404', {
                title: 'invalid mail or password',
                message: 'Invalid mail or password'
            });
        }
    },

    getRegisterForm: (req, res) => {
        res.status(200).render('register-form');
    },
    getLoginForm: (req, res) => {
        res.status(200).render('login-form');
    },

    logout: (req, res) => {
        res.clearCookie('token');
        res.status(200).redirect('/api/products');
    }
};

export default userControllers;
