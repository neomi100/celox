
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
        summary: "good yacht",
        price: 1,
        size: "",
        favorites: [],
        amenities: [],
        owner: {
            _id: this.owner._id,
            fullname: this.owner.fullname,
            imgUrl: this.owner.imgUrl,
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