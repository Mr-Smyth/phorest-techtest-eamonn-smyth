const controllers = require('./controllers/main');

// pass in a dummy req object to satisfy the search logic
const req = {
    params: {
        clientId: 'F7-OD3o2l6stz5iSDPxY7A'
    }
}
test('Voucher Test - To check if the selected client data is returned from mock axios data', () => {
    expect.assertions(1);
    return controllers.getVoucher(req)
    .then(clients => {
        expect(clients[0].firstName).toEqual('Abagail');
    })
});
