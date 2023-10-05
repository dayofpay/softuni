

const router = require('express').Router();



router.get('/details/:id',(req,res) => {
    const cubeId = req.params.id;

    res.render('details',{cubeId: cubeId});
})

module.exports = router;