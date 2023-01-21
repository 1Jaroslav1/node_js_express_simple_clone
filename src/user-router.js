const Router = require('../framework/Router');
const controller = require('./user-controller');

const router = new Router();

const users = [
    {id: 1, name: 'A'},
    {id: 2, name: 'Tom'}
];

router.get('/users', (req, res) => {
    controller.getUsers(req, res);
});

router.post('/users', (req, res) => {
    controller.createUser(req, res);
});

module.exports = router;
