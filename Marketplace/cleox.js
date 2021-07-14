const db = {
    "yacht": [{
        "_id": "10006546",
        "name": "Katrina",
        "imgUrls": ["https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large", "otherImg.jpg"],
        "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
        "price": 1800,
        "size": "small",
        "capacity": 8,
        "captain": true,
        "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Pets allowed",
        ],
        "owner": {
            "_id": "51399391",
            "fullname": "Davit Pok",
            "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small",
        },
        "loc": {
            "country": "Portugal",
            "countryCode": "PT",
            "address": "Porto, Portugal",
            "lat": -8.61308,
            "lng": 41.1413
        },
        "reviews": [{
            "id": "madeId",
            "txt": "Very helpful hosts. Cooked traditional...",
            "rate": 4,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }],
        "likedByUserIds": ["u101", "u102"]
    }],
    "order": [{
        "_id": "o1225",
        "hostId": "u102",
        "createdAt": 9898989,
        "buyer": {
            "_id": "u101",
            "fullname": "User 1"
        },
        "totalPrice": 3600,
        "startDate": "2025/10/15",
        "endDate": "2025/10/17",
        "guests": 2,
        "yacht": {
            "_id": "h102",
            "name": "Katrina",
            "price": 1800
        },
        "status": "pending"
    }],
    "user": [{
            "_id": "u101",
            "fullname": "User 1",
            "imgUrl": "/img/img1.jpg",
            "isAdmin": false,
            "username": "user1",
            "password": "secret"
        },
        {
            "_id": "u102",
            "fullname": "User 2",
            "imgUrl": "/img/img2.jpg",
            "isAdmin": false,
            "username": "user2",
            "password": "secret"
        }
    ]
}