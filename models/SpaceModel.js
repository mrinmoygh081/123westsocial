import mongoose from "mongoose";

const spaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a valid space name"],
  },
  description: {
    type: String,
    required: [true, "Please enter a valid space description"],
  },
  location: {
    type: String,
    required: [true, "Please enter a valid space location"],
  },
});

const Space = mongoose.models.Space || mongoose.model("Space", spaceSchema);

export default Space;
