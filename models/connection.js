var mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://admin:admin333@cluster0.sqvfg.mongodb.net/ticettac?retryWrites=true&w=majority",
    {
        connectTimeoutMS: 5000,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    function (err) {
        if (err) {
            console.log("Erreur connexion 🥺🥺", err);
            return;
        }
        console.log("Connexion réussie 🥳🥳");
    }
);

module.exports = mongoose;