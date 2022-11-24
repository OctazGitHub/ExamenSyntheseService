const mongoose = require("mongoose");


let clientsData = mongoose.Schema({
    _id: { type: String, required: false },
    nom: { type: String, required: true },
    adresse: { type: String, required: true },
    telephone: { type: String, required: true },
    date: { type: Date,
        required:true,
        default:Date.now() }
});

let Clients = (module.exports = mongoose.model("clients", clientsData));

module.exports.getClient = (callback, limit) => {
    Clients.find(callback).limit(limit);
};

module.exports.getOneClient = (query, callback) => {
    let filtre = {telephone: query };
    Clients.find(filtre, callback).limit(1);
};

module.exports.ajoutClient = (query, callback) => {
    query._id = new mongoose.Types.ObjectId();
    Clients.create(query, callback);
};

module.exports.deleteClient = (query, callback) => {
    let filtre = { telephone: query };
    Clients.deleteOne(filtre, callback);
};

module.exports.modifierClient = (query, newMsg, callback) => {
    let filtre = { telephone: query };
    let options = {};
    //pas de _id generer auto par mongo dans un update
    let newClient = {
        _id:newClient._id,
        nom: newClient.adresse,
        adresse: newMsg.adresse,
        telephone: newMsg.telephone,
        date: newMsg.date
    };
    Clients.findOneAndUpdate(filtre, newClient, options, callback);
};