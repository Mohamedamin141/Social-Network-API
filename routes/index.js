const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use((req, res) => {
  res.status(404).send('Oops! The requested route cannot be found.');
});

module.exports = router;