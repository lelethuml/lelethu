module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    
    //Creates routes for communication between backend and front
    var router = require("express").Router();
  
    // Create a new Tutorial
//     router --- create route
//      post --- the type of route it is (post sends data)
//     "/" -- how you reach the route
//     tutorials.create -- the function that would run when this route is called
    router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);
  
    app.use('/api/tutorials', router);
  };
