const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getYachts, deleteYacht, addYacht, getYachtById, updateYacht } = require('./yacht.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

router.get('/', getYachts)
router.get('/:yachtId', log, getYachtById)
router.post('/', log, addYacht)
router.delete('/:yachtId', deleteYacht)
router.put('/:yachtId', log, requireAuth, updateYacht)

module.exports = router