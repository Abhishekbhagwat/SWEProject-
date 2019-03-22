const router = require('express').Router();

module.exports = (url, Dish, Location, Order, Store, User) => {
  //get specific order information
  router.get('/order/:id',(req,res,next)=>{
    let id = req.params.id;
    Order.findById(id,function(err,order){
      if(err){
        console.log(err);
      }else{
        res.json(order);
      }
    });
  });

  //get a list of stores
  router.get('/stores',(req,res,next)=>{
    Store.find(function(err,stores){
      if(err){
        console.log(err);
      }else{
        res.json(stores)
      }
    });
  });

  //get specific store information
  router.get('/store/:id',(req,res,next)=>{
    Store.findById(req.params.id,function(err,store){
      if(err){
        console.log(err);
      }else{
        res.json(store)
      }
    });
  });

  //add an order
  router.post('/addorder',(req,res,next)=>{
    let order = new Order(req.body);
    order.save()
    .then(() => res.json({success: true}))
    .catch(() => res.json({success: false}));
  })

  //storeowner to add a dish
  router.post('/adddish',(req,res)=>{
    let dish = new Dish(req.body);
    dish.save()
    .then(()=>res.json({sucess:true}))
    .catch(()=>res.json({sucess:false}));
  })
  
  return router;
}
