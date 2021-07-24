// import { storageService } from './async-storage.service.js'
// import { utilService } from './util.service.js'
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
        "price": 450,
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
            "address": "Edificio Marina",
            "lat": 37.70636808825379,
            "lng": -8.03950898054221
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
        "price": 300,
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
            "lat": 35.749289460416286,
            "lng": -5.342531924716142
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
            "https://images.pexels.com/photos/163236/luxury-yacht-boat-speed-water-163236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://image.zizoo.com/boat/1000x750/jpeg/0006/14/53ff91fc8c5f5a6afbb3b8c6adbf3a19b0b80256.png",
            "https://image.zizoo.com/boat/1000x750/jpeg/0006/14/e88ae4f2e9e2889966eaeb2be38f2acefd7e5984.png",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/19e19419d5dfc0b3b5b7df186815f736c5e992df.png",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/14/08f0fc5ea5c88bf926347940ee4ddab55c7e8658.png"
        ],
        "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
        "price": 400,
        "size": "small",
        "amenities": [
            "TV",
            "Wifi"
        ],
        "owner": {
            "_id": "51394987",
            "fullname": "Shos Gon",
            "imgUrl": "https://randomuser.me/api/portraits/men/3.jpg"
        },
        "loc": {
            "country": "israel",
            "city": "Acre",
            "countryCode": "IL",
            "address": "Port, Leopold II",
            "lat": 32.91939945514621,
            "lng": 35.06923016795421
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
            "https://images.pexels.com/photos/144634/pexels-photo-144634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/22/e6a989bdd9106c64c037071cf2dfd842dc061570.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/22/33451e68d96dc8e22437f6bc36f31f99d75523cb.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/22/504263e7361c0a440188d434b21321ac0afeda31.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/22/769f1b86e947c1a454e7f1ab83cb3c3ad21ff082.jpeg"
        ],
        "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
        "price": 250,
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
            "countryCode": "GU",
            "address": "Marina Riviere Sen",
            "lat": 15.983592187404685,
            "lng": -61.716244116516414
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
        "price": 700,
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
            "address": " Port De Deshaies",
            "lat": 16.31922542475504,
            "lng": -61.79430403105566
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
        "price": 800,
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
        "price": 900,
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
    },
    {
        "_id": "100087242",
        "name": "ADILA",
        "imgUrls": [
            "https://image.zizoo.com/boat/512x384/jpeg/0005/60/b6d85a0701fc81d6a4a16f742c4e542dbac9f481.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0005/60/59523a82379f6a690d1aa3fe48f819ea4ab88664.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0005/60/ac7e5015dc25be7a4ee304aa51310413cc938b91.jpeg",
            
        ],
        "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
        "price": 70,
        "size": "small",
        "amenities": [
            "TV",
            "Wifi"
        ],
        "owner": {
            "_id": "51393166",
            "fullname": "mourad lahlou",
            "imgUrl": "https://randomuser.me/api/portraits/men/11.jpg"
        },
        "loc": {
            "country": "Morocco",
            "city": "Saidia",
            "countryCode": "MA",
            "address": "Marina Saidia",
            "lat": 35.42664806022623, 
            "lng": -2.30984551773308
        },
        "reviews": [{
                "id": "u102rev",
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
                "rate": 4,
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
                    "fullname": "Jamie Lock",
                    "imgUrl": "https://randomuser.me/api/portraits/men/13.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u103ord",
                "txt": "We had great experience , with Hassan, 10/10 would recommand for anyone.",
                "rate": 5,
                "category": {
                    "Cleanliness": 4,
                    "Accuracy": 5,
                    "Communication": 5,
                    "Location": 4,
                    "Check-in": 4,
                    "Accessibility": 5
                },
                "by": {
                    "_id": "u102",
                    "fullname": "Joey Smith",
                    "imgUrl": "https://randomuser.me/api/portraits/men/13.jpg",
                    "time": 1616280724238
                }
            }]
        },
    {
        "_id": "150087201",
        "name": "YASSMIN",
        "imgUrls": [
            "https://image.zizoo.com/boat/512x384/jpeg/0006/88/5047258796e41ec2fd79ea1484234a4f71951b74.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/88/5345dfe1a4f02ae453954d2f12d7dacbf75b1176.jpeg",
            "https://image.zizoo.com/boat/512x384/jpeg/0006/88/e32f5629c4178ca58bd2530be550cc28e551d044.jpeg"
            
        ],
        "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
        "price": 450,
        "size": "small",
        "amenities": [
            "TV",
            "Wifi"
        ],
        "owner": {
            "_id": "51393166",
            "fullname": "Hassan Al-Jundi",
            "imgUrl": "https://randomuser.me/api/portraits/men/15.jpg"
        },
        "loc": {
            "country": "Morocco",
            "city": "Saidia",
            "countryCode": "MA",
            "address": "Marina Saidia",
            "lat": 35.42664806022623, 
            "lng": -2.30984551773308
        },
        "reviews": [{
                "id": "u102rev",
                "txt": "Great day, very nice boat and friendly and able captain and deckhand!",
                "rate": 5,
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
                    "fullname": "Connor Mayer",
                    "imgUrl": "https://randomuser.me/api/portraits/men/17.jpg",
                    "time": 1616280724238
                }
            },
            {
                "id": "u103ord",
                "txt": "greate host, toilet was abit untidy.greate price",
                "rate": 4,
                "category": {
                    "Cleanliness": 3,
                    "Accuracy": 5,
                    "Communication": 3,
                    "Location": 3,
                    "Check-in": 4,
                    "Accessibility": 5
                },
                "by": {
                    "_id": "u102",
                    "fullname": "Dan Jefferson",
                    "imgUrl": "https://randomuser.me/api/portraits/men/16.jpg",
                    "time": 1616280724238
                }
            }]
        },
        {
            "_id": "139087661",
            "name": "PEARL",
            "imgUrls": [
                "https://static1.clickandboat.com/v1/p/wbt68r1i8qi9xwy8xtt5sdy8ye4elirg.big.jpg",
                "https://static1.clickandboat.com/v1/p/rjgpfdr4aw7rr6hyn989f6u7hiipawpx.big.jpg",
                "https://static1.clickandboat.com/v1/p/ypr263pww2wakpc89ubuuhv71e0mlb7m.big.jpg"
                
            ],
            "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
            "price": 700,
            "size": "large",
            "amenities": [
                "TV",
                "Wifi",
                "Kitchen"

            ],
            "owner": {
                "_id": "517778550",
                "fullname": "Malic-Yass",
                "imgUrl": "https://randomuser.me/api/portraits/men/24.jpg"
            },
            "loc": {
                "country": "Morocco",
                "city": "Tanja",
                "countryCode": "MA",
                "address": "Marina Tanja",
                "lat": 335.782785784032335, 
                "lng": -5.841891806404022
            },
            "reviews": [{
                    "id": "u102rev",
                    "txt": "Very neat and clean",
                    "rate": 3.5,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 4,
                        "Communication": 1,
                        "Location": 5,
                        "Check-in": 2,
                        "Accessibility": 4
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Kane Brown",
                        "imgUrl": "https://randomuser.me/api/portraits/men/25.jpg",
                        "time": 1616280724238
                    }
                },
                {
                    "id": "u103ord",
                    "txt": "A bit on the pricy side, great overall.",
                    "rate": 4,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 5,
                        "Communication": 3,
                        "Location": 3,
                        "Check-in": 4,
                        "Accessibility": 5
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Berry Whild",
                        "imgUrl": "https://randomuser.me/api/portraits/men/23.jpg",
                        "time": 1616280724238
                    }
                }
            ]
        },
        {
            "_id": "139087211",
            "name": "LADY-BOA",
            "imgUrls": [
                "https://image.zizoo.com/boat/512x384/jpeg/0004/18/a42bdd0710eba28dc4887c7d09da451fb880da4d.jpeg",
                "https://image.zizoo.com/boat/512x384/jpeg/0004/18/f918e502c4fe8886813dc0f8abf862a998a13fae.jpeg",
                "https://image.zizoo.com/boat/512x384/jpeg/0004/18/dcac401c0a16535cb4b471e228a491ddf9b5c519.jpeg",
                
            ],
            "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
            "price": 600,
            "size": "large",
            "amenities": [
                "TV",
                "Wifi",
                "Kitchen"

            ],
            "owner": {
                "_id": "51395550",
                "fullname": "Ali-Gerard",
                "imgUrl": "https://randomuser.me/api/portraits/men/21.jpg"
            },
            "loc": {
                "country": "Morocco",
                "city": "Tanja",
                "countryCode": "MA",
                "address": "Marina Tanja",
                "lat": 335.782785784032335, 
                "lng": -5.841891806404022
            },
            "reviews": [{
                    "id": "u102rev",
                    "txt": "Very neat and clean",
                    "rate": 3.5,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 4,
                        "Communication": 1,
                        "Location": 5,
                        "Check-in": 2,
                        "Accessibility": 4
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Mark Maine",
                        "imgUrl": "https://randomuser.me/api/portraits/men/22.jpg",
                        "time": 1616280724238
                    }
                },
                {
                    "id": "u103ord",
                    "txt": "A bit on the pricy side, great overall.",
                    "rate": 4,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 5,
                        "Communication": 3,
                        "Location": 3,
                        "Check-in": 4,
                        "Accessibility": 5
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Samir Khalif",
                        "imgUrl": "https://randomuser.me/api/portraits/men/23.jpg",
                        "time": 1616280724238
                    }
                }
                                        
            ]
        },
        {
            "_id": "138889991",
            "name": "MAYA",
            "imgUrls": [
                "https://static1.clickandboat.com/v1/p/j8NH7c35p9jMICkhcqZLsLSZxDUI9YVc.big.jpg",
                "https://static1.clickandboat.com/v1/p/YNcqQH9na8Pd9ekjMRA6vCdNiWUmt80P.big.jpg",
                "https://static1.clickandboat.com/v1/p/kS3zikugiLhUDymSl3VwXnolWsPoZeMa.big.jpg",
                
            ],
            "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
            "price": 300,
            "size": "medium",
            "amenities": [
                "TV",
                "Wifi",
                "Kitchen"

            ],
            "owner": {
                "_id": "51395550",
                "fullname": "Ali-Gerard",
                "imgUrl": "https://randomuser.me/api/portraits/men/21.jpg"
            },
            "loc": {
                "country": "Morocco",
                "city": "Tanja",
                "countryCode": "MA",
                "address": "Marina Tanja",
                "lat": 335.782785784032335, 
                "lng": -5.841891806404022
            },
            "reviews": [{
                    "id": "u102rev",
                    "txt": "Very neat and clean",
                    "rate": 3.5,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 4,
                        "Communication": 1,
                        "Location": 5,
                        "Check-in": 2,
                        "Accessibility": 4
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Joe Carol",
                        "imgUrl": "https://randomuser.me/api/portraits/men/25.jpg",
                        "time": 1616280724238
                    }
                },
                {
                    "id": "u103ord",
                    "txt": "A bit on the pricy side, great overall.",
                    "rate": 4,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 5,
                        "Communication": 3,
                        "Location": 3,
                        "Check-in": 4,
                        "Accessibility": 5
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Terry Fold",
                        "imgUrl": "https://randomuser.me/api/portraits/men/26.jpg",
                        "time": 1616280724238
                    }
                }
                                        
            ]
        },
        {
            "_id": "139089991",
            "name": "AKRAM",
            "imgUrls": [
                "https://static1.clickandboat.com/v1/p/64i6zn56b23a9l5ocekz4qpahvrnvh2b.big.jpg",
                "https://static1.clickandboat.com/v1/p/8kytl38yx6nqliixt3kebosik7c4b689.big.jpg",
                "https://static1.clickandboat.com/v1/p/iq64adglugkh5k3rosfu63wu1v118c0x.big.jpg",
                
            ],
            "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
            "price": 1200,
            "size": "large",
            "amenities": [
                "TV",
                "Wifi",
                "Kitchen"

            ],
            "owner": {
                "_id": "51395550",
                "fullname": "Salim-Choen",
                "imgUrl": "https://randomuser.me/api/portraits/men/27.jpg"
            },
            "loc": {
                "country": "Morocco",
                "city": "Tanja",
                "countryCode": "MA",
                "address": "Marina Tanja",
                "lat": 335.782785784032335, 
                "lng": -5.841891806404022
            },
            "reviews": [{
                    "id": "u102rev",
                    "txt": "Very neat and clean",
                    "rate": 3.5,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 4,
                        "Communication": 1,
                        "Location": 5,
                        "Check-in": 2,
                        "Accessibility": 4
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Arik Zodovsky",
                        "imgUrl": "https://randomuser.me/api/portraits/men/28.jpg",
                        "time": 1616280724238
                    }
                },
                {
                    "id": "u103ord",
                    "txt": "A bit on the pricy side, great overall.",
                    "rate": 4,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 5,
                        "Communication": 3,
                        "Location": 3,
                        "Check-in": 4,
                        "Accessibility": 5
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Mike Miller ",
                        "imgUrl": "https://randomuser.me/api/portraits/men/29.jpg",
                        "time": 1616280724238
                    }
                }
                                        
            ]
        },
        {
            "_id": "1390838381",
            "name": "NEO-MI",
            "imgUrls": [
                "https://static1.clickandboat.com/v1/p/XJjjmsjvbbcQcoL1xnS7flKt9yZcRdAT.big.jpg",
                "https://static1.clickandboat.com/v1/p/9heyGLnziksuwULeWu3uMLkvk1T901Y7.big.jpg",
                "https://static1.clickandboat.com/v1/p/Wv93Qzm9ccKe5pDcDH6QCRp5HA1Qj6i6.big.jpg",
                
            ],
            "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
            "price": 900,
            "size": "large",
            "amenities": [
                "TV",
                "Wifi",
                "Kitchen"

            ],
            "owner": {
                "_id": "51394440",
                "fullname": "Bantu-Masa",
                "imgUrl": "https://randomuser.me/api/portraits/men/30.jpg"
            },
            "loc": {
                "country": "Morocco",
                "city": "Tanja",
                "countryCode": "MA",
                "address": "Marina Tanja",
                "lat": 335.782785784032335, 
                "lng": -5.841891806404022
            },
            "reviews": [{
                    "id": "u102rev",
                    "txt": "Very neat and clean",
                    "rate": 3.5,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 4,
                        "Communication": 1,
                        "Location": 5,
                        "Check-in": 2,
                        "Accessibility": 4
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Haim-Haim",
                        "imgUrl": "https://randomuser.me/api/portraits/men/31.jpg",
                        "time": 1616280724238
                    }
                },
                {
                    "id": "u103ord",
                    "txt": "A bit on the pricy side, great overall.",
                    "rate": 4,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 5,
                        "Communication": 3,
                        "Location": 3,
                        "Check-in": 4,
                        "Accessibility": 5
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Bellomore-Brick",
                        "imgUrl": "https://randomuser.me/api/portraits/men/32.jpg",
                        "time": 1616280724238
                    }
                }
                                        
            ]
        },
        {
            "_id": "19858381",
            "name": "Birdie",
            "imgUrls": [
                "https://static1.clickandboat.com/v1/p/0g9iqmrbdtwmve1l7fg1mmaqi65aes8k.big.jpg",
                "https://static1.clickandboat.com/v1/p/mb1ecfv74boghy51artopbrr4v1yrvav.big.jpg",
                "https://static1.clickandboat.com/v1/p/80vn1wnqldqewe8r4dka5hx867k00h9x.big.jpg",
                
            ],
            "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
            "price": 900,
            "size": "large",
            "amenities": [
                "TV",
                "Wifi",
                "Kitchen"

            ],
            "owner": {
                "_id": "51849440",
                "fullname": "Allen-Gisberg",
                "imgUrl": "https://randomuser.me/api/portraits/men/33.jpg"
            },
            "loc": {
                "country": "Morocco",
                "city": "Tanja",
                "countryCode": "MA",
                "address": "Marina Tanja",
                "lat": 335.782785784032335, 
                "lng": -5.841891806404022
            },
            "reviews": [{
                    "id": "u102rev",
                    "txt": "Very neat and clean",
                    "rate": 3.5,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 4,
                        "Communication": 1,
                        "Location": 5,
                        "Check-in": 2,
                        "Accessibility": 4
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Donatello-Reggie",
                        "imgUrl": "https://randomuser.me/api/portraits/men/34.jpg",
                        "time": 1616280724238
                    }
                },
                {
                    "id": "u103ord",
                    "txt": "A bit on the pricy side, great overall.",
                    "rate": 4,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 5,
                        "Communication": 3,
                        "Location": 3,
                        "Check-in": 4,
                        "Accessibility": 5
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Sally-Clock",
                        "imgUrl": "https://randomuser.me/api/portraits/men/35.jpg",
                        "time": 1616280724238
                    }
                }
                                        
            ]
        },

        {
            "_id": "3458381",
            "name": "Ace",
            "imgUrls": [
                "https://static1.clickandboat.com/v1/p/5w35clht1f80902rel9o5l2ofe3u7ykz.big.jpg",
                "https://static1.clickandboat.com/v1/p/zvss3r1gxaza5u28y8q81t65mn1o5ova.big.jpg",
                "https://static1.clickandboat.com/v1/p/ctbguvfkw6f39vwo33vbbjjv4k4tno4b.big.jpg",
                
            ],
            "summary": "With an impressive network of experienced brokers across the globe, Camper.....",
            "price": 600,
            "size": "small",
            "amenities": [
                "TV",
                "Wifi",
                "Kitchen"

            ],
            "owner": {
                "_id": "517694740",
                "fullname": "Roger-Gold",
                "imgUrl": "https://randomuser.me/api/portraits/men/37.jpg"
            },
            "loc": {
                "country": "Morocco",
                "city": "Tanja",
                "countryCode": "MA",
                "address": "Marina Tanja",
                "lat": 335.782785784032335, 
                "lng": -5.841891806404022
            },
            "reviews": [{
                    "id": "u102rev",
                    "txt": "Very neat and clean",
                    "rate": 3.5,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 4,
                        "Communication": 1,
                        "Location": 5,
                        "Check-in": 2,
                        "Accessibility": 4
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Garry-Ballsberg",
                        "imgUrl": "https://randomuser.me/api/portraits/men/38.jpg",
                        "time": 1616280724238
                    }
                },
                {
                    "id": "u103ord",
                    "txt": "A bit on the pricy side, great overall.",
                    "rate": 4,
                    "category": {
                        "Cleanliness": 3,
                        "Accuracy": 5,
                        "Communication": 3,
                        "Location": 3,
                        "Check-in": 4,
                        "Accessibility": 5
                    },
                    "by": {
                        "_id": "u102",
                        "fullname": "Mooki Puki",
                        "imgUrl": "https://randomuser.me/api/portraits/men/39.jpg",
                        "time": 1616280724238
                    }
                }
                                        
            ]
        }
        
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'

