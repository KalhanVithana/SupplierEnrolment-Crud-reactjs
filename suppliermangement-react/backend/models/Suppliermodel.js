let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const Supplier = new Schema({

    name: {
        type: String
      },
    lastname:{
        type: String
      },
      email: {
        type: String
      },
      NIC: {
        type: String
      },
      address: {
        type: String
      },
      mobile: {
        type: String
      },
      gender:{
          type:String
      }
  
    
     
    }, {
        collection: 'supplier'
      
})

module.exports= mongoose.model('supplier',Supplier)