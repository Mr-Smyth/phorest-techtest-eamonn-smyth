/*jshint esversion: 6 */ 

// explain route from test file to mock folder
jest.mock('../utils/axios-fetch');

const controllers = require('../controllers/main');

// pass in a dummy req object to satisfy the search logic
const req = {
    body: {
        clientId: 'F7-OD3o2l6stz5iSDPxY7A',
        amount: 14.85
    }
};

test('Voucher client related Test - To check if the firstName of the voucher is correct.', () => {
    expect.assertions(1);
    return controllers.postCreateVoucher(req)
    .then(voucher => {
        expect(voucher.client.firstName).toEqual('Abagail');
    });
});

test('Voucher creation Test - To check if the amount of the voucher is correct.', () => {
    expect.assertions(1);
    return controllers.postCreateVoucher(req)
    .then(voucher => {
        expect(voucher.voucherData.remainingBalance).toEqual(14.85);
    });
});

test('Voucher creation Test - To check if the voucher success flag is true.', () => {
    expect.assertions(1);
    return controllers.postCreateVoucher(req)
    .then(voucher => {
        expect(voucher.success).toBe(true);
    });
});