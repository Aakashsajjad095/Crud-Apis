var dbConn  = require('../../config/db.config');

var property = function(property){
    this.title     =   property.title;
    this.description      =   property.description;
    this.price          =   property.price;
    this.image          =   property.image;
    
}

// get all property
property.getAllproperty = (result) =>{
    dbConn.query('SELECT * FROM property', (err, res)=>{
        if(err){
            console.log('Error while fetching employess', err);
            result(null,err);
        }else{
            console.log('property fetched successfully');
            result(null,res);
        }
    })
}

// get property by ID from DB
property.getpropertyByID = (id, result)=>{
    dbConn.query('SELECT * FROM property WHERE id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching property by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new property
property.createproperty = (propertyReqData, result) =>{
    dbConn.query('INSERT INTO property SET ? ', propertyReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('property created successfully');
            result(null, res)
        }
    })
}

// update property
property.updateproperty = (id, propertyReqData, result)=>{
    dbConn.query("UPDATE property SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [propertyReqData.first_name,propertyReqData.last_name,propertyReqData.email,propertyReqData.phone,propertyReqData.organization,propertyReqData.designation,propertyReqData.salary, id], (err, res)=>{
        if(err){
            console.log('Error while updating the property');
            result(null, err);
        }else{
            console.log("property updated successfully");
            result(null, res);
        }
    });
}

// delete property
property.deleteproperty = (id, result)=>{
    // dbConn.query('DELETE FROM property WHERE id=?', [id], (err, res)=>{
    //     if(err){
    //         console.log('Error while deleting the property');
    //         result(null, err);
    //     }else{
    //         result(null, res);
    //     }
    // })
    dbConn.query("UPDATE property SET is_deleted=? WHERE id = ?", [1, id], (err, res)=>{
        if(err){
            console.log('Error while deleting the property');
            result(null, err);
        }else{
            console.log("property deleted successfully");
            result(null, res);
        }
    });
}

module.exports = property;