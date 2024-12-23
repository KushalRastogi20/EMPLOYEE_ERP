// src/models/Employee.js

import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    required: true,
    trim: true,
  },
  position: {
    type: String,
    required: true,
    trim: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  dateOfJoining: {
    type: Date,
    required: true,
    default: Date.now,
  },
  attendance: [{
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Present', 'Absent', 'On Leave'],
      required: true,
    },
  }],
  performanceReviews: [{
    reviewer: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },
    comments: {
      type: String,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Automatically update `updatedAt` field on save
employeeSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// If the model exists already, reuse it; otherwise, create a new one
export default mongoose.models.Employee || mongoose.model('Employee', employeeSchema);
