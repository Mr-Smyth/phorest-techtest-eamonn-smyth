const getClients = () => {
    console.log("In new mock file")
    return Promise.resolve({
        data: {
            _embedded: {
                clients: 
                [
                    {
                        clientId: 'F7-OD3o2l6stz5iSDPxY7A',
                        version: 6,
                        firstName: 'Abagail',
                        lastName: 'Leannon',
                        email: 'aperiamBrownProsacco.b2ezyhzh@mailosaur.io',
                        createdAt: '2020-10-24T07:07:53.000Z',
                        updatedAt: '2021-03-16T10:18:08.000Z',
                        clientSince: '2020-10-24T07:07:53.000Z',
                        gender: 'FEMALE',
                        smsMarketingConsent: true,
                        emailMarketingConsent: false,
                        smsReminderConsent: true,
                        emailReminderConsent: true,
                        creditAccount: { creditDays: 0, creditLimit: 97 },
                        archived: false,
                        deleted: false,
                        banned: false,
                        clientCategoryIds: []
                    }
                ]
                
            },
            page: { size: 1, totalElements: 1, totalPages: 1, number: 0 }
        }
    });
};

exports.getClients = getClients;
