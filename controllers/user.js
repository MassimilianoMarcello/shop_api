import User from '../models/user.js';

const userControllers = {
    getLoginForm:(req,res)=>{},
    login:(req,res)=>{},
    getRegisterForm: (req, res) => {
        res.render('layout', {
            title: 'Registration Form',  // Titolo della pagina
            body: 'includes/userRegistrationForm' // Il file EJS del form di registrazione
        });
    },
    register:(req, res) => {
        const { username, email, password, confirmPassword } = req.body;

        // Controlla se le password corrispondono
        if (password !== confirmPassword) {
            return res.status(400).render('includes/register', {
                title: 'Registrazione',
                message: 'Le password non corrispondono.'
            });
        }

        // Verifica se l'email esiste già
        const existingUser = User.findByEmail(email);
        if (existingUser) {
            return res.status(400).render('includes/register', {
                title: 'Registrazione',
                message: 'Questa email è già registrata.'
            });
        }

        // Se tutto è valido, crea un nuovo utente
        const newUser = {
            id: Id(),
            username,
            email,
            password // In un'app reale, assicurati di crittografare la password
        };
        
        User.add(newUser);

        // Reindirizza alla pagina di login o al profilo
        res.redirect('/login');
    }
,
    logout:(req,res)=>{},
};

export default userControllers;
