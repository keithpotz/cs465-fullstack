const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');


//PUT: /trips/:tripcode adds a new trip

const tripsUpdateTrip = async(req, res) =>{
    const q = await Model
        .findOneAndUpdate(
            {'code' : req.params.tripCode},
            {
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            }
        )
        .exec();
    if (!q){
        //database returned no data
        return res
            .status(400)
            .json({message: 'Error occurred'});
    }else{//return new trip
        return res
            .status(201)
            .json(q);
    }
};

//Post: /trips Add new Trip
const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if(!q){
        //database retuned no data
        return res
                .status(400)
                .json({message: 'Error occurred'});
    }else{//return new trip
        return res
            .status(201)
            .json(q);
    }
};

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
                .json({message: 'Error occurred'});
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
                .json({message: 'Error occurred'});
    }else {
        return res
            .status(200)
            .json(q);
    }
};
module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};
