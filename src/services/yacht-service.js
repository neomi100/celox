import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

// const fs = require('fs')
// const gYachts = require('../../data/yacht.json')
const YACHT_KEY = 'yachts'
const yachtJson = [{
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
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
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
                "txt": "We had an amazing stay with Walter and Adriana. They were always thoughtful and looking for ways to make our stay as amazing as possible. I would definitely repeat with stay with them, as I don’t believe there is a better value for your money in Ibiza. I would advise new guests to be very commutative with Walter and Adriana as far as what you’d expect with your trip/stay and places to go. Make sure you understand the guidances of your stay by asking from the beginning.",
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
                "txt": " He brought us to a beautiful swimming spot with caves then a sandy beach. From there we sailed to Silba and had a late lunch at an amazing restaurant he recommended. The fish was caught fresh that day and served with home grown vegetables. It was a very relaxed trip and nice to just have our family onyacht. I would highly recommend Ivan and his boat.",
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
                "txt": "What can I say, Ivan nailed it, perfect host, perfect boat, perfect day out, could not have wished for anymore! Anyone even thinking of renting a boat look no further, Ivan is your man, what a day 10/10, thankyou",
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
                "txt": "The route Ivan planned for this 1 day trip was really perfect, we visited really nice places for a day without any stress at all. One of us was seasick and Ivan took care of him in a impressive way. One the way home in to the port we all had the same feeling that we actually did not wan´t the trip to end because we felt so relaxed. Many thanks and our best recommendations to Ivan.",
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
                "txt": "Our boat trip with Ivan was easily the best day of our entire trip! He was very friendly, professional, and accommodating. His boat was the perfect size for our party of six and well equipped, (outlets, fast WiFi, a retractable canopy to block the sun, fridge, a bathroom and bunks if you need them). We were all sad it had to end. Definitely recommend booking, worth every penny! Thanks !",
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
        "name": "JEANNEAU — SUN ODYSSEY",
        "imgUrls": [
            "https://static1.clickandboat.com/v1/p/OxMIELUvPG8yvDde8Mwt6z21TNyB5qPa.big.jpg",
            "https://static1.clickandboat.com/v1/p/w34fcnxqgvotksw4xw9ibafbw0oc9opi.big.jpg",
            "https://static1.clickandboat.com/v1/p/glbqKzyuDlIBZk4TsdHVkHMCpwN9jNX5.big.jpg",
            "https://static1.clickandboat.com/v1/p/gxrdvwva77e2576ntgsvur1gnqa1llux.big.jpg",
            "https://static1.clickandboat.com/v1/p/1tszrotvqkf6475asty08zt5a4g4hb0m.big.jpg"
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
                "id": "u102rev",
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
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
                "txt": "We had an amazing stay with Walter and Adriana. They were always thoughtful and looking for ways to make our stay as amazing as possible. I would definitely repeat with stay with them, as I don’t believe there is a better value for your money in Ibiza. I would advise new guests to be very commutative with Walter and Adriana as far as what you’d expect with your trip/stay and places to go. Make sure you understand the guidances of your stay by asking from the beginning.",
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
                "txt": " He brought us to a beautiful swimming spot with caves then a sandy beach. From there we sailed to Silba and had a late lunch at an amazing restaurant he recommended. The fish was caught fresh that day and served with home grown vegetables. It was a very relaxed trip and nice to just have our family onyacht. I would highly recommend Ivan and his boat.",
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
                "txt": "What can I say, Ivan nailed it, perfect host, perfect boat, perfect day out, could not have wished for anymore! Anyone even thinking of renting a boat look no further, Ivan is your man, what a day 10/10, thankyou",
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
                "txt": "The route Ivan planned for this 1 day trip was really perfect, we visited really nice places for a day without any stress at all. One of us was seasick and Ivan took care of him in a impressive way. One the way home in to the port we all had the same feeling that we actually did not wan´t the trip to end because we felt so relaxed. Many thanks and our best recommendations to Ivan.",
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
                "txt": "Our boat trip with Ivan was easily the best day of our entire trip! He was very friendly, professional, and accommodating. His boat was the perfect size for our party of six and well equipped, (outlets, fast WiFi, a retractable canopy to block the sun, fridge, a bathroom and bunks if you need them). We were all sad it had to end. Definitely recommend booking, worth every penny! Thanks !",
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
        "_id": "10005432",
        "name": "LA PERLA",
        "imgUrls": [
            "https://image.zizoo.com/boat/384x435/jpeg/0006/14/f2d49068b3533019eddffd4667c63c6ff0df5123.png",
            "https://image.zizoo.com/boat/1000x750/jpeg/0006/14/53ff91fc8c5f5a6afbb3b8c6adbf3a19b0b80256.png",
            "https://image.zizoo.com/boat/1000x750/jpeg/0006/14/e88ae4f2e9e2889966eaeb2be38f2acefd7e5984.png",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/19e19419d5dfc0b3b5b7df186815f736c5e992df.png",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/08f0fc5ea5c88bf926347940ee4ddab55c7e8658.png"
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
                "id": "u102rev",
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
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
                "txt": "We had an amazing stay with Walter and Adriana. They were always thoughtful and looking for ways to make our stay as amazing as possible. I would definitely repeat with stay with them, as I don’t believe there is a better value for your money in Ibiza. I would advise new guests to be very commutative with Walter and Adriana as far as what you’d expect with your trip/stay and places to go. Make sure you understand the guidances of your stay by asking from the beginning.",
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
                "txt": " He brought us to a beautiful swimming spot with caves then a sandy beach. From there we sailed to Silba and had a late lunch at an amazing restaurant he recommended. The fish was caught fresh that day and served with home grown vegetables. It was a very relaxed trip and nice to just have our family onyacht. I would highly recommend Ivan and his boat.",
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
                "txt": "What can I say, Ivan nailed it, perfect host, perfect boat, perfect day out, could not have wished for anymore! Anyone even thinking of renting a boat look no further, Ivan is your man, what a day 10/10, thankyou",
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
                "txt": "The route Ivan planned for this 1 day trip was really perfect, we visited really nice places for a day without any stress at all. One of us was seasick and Ivan took care of him in a impressive way. One the way home in to the port we all had the same feeling that we actually did not wan´t the trip to end because we felt so relaxed. Many thanks and our best recommendations to Ivan.",
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
                "txt": "Our boat trip with Ivan was easily the best day of our entire trip! He was very friendly, professional, and accommodating. His boat was the perfect size for our party of six and well equipped, (outlets, fast WiFi, a retractable canopy to block the sun, fridge, a bathroom and bunks if you need them). We were all sad it had to end. Definitely recommend booking, worth every penny! Thanks !",
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
        "_id": "10007852",
        "name": "LAGOON43 ",
        "imgUrls": [
            "https://image.zizoo.com/boat/384x435/jpeg/0006/22/108b3c6f93daa33edb7e5f45a4801f90f44b3a44.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/22/e6a989bdd9106c64c037071cf2dfd842dc061570.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/22/33451e68d96dc8e22437f6bc36f31f99d75523cb.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/22/504263e7361c0a440188d434b21321ac0afeda31.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/22/769f1b86e947c1a454e7f1ab83cb3c3ad21ff082.jpeg"
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
                "id": "u102rev",
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/21.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u103ord",
                "txt": "We had an amazing stay with Walter and Adriana. They were always thoughtful and looking for ways to make our stay as amazing as possible. I would definitely repeat with stay with them, as I don’t believe there is a better value for your money in Ibiza. I would advise new guests to be very commutative with Walter and Adriana as far as what you’d expect with your trip/stay and places to go. Make sure you understand the guidances of your stay by asking from the beginning.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/34.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u104rev",
                "txt": " He brought us to a beautiful swimming spot with caves then a sandy beach. From there we sailed to Silba and had a late lunch at an amazing restaurant he recommended. The fish was caught fresh that day and served with home grown vegetables. It was a very relaxed trip and nice to just have our family onyacht. I would highly recommend Ivan and his boat.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/45.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u105rev",
                "txt": "What can I say, Ivan nailed it, perfect host, perfect boat, perfect day out, could not have wished for anymore! Anyone even thinking of renting a boat look no further, Ivan is your man, what a day 10/10, thankyou",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/56.jpg",
                    "time": 1606280724238
                }
            },
            {
                "id": "u106rev",
                "txt": "The route Ivan planned for this 1 day trip was really perfect, we visited really nice places for a day without any stress at all. One of us was seasick and Ivan took care of him in a impressive way. One the way home in to the port we all had the same feeling that we actually did not wan´t the trip to end because we felt so relaxed. Many thanks and our best recommendations to Ivan.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/68.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u107rev",
                "txt": "Our boat trip with Ivan was easily the best day of our entire trip! He was very friendly, professional, and accommodating. His boat was the perfect size for our party of six and well equipped, (outlets, fast WiFi, a retractable canopy to block the sun, fridge, a bathroom and bunks if you need them). We were all sad it had to end. Definitely recommend booking, worth every penny! Thanks !",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/77.jpg",
                    "time": 1617280724238
                }
            }
        ]
    },
    {
        "_id": "10009921",
        "name": "MULTICAP ",
        "imgUrls": [
            "https://image.zizoo.com/boat/512x384/jpeg/0006/54/2fe0d5ff5dd47ebe5d0bd4e10349018193429e48.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/352aa5c4a2e792271a24592d0c9a7660b16301ff.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/2b8a99a42de955a5b49c6ffed3c94701e3108e47.jpeg",
            "https://image.zizoo.com/boat/384x435/jpeg/0006/14/71b44126f1f45f573b82aa346ee364c0b09c22b3.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/629b529172ca7d38d9e7e065faa891b9b7f463e7.jpeg"
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
                "id": "u102rev",
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/82.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u103ord",
                "txt": "We had an amazing stay with Walter and Adriana. They were always thoughtful and looking for ways to make our stay as amazing as possible. I would definitely repeat with stay with them, as I don’t believe there is a better value for your money in Ibiza. I would advise new guests to be very commutative with Walter and Adriana as far as what you’d expect with your trip/stay and places to go. Make sure you understand the guidances of your stay by asking from the beginning.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/83.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u104rev",
                "txt": " He brought us to a beautiful swimming spot with caves then a sandy beach. From there we sailed to Silba and had a late lunch at an amazing restaurant he recommended. The fish was caught fresh that day and served with home grown vegetables. It was a very relaxed trip and nice to just have our family onyacht. I would highly recommend Ivan and his boat.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/94.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u105rev",
                "txt": "What can I say, Ivan nailed it, perfect host, perfect boat, perfect day out, could not have wished for anymore! Anyone even thinking of renting a boat look no further, Ivan is your man, what a day 10/10, thankyou",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/85.jpg",
                    "time": 1606280724238
                }
            },
            {
                "id": "u106rev",
                "txt": "The route Ivan planned for this 1 day trip was really perfect, we visited really nice places for a day without any stress at all. One of us was seasick and Ivan took care of him in a impressive way. One the way home in to the port we all had the same feeling that we actually did not wan´t the trip to end because we felt so relaxed. Many thanks and our best recommendations to Ivan.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/76.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u107rev",
                "txt": "Our boat trip with Ivan was easily the best day of our entire trip! He was very friendly, professional, and accommodating. His boat was the perfect size for our party of six and well equipped, (outlets, fast WiFi, a retractable canopy to block the sun, fridge, a bathroom and bunks if you need them). We were all sad it had to end. Definitely recommend booking, worth every penny! Thanks !",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/67.jpg",
                    "time": 1617280724238
                }
            }
        ]
    },
    {
        "_id": "10054328",
        "name": "JACQUE LE COQ",
        "imgUrls": [
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/465208d5673236d6eb9aacb66db96f0c4c4e0687.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/0f752f41d65c16c80ae5bb17b42adb451f56f902.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/dc64a6bee9f12a500bf5ea923b1b01dd9085b3cb.jpeg",
            "https://image.zizoo.com/boat/384x435/jpeg/0006/14/300fc8c82f8ee910f515823c77d0cfd7a257f4b5.png",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/766857865d73b6e87206c93da9df0bbbbb4730f5.jpeg"
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
            "imgUrl": "https://randomuser.me/api/portraits/men/61.jpg"
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
                "id": "u102rev",
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/52.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u103ord",
                "txt": "We had an amazing stay with Walter and Adriana. They were always thoughtful and looking for ways to make our stay as amazing as possible. I would definitely repeat with stay with them, as I don’t believe there is a better value for your money in Ibiza. I would advise new guests to be very commutative with Walter and Adriana as far as what you’d expect with your trip/stay and places to go. Make sure you understand the guidances of your stay by asking from the beginning.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/53.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u104rev",
                "txt": " He brought us to a beautiful swimming spot with caves then a sandy beach. From there we sailed to Silba and had a late lunch at an amazing restaurant he recommended. The fish was caught fresh that day and served with home grown vegetables. It was a very relaxed trip and nice to just have our family onyacht. I would highly recommend Ivan and his boat.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/54.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u105rev",
                "txt": "What can I say, Ivan nailed it, perfect host, perfect boat, perfect day out, could not have wished for anymore! Anyone even thinking of renting a boat look no further, Ivan is your man, what a day 10/10, thankyou",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/45.jpg",
                    "time": 1606280724238
                }
            },
            {
                "id": "u106rev",
                "txt": "The route Ivan planned for this 1 day trip was really perfect, we visited really nice places for a day without any stress at all. One of us was seasick and Ivan took care of him in a impressive way. One the way home in to the port we all had the same feeling that we actually did not wan´t the trip to end because we felt so relaxed. Many thanks and our best recommendations to Ivan.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/46.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u107rev",
                "txt": "Our boat trip with Ivan was easily the best day of our entire trip! He was very friendly, professional, and accommodating. His boat was the perfect size for our party of six and well equipped, (outlets, fast WiFi, a retractable canopy to block the sun, fridge, a bathroom and bunks if you need them). We were all sad it had to end. Definitely recommend booking, worth every penny! Thanks !",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/37.jpg",
                    "time": 1617280724238
                }
            }
        ]
    },
    {
        "_id": "100082743",
        "name": "BIG-GLORIA",
        "imgUrls": [
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/eddfac912d452bdb9c7ca25e60bd97f4dc93be52.png",
            "https://image.zizoo.com/boat/1000x750/jpeg/0006/14/eab70d5af1673ac8c92b3126f1bb0dbd600bbc3c.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/6caf47d03bb5d7c52fbd7a26acc865f303f7ce0f.png",
            "https://image.zizoo.com/boat/384x435/jpeg/0006/14/c8f031356e3a204122fbc0d0a4b671d74665bfb8.png",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/94abab4bbac75736119e1e4a890486764c598292.png"
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
            "imgUrl": "https://randomuser.me/api/portraits/men/31.jpg"
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
                "id": "u102rev",
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/32.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u103ord",
                "txt": "We had an amazing stay with Walter and Adriana. They were always thoughtful and looking for ways to make our stay as amazing as possible. I would definitely repeat with stay with them, as I don’t believe there is a better value for your money in Ibiza. I would advise new guests to be very commutative with Walter and Adriana as far as what you’d expect with your trip/stay and places to go. Make sure you understand the guidances of your stay by asking from the beginning.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/33.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u104rev",
                "txt": " He brought us to a beautiful swimming spot with caves then a sandy beach. From there we sailed to Silba and had a late lunch at an amazing restaurant he recommended. The fish was caught fresh that day and served with home grown vegetables. It was a very relaxed trip and nice to just have our family onyacht. I would highly recommend Ivan and his boat.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/24.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u105rev",
                "txt": "What can I say, Ivan nailed it, perfect host, perfect boat, perfect day out, could not have wished for anymore! Anyone even thinking of renting a boat look no further, Ivan is your man, what a day 10/10, thankyou",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/25.jpg",
                    "time": 1606280724238
                }
            },
            {
                "id": "u106rev",
                "txt": "The route Ivan planned for this 1 day trip was really perfect, we visited really nice places for a day without any stress at all. One of us was seasick and Ivan took care of him in a impressive way. One the way home in to the port we all had the same feeling that we actually did not wan´t the trip to end because we felt so relaxed. Many thanks and our best recommendations to Ivan.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/26.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u107rev",
                "txt": "Our boat trip with Ivan was easily the best day of our entire trip! He was very friendly, professional, and accommodating. His boat was the perfect size for our party of six and well equipped, (outlets, fast WiFi, a retractable canopy to block the sun, fridge, a bathroom and bunks if you need them). We were all sad it had to end. Definitely recommend booking, worth every penny! Thanks !",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/27.jpg",
                    "time": 1617280724238
                }
            }
        ]
    }, {
        "_id": "100087243",
        "name": "GUSTAV-VASA",
        "imgUrls": [
            "https://image.zizoo.com/boat/512x384/jpeg/0006/57/560bafd8144d741074ceda3dced35adca2c9fdb0.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/57/445ddb54898e12d9d3b7712aff3d646b6c644664.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/57/3004d6d832e16d2693cb02536c47b129ddaac28e.jpeg",
            "https://image.zizoo.com/boat/384x435/jpeg/0006/57/c39dd294e3157d0d53ca3138a4e71df15038d407.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/57/a90cfeba82a95ce107c07b1fd6da3db4c78802fc.jpeg"
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
            "imgUrl": "https://randomuser.me/api/portraits/men/11.jpg"
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
                "id": "u102rev",
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/12.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u103ord",
                "txt": "We had an amazing stay with Walter and Adriana. They were always thoughtful and looking for ways to make our stay as amazing as possible. I would definitely repeat with stay with them, as I don’t believe there is a better value for your money in Ibiza. I would advise new guests to be very commutative with Walter and Adriana as far as what you’d expect with your trip/stay and places to go. Make sure you understand the guidances of your stay by asking from the beginning.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/13.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u104rev",
                "txt": " He brought us to a beautiful swimming spot with caves then a sandy beach. From there we sailed to Silba and had a late lunch at an amazing restaurant he recommended. The fish was caught fresh that day and served with home grown vegetables. It was a very relaxed trip and nice to just have our family onyacht. I would highly recommend Ivan and his boat.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/14.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u105rev",
                "txt": "What can I say, Ivan nailed it, perfect host, perfect boat, perfect day out, could not have wished for anymore! Anyone even thinking of renting a boat look no further, Ivan is your man, what a day 10/10, thankyou",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/15.jpg",
                    "time": 1606280724238
                }
            },
            {
                "id": "u106rev",
                "txt": "The route Ivan planned for this 1 day trip was really perfect, we visited really nice places for a day without any stress at all. One of us was seasick and Ivan took care of him in a impressive way. One the way home in to the port we all had the same feeling that we actually did not wan´t the trip to end because we felt so relaxed. Many thanks and our best recommendations to Ivan.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/16.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u107rev",
                "txt": "Our boat trip with Ivan was easily the best day of our entire trip! He was very friendly, professional, and accommodating. His boat was the perfect size for our party of six and well equipped, (outlets, fast WiFi, a retractable canopy to block the sun, fridge, a bathroom and bunks if you need them). We were all sad it had to end. Definitely recommend booking, worth every penny! Thanks !",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/17.jpg",
                    "time": 1617280724238
                }
            }
        ]
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
            "imgUrl": "https://randomuser.me/api/portraits/men/11.jpg"
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
                "id": "u102rev",
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/12.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u103ord",
                "txt": "We had an amazing stay with Walter and Adriana. They were always thoughtful and looking for ways to make our stay as amazing as possible. I would definitely repeat with stay with them, as I don’t believe there is a better value for your money in Ibiza. I would advise new guests to be very commutative with Walter and Adriana as far as what you’d expect with your trip/stay and places to go. Make sure you understand the guidances of your stay by asking from the beginning.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/13.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u104rev",
                "txt": " He brought us to a beautiful swimming spot with caves then a sandy beach. From there we sailed to Silba and had a late lunch at an amazing restaurant he recommended. The fish was caught fresh that day and served with home grown vegetables. It was a very relaxed trip and nice to just have our family onyacht. I would highly recommend Ivan and his boat.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/14.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u105rev",
                "txt": "What can I say, Ivan nailed it, perfect host, perfect boat, perfect day out, could not have wished for anymore! Anyone even thinking of renting a boat look no further, Ivan is your man, what a day 10/10, thankyou",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/13.jpg",
                    "time": 1606280724238
                }
            },
            {
                "id": "u106rev",
                "txt": "The route Ivan planned for this 1 day trip was really perfect, we visited really nice places for a day without any stress at all. One of us was seasick and Ivan took care of him in a impressive way. One the way home in to the port we all had the same feeling that we actually did not wan´t the trip to end because we felt so relaxed. Many thanks and our best recommendations to Ivan.",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/12.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u107rev",
                "txt": "Our boat trip with Ivan was easily the best day of our entire trip! He was very friendly, professional, and accommodating. His boat was the perfect size for our party of six and well equipped, (outlets, fast WiFi, a retractable canopy to block the sun, fridge, a bathroom and bunks if you need them). We were all sad it had to end. Definitely recommend booking, worth every penny! Thanks !",
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
                    "imgUrl": "https://randomuser.me/api/portraits/men/11.jpg",
                    "time": 1617280724238
                }
            }
        ]
    }
]
const gYachts = _createYachts()
export const yachtService = {
    query,
    getById,
    remove,
    save,
    getEmptyYacht,
}

function _createYachts() {
    let yachts = utilService.loadFromStorage(YACHT_KEY);
    if (!yachts || !yachts.length) {
        yachts = yachtJson;
        utilService.saveToStorage(YACHT_KEY, yachts);
    }
    return yachts;
}

function query() {
    return gYachts
}

function getById(id) {
    return storageService.get(YACHT_KEY, id)
}

function remove(id) {
    storageService.remove(YACHT_KEY, id)
    const idx = gYachts.findIndex(y => y._id === id)
    gYachts.splice(idx, 1)

    console.log(id, 'remove service');
}

function save(yacht) {
    const savedYacht = (yacht._id) ? storageService.put(YACHT_KEY, yacht) : storageService.post(YACHT_KEY, yacht)
    return savedYacht;
}

function _makeId(length = 5) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var txt = '';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function getEmptyYacht() {
    return {
        // "_id": "",
        "name": "",
        "imgUrls": [],
        "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
        "price": 1,
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