// explain route from test file to mock folder
jest.mock('../utils/axios-fetch')

const controllers = require('../controllers/main');

// pass in a dummy req object to satisfy the search logic
const req = {
    body: {
        email: 'mockemai@email.com'
    }
}

test('To check if the correct client data is returned from mock axios data', () => {
    expect.assertions(1);
    return controllers.postClientSearch(req)
    .then(clients => {
        expect(clients[0].firstName).toEqual('Abagail');
    })
});

test('Test if the correct email data is returned from mock axios data', () => {
    expect.assertions(1);
    return controllers.postClientSearch(req)
    .then(clients => {
        expect(clients.search).toEqual('client?email=mockemai@email.com');
    })
});