import { model, Schema } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
});

export default model("Product", productSchema);
