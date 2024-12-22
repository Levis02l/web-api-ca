import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    movieId: { type: Number, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    rating: { 
      type: String, 
      enum: ["Excellent", "Good", "Average", "Poor", "Terrible"], 
      required: true 
    },
    created_at: { type: Date, default: Date.now }
});
  

export default mongoose.model('Review', ReviewSchema);
