
 express =require('express');
 router = express.Router();

let supplierSchema = require('../models/Suppliermodel');


router.route('/register').post(async(req, res) => {
   await supplierSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});


router.route('/').get(async(req,res)=>{

 await  supplierSchema.find((err,data)=>{


    if(err) res.json(err);
    else res.json(data)
  });

 

});

router.route('/edit-supplier/:id').get((req,res)=>{

     supplierSchema.findById(req.params.id,(err,data)=>{


        if(err) res.json(err);
        else res.json(data)
    })
})


router.route('/edit/:id').put(async(req,res)=>{

    await supplierSchema.findByIdAndUpdate(req.params.id,{$set:req.body},(err,data)=>{

        if(err) console.log(err);
        else res.json(data)
    })

   

})

router.route('/delete/:id').delete(async(req,res)=>{

    await supplierSchema.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err) console.log(err);

        else res.json(data)
    })

})

module.exports = router;