const Destination = require("../models/destination");

const getAllDestinations = async (req,res) => {
    try {
        const destinations = await Destination.find();
        res.render("index",{destinations});
    } catch (error) {
        console.error("Error fetching destinations:", error);
        res.status(500).send("An error occurred while fetching destinations.");
    }
}



const addDestination = async (req,res) => {
    try {
        const {name,description} = req.body;
        await Destination.create({name,description});
        res.redirect("/");
    } catch (error) {
        console.log("Error adding destinations:",error);
        res.status(500).send("An error occurred while adding destinations.");
    }
}


const toggleVisited = async (req,res) => {
    try {
        const {id} = req.params;
        const destination = await Destination.findById(id);
        destination.visited = !destination.visited;
        await destination.save();
        res.redirect("/");
    } catch (error) {
        console.log("Error toggling vistied:",error);
        res.status(500).send("An error occurred while adding destinations.")   
    }
}

const deleteDestination = async (req,res) => {
    try {
        const {id} = req.params;
        await Destination.findByIdAndDelete(id);
        res.redirect("/");
    } catch (error) {
        console.log("Error deleting destination",error);
        res.status(500).send("An error occurred while deleting destinations.")
    }
}



module.exports = {
    getAllDestinations,
    addDestination,
    toggleVisited,
    deleteDestination,



}