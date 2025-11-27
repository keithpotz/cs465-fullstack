const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

//GET: Trips 
// regardless of outcome, response must include HTML statuse and JSON message
const tripsList = async(req, res) => {
    const q = await Model
        .find({})
        .exec();

        console.log(q);

    if (!q){
        //Database returns no data
        return res
                .status(404)
                .json(err);
    }else {
        return res
            .status(200)
            .json(q);
    }
};

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .findOne({'code' : req.params.tripCode})
        .exec();

        console.log(q);

    if (!q){
        //Database returns no data
        return res
                .status(404)
                .json(err);
    }else {
        return res
            .status(200)
            .json(q);
    }
};
module.exports = {
    tripsList,
    tripsFindByCode
};
