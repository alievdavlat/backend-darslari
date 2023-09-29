# Markets

- Markets (GET, POST, PUT, DELETE)
- Branches (GET, POST, PUT, DELETE)
- Workers (GET, POST, PUT, DELETE)
- Products (GET, POST, PUT, DELETE)

- Markets 
    - GET(/markets, /markets/2)
        {
            id: 1,
            name: 'Makro',
            branches: [
                {
                    id: 1,
                    name: 'Makro Olmazor',
                    address: 'Olmazor olma',
                    workers: [
                        {
                            id: 1,
                            name: "Eshmat",
                            position: 'manager'
                        }
                    ],
                    products: [
                        {
                            id: 7,
                            name: "Cola",
                            price: '10 000',
                            count: 1000
                        }
                    ]
                }
            ]
        }