export const yachtService = {
    query,
    getById,
    remove,
    save,
    getEmptyYacht,
    getReviewTemplate
}




function query() {
    // var queryStr = (!filterBy) ? '' : `?location=${filterBy.location || ''}&guests=${filterBy.guests || 0}&price=${filterBy.price || 0}&amenities=${filterBy.amenities}&_id=${filterBy._id || null}`
    return httpService.get(`yacht`)
}


async function getById(id) {
    const yacht = await httpService.get(`yacht/${id}`)
    return yacht;
}


async function remove(id) {
    return httpService.delete(`yacht/${id}`, id)
}


async function save(yacht) {
    if (yacht._id) {
        return httpService.put(`yacht/${yacht._id}`, yacht)
    } else {
        return httpService.post(`yacht`, yacht)
    }
}



function getReviewTemplate() {
    return {
        id: utilService.makeId(),
        txt: '',
        rate: null,
        category: {
            Cleanliness: null,
            Accuracy: null,
            Communication: null,
            Location: null,
            CheckIn: null,
            Accessibility: null
        },
        by: {
            _id: '',
            fullname: '',
            imgUrl: '',
            time: Date.now()
        },
    }
}


function getEmptyYacht() {
    return {
        name: "",
        imgUrls: [],
        summary: "With an impressive network of experienced brokers across the globe, Camper.....",
        price: 1,
        size: "",
        favorites: [],
        amenities: [],
        owner: {
            // _id: this.owner._id,
            // fullname: this.owner.fullname,
            // imgUrl: this.owner.imgUrl,
        },
        loc: {
            country: "",
            city: "",
            countryCode: "",
            address: "",
            lat: 0,
            lng: 0
        },
        reviews: [{

            id: utilService.makeId(),
            txt: '',
            rate: 1,
            category: {
                Cleanliness: 1,
                Accuracy: 1,
                Communication: 1,
                Location: 1,
                CheckIn: 1,
                Accessibility: 1
            },
            by: {
                _id: '',
                fullname: '',
                imgUrl: '',
                time: Date.now()
            }
        }]
    }
}