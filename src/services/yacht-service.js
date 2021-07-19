import { storageService } from './async-storage.service.js'

// const fs = require('fs')
// const gYachts = require('../../data/yacht.json')
const gYachts = [{
    "_id": "10006546",
    "name": "Katrina",
    "imgUrls": [
        "https://images.unsplash.com/photo-1599257559270-eeccb1f266df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1616207133639-cd5e4db9859f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1514480854622-ef7d8f2c572f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1598770722761-0cab70ffd2fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1613886180226-d318bc3df2e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    ],
    "price": 1800,
    "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
    "size": "medium",
    "favorites": [{ "userId": "u109" }],
    "amenities": [
        "No Smoking",
        "TV",
        "Wifi",
        "Air-conditioning",
        "Smoking allowed",
        "Pets allowed",
        "Cooking basics"
    ],
    "owner": {
        "_id": "51399391",
        "fullname": "Davit Pok",
        "imgUrl": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "loc": {
        "country": "Portugal",
        "city": "porto",
        "countryCode": "PT",
        "address": "Porto, Portugal",
        "lat": -8.61308,
        "lng": 41.1413
    },
    "reviews": [{
            "id": "u102rev",
            "txt": "Great apartment, amazing view and amnesties",
            "rate": 4.5,
            "category": {
                "Cleanliness": 4,
                "Accuracy": 4,
                "Communication": 4,
                "Location": 5,
                "Check-in": 5,
                "Accessibility": 5
            },
            "by": {
                "_id": "u102",
                "fullname": "Nicolas Roho",
                "imgUrl": "https://randomuser.me/api/portraits/men/2.jpg",
                "time": 1616280724238
            }
        },
        {
            "id": "u103ord",
            "txt": "Great apartment, amazing view and amnesties",
            "rate": 4,
            "category": {
                "Cleanliness": 4,
                "Accuracy": 5,
                "Communication": 3,
                "Location": 3,
                "Check-in": 4,
                "Accessibility": 5
            },
            "by": {
                "_id": "u103",
                "fullname": "Jack Daniel",
                "imgUrl": "https://randomuser.me/api/portraits/men/3.jpg",
                "time": 1616280724238
            }
        },
        {
            "id": "u104rev",
            "txt": "Great apartment, although please be aware that the kitchen is not as equipped as would have been expected. Very comfortable stay and in a great location",
            "rate": 3.5,
            "category": {
                "Cleanliness": 3,
                "Accuracy": 3,
                "Communication": 3,
                "Location": 4,
                "Check-in": 4,
                "Accessibility": 4
            },
            "by": {
                "_id": "u104",
                "fullname": "Adi Ben David",
                "imgUrl": "https://randomuser.me/api/portraits/men/4.jpg",
                "time": 1616280724238
            }
        },
        {
            "id": "u105rev",
            "txt": "Great apartment, amazing view and amnesties",
            "rate": 4.5,
            "category": {
                "Cleanliness": 4,
                "Accuracy": 4,
                "Communication": 4,
                "Location": 5,
                "Check-in": 5,
                "Accessibility": 5
            },
            "by": {
                "_id": "u105",
                "fullname": "John Lenon",
                "imgUrl": "https://randomuser.me/api/portraits/men/5.jpg",
                "time": 1606280724238
            }
        },
        {
            "id": "u106rev",
            "txt": "We had a wonderful stay at the Oasis on the Easter Weekend. A little outside Rome, the place is perfect for a stay of one week or longer. Directly at Via Appia Antica, with some ancient sites in walking distance. Federico and especially his mother and partner were very helpful by any means. Whatever we needed or asked for - they had an answer or solution. The garden was perfect for us and our children, nice and sunny until sunset. We would definitely come back!",
            "rate": 4,
            "category": {
                "Cleanliness": 4,
                "Accuracy": 5,
                "Communication": 3,
                "Location": 3,
                "Check-in": 4,
                "Accessibility": 5
            },
            "by": {
                "_id": "u106",
                "fullname": "Adam Kolt",
                "imgUrl": "https://randomuser.me/api/portraits/men/6.jpg",
                "time": 1616280724238
            }
        },
        {
            "id": "u107rev",
            "txt": "Great apartment, although please be aware that the kitchen is not as equipped as would have been expected. Very comfortable stay and in a great location",
            "rate": 3.5,
            "category": {
                "Cleanliness": 3,
                "Accuracy": 3,
                "Communication": 3,
                "Location": 4,
                "Check-in": 4,
                "Accessibility": 4
            },
            "by": {
                "_id": "u107",
                "fullname": "Chan Mi Sun",
                "imgUrl": "https://randomuser.me/api/portraits/men/7.jpg",
                "time": 1617280724238
            }
        }
    ]
},
{
    "_id": "10008743",
    "name": "JEANNEAU ",
    "imgUrls": [
        "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1600177897995-e67c73ed44e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    ],
    "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
    "price": 1200,
    "size": "small",
    "amenities": [
        "TV",
        "Wifi",
        "WaterSlide"
    ],
    "owner": {
        "_id": "51397865",
        "fullname": "Gilad Bashan",
        "imgUrl": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "loc": {
        "country": "Morocco",
        "city": "Tetouan",
        "countryCode": "MA",
        "address": "Marina Smir",
        "lat": -5.3109449,
        "lng": 35.7353565
    },
    "reviews": [{
        "id": "madeId",
        "txt": "Very helpful owners. Cooked traditional...",
        "rate": 5,
        "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
        }
    }]
},
{
    "_id": "10005432",
    "name": "LA PERLA",
    "imgUrls": [
        "https://images.unsplash.com/photo-1535024966840-e7424dc2635b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8eWFjaHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1615210466215-44e337bf95ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    ],
    "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
    "price": 1000,
    "size": "small",
    "amenities": [
        "TV",
        "Wifi"
    ],
    "owner": {
        "_id": "51394987",
        "fullname": "Shos Gon",
        "imgUrl": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "loc": {
        "country": "israel",
        "city": "Acre",
        "countryCode": "IL",
        "address": "Acre Port, Leopold II",
        "lat": 35.0713933,
        "lng": 32.9192379
    },
    "reviews": [{
        "id": "madeId",
        "txt": "Very helpful owners. Cooked traditional...",
        "rate": 2,
        "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
        }
    }]
},
{
    "_id": "10007852",
    "name": "LAGOON43 ",
    "imgUrls": [
        "https://images.unsplash.com/photo-1621277224630-81d9af65e40c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1559385301-0187cb6eff46?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    ],
    "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
    "price": 1250,
    "size": "small",
    "amenities": [
        "TV",
        "Wifi"
    ],
    "owner": {
        "_id": "51395833",
        "fullname": "Adam Honlol",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Guadeloupe",
        "city": "Gourbeyre",
        "countryCode": "IL",
        "address": "Marina Riviere Sens, Gourbeyre",
        "lat": -64.5336044,
        "lng": 18.0553084
    },
    "reviews": [{
        "id": "madeId",
        "txt": "Very helpful owners. Cooked traditional...",
        "rate": 5,
        "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
        }
    }]
},
{
    "_id": "10009921",
    "name": "MULTICAP ",
    "imgUrls": [
        "https://images.unsplash.com/photo-1517988368819-88f4eacfef44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1586398449328-69bf1b779f0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    ],
    "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
    "price": 2000,
    "size": "large",
    "amenities": [
        "TV",
        "Wifi",
        "Kitchen",
        "PetsAllowed"
    ],
    "owner": {
        "_id": "51394568",
        "fullname": "Jon Moader",
        "imgUrl": "https://a0.muscache.com/im/pictures/fab79f25-2e10-4f0f-9711-663cb69dc7d8.jpg?aki_policy=profile_small"
    },
    "loc": {
        "country": "Guadeloupe",
        "city": "Deshaies",
        "countryCode": "GU",
        "address": "Deshaies, Guadeloupe",
        "lat": -61.2718324,
        "lng": 16.3154298
    },
    "reviews": [{
        "id": "madeId",
        "txt": "Very helpful owners. Cooked traditional...",
        "rate": 4,
        "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
        }
    }]
},
{
    "_id": "10054328",
    "name": "JACQUE LE COQ",
    "imgUrls": [
        "https://images.unsplash.com/photo-1604671801989-586dde3c1574?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1600177897995-e67c73ed44e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    ],
    "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
    "price": 2500,
    "size": "large",
    "amenities": [
        "TV",
        "Wifi",
        "WaterSlide"
    ],
    "owner": {
        "_id": "51397865",
        "fullname": "louis lemoore",
        "imgUrl": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "loc": {
        "country": "France",
        "city": "monaco",
        "countryCode": "FR",
        "address": "Monaco Port de Fontvielle",
        "lat": 43.7294,
        "lng": 7.4209
    },
    "reviews": [{
        "id": "madeId",
        "txt": "luxury yacht , best in Monaco! Will come back again next summer for sure :)",
        "rate": 5,
        "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
        }
    }]
},
{
    "_id": "10008621",
    "name": "BIG-GLORIA",
    "imgUrls": [
        "https://images.unsplash.com/photo-1604671801989-586dde3c1574?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1600177897995-e67c73ed44e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    ],
    "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
    "price": 1200,
    "size": "meduim",
    "amenities": [
        "TV",
        "Wifi",
        "WaterSlide"
    ],
    "owner": {
        "_id": "51399865",
        "fullname": "James oxley",
        "imgUrl": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "loc": {
        "country": "United Kingdom",
        "city": "london",
        "countryCode": "UK",
        "address": "Limehouse Marina",
        "lat": 51.510834,
        "lng": -0.037168
    },
    "reviews": [{
        "id": "madeId",
        "txt": "Very helpful owners. Cooked traditional...",
        "rate": 5,
        "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
        }
    }]
}, {
    "_id": "10008743",
    "name": "GUSTAV-VASA",
    "imgUrls": [
        "https://images.unsplash.com/photo-1604671801989-586dde3c1574?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1600177897995-e67c73ed44e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    ],
    "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
    "price": 1200,
    "size": "small",
    "amenities": [
        "TV",
        "Wifi",
        "WaterSlide"
    ],
    "owner": {
        "_id": "51393165",
        "fullname": "Yohan Nilsson",
        "imgUrl": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "loc": {
        "country": "Sweden",
        "city": "Skäldervikens",
        "countryCode": "SE",
        "address": "Skäldervikens Hamn",
        "lat": 56.27808488272313,
        "lng": 12.843368570818022
    },
    "reviews": [{
        "id": "madeId",
        "txt": "Very helpful owners. Cooked traditional...",
        "rate": 5,
        "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
        }
    }]
},
{
    "_id": "139811232",
    "name": "Aisen",
    "imgUrls": [
        "https://images.unsplash.com/photo-1592437111271-239fa8dcb401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHlhY2h0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
        "https://images.unsplash.com/photo-1615210466215-44e337bf95ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHlhY2h0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    ],
    "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
    "price": 1000,
    "size": "medium",
    "amenities": [
        "TV",
        "Wifi"
    ],
    "owner": {
        "_id": "57743033",
        "fullname": "Kelly Poon",
        "imgUrl": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    "loc": {
        "country": "Macau",
        "city": "Changshengwei",
        "countryCode": "IL",
        "address": "Doca da Ilha Verde",
        "lat": 22.209912884222067,
        "lng": 113.53951811264966
    },
    "reviews": [{
        "id": "madeId",
        "txt": "Very helpful owners. Cooked traditional...",
        "rate": 2,
        "by": {
            "_id": "u102",
            "fullname": "user2",
            "imgUrl": "/img/img2.jpg"
        }
    }]
}
]

export const yachtService = {
    query,
    getById,
    remove,
    save,
    getEmptyYacht,

}

// query()

function query(filterBy) {
    console.log(filterBy, 'service');
    const { rate } = filterBy
    const { price } = filterBy
    const regex = new RegExp(filterBy.txt, 'i')
    console.log(rate, 'rate service');
    const { size } = filterBy
    let yachts = JSON.parse(JSON.stringify(gYachts))
    yachts = yachts.filter((yacht) => yacht.price > price)
    switch (size) {
        case 'All' || '':
            break;
        case 'Small':
            yachts = yachts.filter((yacht) => yacht.size === 'small');
            break;
        case 'Medium':
            yachts = yachts.filter((yacht) => yacht.size === 'medium');
            break;
        case 'Large':
            yachts = yachts.filter((yacht) => yacht.size === 'large');
            break;
    }
    switch (rate) {
        case 'All' || '':
            break;
        case 1:
            yachts = yachts.filter((yacht) => {

                console.log(yacht, 'yacht service 1');
                yacht.reviews[0].rate === 1;
                console.log(yacht.reviews[0].rate, 'yacht service 1');
            })
            break;
        case 2:
            yachts = yachts.filter((yacht) => yacht.reviews[0].rate === 2);
            break;
        case 3:
            yachts = yachts.filter((yacht) => yacht.reviews[0].rate === 3);
            break;
        case 4:
            yachts = yachts.filter((yacht) => yacht.reviews[0].rate === 4);
            break;
        case 5:
            yachts = yachts.filter((yacht) => yacht.reviews[0].rate === 5);
            break;
    }

    yachts = yachts.filter(yacht => regex.test(yacht.loc.country && yacht.loc.city && yacht.loc.address))
    return Promise.resolve(yachts)
}


function remove(yachtId) {
    return storageService.delete('yacht', yachtId)

}


function getById(yachtId) {
    const yacht = gYachts.find(yacht => yacht._id === yachtId)
    return Promise.resolve(yacht)
}



// function remove(yachtId, user) {
//     console.log('user._id :>> ', user._id);
//     const idx = gyachts.findIndex(yacht => yacht._id === yachtId && (user.isAdmin || yacht.creator._id === user._id))
//     console.log('idx :>> ', idx);
//     if (idx >= 0) {
//         gyachts.splice(idx, 1);
//         return _saveyachtsToFile()
//     }
//     return Promise.reject('Not your yacht ' + yachtId)
// }

function save(yachtToSave) {
    // console.log('yachtToSave :>> ', yachtToSave);
    const yacht = {
        _id: yachtToSave._id || _makeId(),
        name: yachtToSave.name,
        imgUrls: yachtToSave.imgUrls,
        price: yachtToSave.price,
        size: yachtToSave.size,
        amenities: yachtToSave.amenities,
        owner: {
            fullname: yachtToSave.owner.fullname,
            imgUrl: yachtToSave.owner.imgUrl
        },
        loc: {
            country: yachtToSave.loc.country,
            city: yachtToSave.loc.city,
            address: yachtToSave.loc.address
        }
    }
    if (yachtToSave._id) {
        // const idx = gyachts.findIndex(yacht => yacht._id === yachtToSave._id && (user.isAdmin || yacht.creator._id === user._id))
        const idx = gYachts.findIndex(yacht => yacht._id === yachtToSave._id)
        gYachts[idx] = yacht;
    } else {
        gYachts.unshift(yacht)
    }
    // return _saveyachtsToFile().then(() => {
    //     return yacht;
    // })
    console.log(gYachts);
    return yacht;
}

function _makeId(length = 5) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var txt = '';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

// function _saveyachtsToFile() {
//     return new Promise((resolve, reject) => {
//         fs.writeFile('data/yacht.json', JSON.stringify(gYachts, null, 2), (err) => {
//             if (err) return reject(err)
//             resolve();
//         })
//     })
// }

function getEmptyYacht() {
    return {
        "_id": "",
        "name": "",
        "imgUrls": [],
        "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
        "price": 0,
        "size": "",
        "amenities": [],
        "owner": {
            "_id": _makeId(),
            "fullname": "",
            "imgUrl": "https://randomuser.me/api/portraits/men/1.jpg"
        },
        "loc": {
            "country": "",
            "city": "",
            "countryCode": "",
            "address": "",
            "lat": 0,
            "lng": 0
        },
        "reviews": [{
            "id": "madeId",
            "txt": "Very helpful owners. Cooked traditional...",
            "rate": 2,
            "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "/img/img2.jpg"
            }
        }]
    }
}