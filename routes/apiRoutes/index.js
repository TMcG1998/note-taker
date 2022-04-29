const router = require('express').Router();
const notesRoutes = require('../apiRoutes/animalRoutes');

router.use(notesRoutes);

module.exports = router;