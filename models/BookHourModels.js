const mongoose = require("mongoose");

const bookHourSchema = new mongoose.Schema({
  date: {
    type: String,
    required: [true, "Please provide a valid date"],
  },
  name: {
    type: String,
    required: [true, "Please provide a valid name"],
  },
  phone: {
    type: String,
    required: [true, "Please provide a valid phone"],
  },
  email: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Please provide a valid address"],
  },
  numOfGuests: {
    type: String,
    required: [true, "Please provide a valid number of Guests"],
  },
  hours: {
    type: String,
    required: [true, "Please provide a valid hours"],
  },
  price: {
    type: String,
    required: [true, "Please provide a valid price"],
  },
});

const bookHourModel =
  mongoose.models.bookHours || mongoose.model("bookHours", bookHourSchema);
export default bookHourModel;
