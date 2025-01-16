import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema({
  originalLink: String,
  shortLink: {
    type: String,
    required: true,
    unique: true,
  }
});

const Link = mongoose.models.Link || mongoose.model("Link", LinkSchema);

export default Link;
