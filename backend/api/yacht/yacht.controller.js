const logger = require('../../services/logger.service')
const yachtService = require('./yacht.service')

async function getYachts(req, res) {
    try {
        const yachts = await yachtService.query(req.query)
        res.send(yachts)
    } catch (err) {
        logger.error('Cannot get yachts', err)
        res.status(500).send({ err: 'Failed to get yachts' })
    }
}

async function getYachtById(req, res) {
    try {
        // console.log(req.params);
        const yachtId = req.params.yachtId
        const yacht = await yachtService.getById(yachtId)
        res.json(yacht)
    } catch (err) {
        logger.error('Cannot get yacht by id', err)
        res.status(500).send({
            err: 'Failed to get yacht by id'
        })
    }
}

async function deleteYacht(req, res) {
    try {
        await yachtService.remove(req.params.yachtId)
        res.send({ msg: 'Deleted successfully' })
    } catch (err) {
        logger.error('Failed to delete yacht', err)
        res.status(500).send({ err: 'Failed to delete yacht' })
    }
}

async function addYacht(req, res) {
    try {
        const { name, price, imgUrls, size, amenities, _id, favorites, owner, loc, reviews, summary } = req.body
        const yacht = { name, price, imgUrls, size, amenities, _id, favorites, owner, loc, reviews, summary }
        console.log(yacht, 'controler');
        const newYacht = await yachtService.add(yacht)
        res.send(newYacht)
    } catch (err) {
        res.status(500).send({ err: 'Failed to add review' })
    }
    // try {\\זה ,נאים כשיהיה לנו מש,משים ובעלי
    //     var yacht = req.body
    //     const { _id, fullname, imgUrl } = req.session.user
    //     yacht.owner = { _id, fullname, imgUrl }
    //     yacht = await yachtService.add(yacht)
    //     console.log('CTRL SessionId:', req.sessionID);
    //     res.send(yacht)
    // } catch (err) {
    //     console.log(err)
    //     logger.error('Failed to add review', err)
    //     res.status(500).send({ err: 'Failed to add review' })
    // }
}

async function updateYacht(req, res) {
    console.log(req.body, 'controlre');
    try {
        const { name, price, imgUrls, size, amenities, _id, favorites, owner, loc, reviews, summary } = req.body
        const yacht = { name, price, imgUrls, size, amenities, _id, favorites, owner, loc, reviews, summary }
        const savedYacht = await yachtService.update(yacht)
        res.json(savedYacht)
    } catch (err) {
        res.status(500).send('cannot update yacht')
    }
}

module.exports = {
    getYachts,
    deleteYacht,
    addYacht,
    getYachtById,
    updateYacht
}