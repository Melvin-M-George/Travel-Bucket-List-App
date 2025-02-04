const express = require("express");
const router = express.Router();
const destinationController = require("../controllers/destinationController");


router.get("/",destinationController.getAllDestinations);
router.post("/add",destinationController.addDestination);
router.post("/toggle/:id",destinationController.toggleVisited);
router.post("/delete/:id",destinationController.deleteDestination);


module.exports = router;