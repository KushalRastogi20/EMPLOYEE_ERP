// src/models/Attendance.js

import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
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
  remarks: {
    type: String,
    trim: true,
  },
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
attendanceSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// If the model exists already, reuse it; otherwise, create a new one
export default mongoose.models.Attendance || mongoose.model('Attendance', attendanceSchema);
