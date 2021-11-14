import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    firstName: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    options: [
      {
        sku: { type: String, required: true },
        size: { type: String },
        color: { type: String },
        price: { type: Number, required: true },
        costIncVat: { type: Number },
        countInStock: { type: Number, required: true, default: 0 },
      },
    ],
    images: [
      {
        url: { type: String },
      },
    ],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    brand: { type: String, required: true },
    supplier: { type: String },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  },
);

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
