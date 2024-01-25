const mongoose = require('mongoose');
// console.log("Connection successful");
mongoose.connect("mongodb+srv://gunjannaruka95:Gonika007@cluster0.admsuev.mongodb.net/FoodSample",{
  useNewUrlParser: true,
  useUnifiedTopology: true
}) 
.then(() => {
  console.log("Connection successful");
}).catch((error) => {
  console.log("Unable to connect:", error);
});
