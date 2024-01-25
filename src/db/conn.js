const mongoose = require('mongoose');
// console.log("Connection successful");
mongoose.connect("Enter your mongodb connection string",{
  useNewUrlParser: true,
  useUnifiedTopology: true
}) 
.then(() => {
  console.log("Connection successful");
}).catch((error) => {
  console.log("Unable to connect:", error);
});
