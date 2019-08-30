/* eslint-disable no-alert, no-console */
const { Router } = require('express')

const router = Router() 
 
// Mock Users
const users = [
  { name: 'Crm' },
  { name: 'Kiva' },
  { name: 'Sébastien' }
]

/* GET users listing. */
router.get('/users', function (req, res, next) {
  res.json(users) 
});

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id].name)
  } else {
    res.sendStatus(404)
  }
})


module.exports = router
/* eslint-disable no-alert, no-console */