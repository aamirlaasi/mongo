// Server routes
// =================
// Bring in the scrape function from our scripts directory
var scrape = require("../scripts/scrape");

// Bring in Headlines and Notes from the controller
var headlinesController = require("../controllers/headlines");
var notesController = require("../controllers/notes");

module.exports = function(router){
  // This route renders the home page
  router.get("/", function (req,res){
    res.render("home");
  });
  // This route renders the saved handlebars page
  router.get("/saved", function(req,res){
    res.render("saved");
  });
  //
  router.get("/api/fetch", function(req,res){
    headlinesController.fetch(function(err, docs){
      if(!docs || docs.insertedCount === 0) {
        res.json({
          message: "No new articles today. Check back tomorrow!"
        });
      }
      else {
        res.json({
          message: "Added " + docs.insertedCount + " new articles!"
        });
      }
    });
  });

}
