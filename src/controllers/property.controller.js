
const propertyModel = require('../models/property.model');

// get all property list
exports.getpropertyList = (req, res)=> {
    //console.log('here all property list');
    propertyModel.getAllproperty((err, property) =>{
        console.log('We are here');
        if(err)
        res.send(err);
        console.log('property', property);
        res.send(property)
    })
}

// get property by ID
exports.getpropertyByID = (req, res)=>{
    //console.log('get emp by id');
    propertyModel.getpropertyByID(req.params.id, (err, property)=>{
        if(err)
        res.send(err);
        console.log('single property data',property);
        res.send(property);
    })
}

// create new property
exports.createNewproperty = (req, res) =>{
    const propertyReqData = new propertyModel(req.body);
    console.log('propertyReqData', propertyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        propertyModel.createproperty(propertyReqData, (err, property)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'property Created Successfully', data: property.insertId})
        })
    }
}

// update property
exports.updateproperty = (req, res)=>{
    const propertyReqData = new propertyModel(req.body);
    console.log('propertyReqData update', propertyReqData);
    // check null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'Please fill all fields'});
    }else{
        propertyModel.updateproperty(req.params.id, propertyReqData, (err, property)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'property updated Successfully'})
        })
    }
}

// delete property
exports.deleteproperty = (req, res)=>{
    propertyModel.deleteproperty(req.params.id, (err, property)=>{
        if(err)
        res.send(err);
        res.json({success:true, message: 'property deleted successully!'});
    })
}