import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Create a Mongoose model for the "Topic" schema. If the model already exists, use the existing model; otherwise, create a new model using the "Topic" schema.
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
