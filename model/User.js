import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    index: true,
    lowercase: true,
  },
  image: {
    type: String
  },
  resetCode: {
    type: String,
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 10 * 1000 * 60)
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.plugin(uniqueValidator);

export default mongoose.models.User || mongoose.model('User', userSchema);
