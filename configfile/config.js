const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://goquizzytechnology_db_user:sunil%401007@goquizzy.udda5h7.mongodb.net/goquizzy?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

PORT=5000