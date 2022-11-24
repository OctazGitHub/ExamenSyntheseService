const express = require("express");
const router = express.Router();
const Clients = require("../modeles/clients.js");


router.get("/api/clients", (requete, reponse) => {
    //requete a mongoDB pour les clients
    Clients.getClient((err, client) => {
      if (err) throw err;
      reponse.json(client);
    }, 25);
  });

  router.get("/api/clients/:telephone", (requete, reponse) => {
    Clients.getOneClient(requete.params.telephone,(err, client) => {
    if (err) throw err;
    reponse.json(client);
   });
  });

  router.post("/api/clients", (requete, reponse) => {
    let client = requete.body;
    Clients.ajoutClient(client, (err, client) => {
      if (err) throw err;
      reponse.json(client);
    });
  });

  router.put("/api/clients/:telephone", (requete, reponse) => {
    let newClient = requete.body;
    Clients.modifierClient(requete.params.telephone, newClient, options, (err, client) => {
      if (err) throw err;
      reponse.json(client);
    });
  });

  router.delete("/api/clients/:telephone", (requete, reponse) => {
    Clients.deleteClient( requete.params.telephone, (err, telephone) => {
      if (err) throw err;
      reponse.json(telephone);
    });
  });

module.exports = router;