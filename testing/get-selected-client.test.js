/*jshint esversion: 6 */ 

// explain route from test file to mock folder
jest.mock('../utils/axios-fetch');

const controllers = require('../controllers/main');

// pass in a dummy req object to satisfy the search logic
const req = {
    params: {
        clientId: 'F7-OD3o2l6stz5iSDPxY7A'
    }
};
test('Voucher Test - To check if the selected client data is returned by the controller using mock data', () => {
    expect.assertions(1);
    return controllers.getAddVoucher(req)
    .then(clients => {
        expect(clients.firstName).toEqual('Abagail');
    });
});
