const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')
const logger = require('../../services/logger.service')


async function query(filterBy = {}) {
    // const criteria = _buildCriteria(filterBy)
    try {
        const collection = await dbService.getCollection('yacht')
        const yachts = await collection.find().toArray()
        return yachts
            // var yachts = await collection.aggregate([
            //     {
            //         $match: filterBy
            //     },
            //     {
            //         $lookup:
            //         {
            //             localField: 'byUserId',
            //             from: 'user',
            //             foreignField: '_id',
            //             as: 'byUser'
            //         }
            //     },
            //     {
            //         $unwind: '$byUser'
            //     },
            //     {
            //         $lookup:
            //         {
            //             localField: 'aboutUserId',
            //             from: 'user',
            //             foreignField: '_id',
            //             as: 'aboutUser'
            //         }
            //     },
            //     {
            //         $unwind: '$aboutUser'
            //     }
            // ]).toArray()

    } catch (err) {
        logger.error('cannot find yachts', err)
        throw err
    }

}

async function remove(yachtId) {
    try {
        const collection = await dbService.getCollection('yacht')
        await collection.deleteOne({ _id: ObjectId(yachtId) })
    } catch (err) {
        logger.error(`cannot remove yacht ${yachtId}`, err)
        throw err
    }

    // try { \\זה ,נאים כשיהיה לנו מש,משים ובעלים
    //     const store = asyncLocalStorage.getStore()
    //     const {
    //         userId
    //     } = store
    //     const collection = await dbService.getCollection('yacht')
    //         // remove only if user is owner/admin
    //     const query = {
    //         _id: ObjectId(yachtId)
    //     }
    //     const yacht = await collection.findOne({
    //         "_id": ObjectId(yachtId)
    //     })
    //     if (yacht.owner._id !== userId) res.status(401).send({
    //         err: 'Failed to Delete'
    //     })
    //     await collection.deleteOne(query)
    //         // return await collection.deleteOne({ _id: ObjectId(reviewId), byUserId: ObjectId(userId) })
    // } catch (err) {
    //     logger.error(`cannot remove yacht ${yachtId}`, err)
    //     throw err
    // }
}

async function add(yacht) {
    try {
        const collection = await dbService.getCollection('yacht') //bring the collection
        await collection.insertOne(yacht)
        return yacht
    } catch (err) {
        logger.error('cannot insert toy', err)
        throw err
    }

}

async function update(yacht) {
    // console.log(yacht);
    try {
        // peek only updatable fields!
        const yachtToAdd = {
            name: yacht.name,
            price: yacht.price,
            size: yacht.size,
            imgUrls: yacht.imgUrls,
            favorites: yacht.favorites,
            reviews: yacht.reviews,
            amenities: yacht.amenities,
            owner: yacht.owner,
            loc: yacht.loc,
            summary: yacht.summary
        }
        const collection = await dbService.getCollection('yacht')
        await collection.updateOne({ "_id": ObjectId(yacht._id) }, {
            $set: yachtToAdd
        })
        return yacht;
    } catch (err) {
        logger.error('cannot update yacht', err)
        throw err
    }
}

async function getById(id) {
    try {
        const collection = await dbService.getCollection('yacht') //bring the collection
        const yacht = await collection.findOne({
            "_id": ObjectId(id)
        })
        return yacht
    } catch (err) {
        logger.error('cannot find yacht by id', err)
        throw err
    }
}


function _buildCriteria(filterBy) {
    const criteria = {}
    if (filterBy.location && filterBy.location !== 'undefined') {
        const txtCriteria = {
            $regex: filterBy.location,
            $options: 'i'
        }
        criteria['loc.address'] = txtCriteria
    }
    if (filterBy.guests !== '0') {
        criteria.size = {
            $gte: parseInt(filterBy.guests)
        }
    }
    if (filterBy.price !== '0') {
        criteria.price = {
            $lte: parseInt(filterBy.price)
        }
    }
    if (filterBy.amenities !== 'null' && filterBy.amenities !== 'undefined') {
        const amenitiesArray = filterBy.amenities.split(',')
        criteria.amenities = {
            $all: amenitiesArray
        }
    }
    if (filterBy._id !== 'null') {
        criteria['owner._id'] = filterBy._id
    }
    return criteria
}

module.exports = {
    query,
    remove,
    add,
    update,
    getById
}