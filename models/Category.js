import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  google_category_code: { type: Number, required: true },
  products: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  ],
});

const Category =
  mongoose.models.Category || mongoose.model('Category', categorySchema);

export default Category;
