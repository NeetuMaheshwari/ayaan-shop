const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect("mongodb+srv://ayaan:1234@cluster0.puh3l.mongodb.net/ec?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;
