// src/models/Payroll.js

import mongoose from 'mongoose';

const payrollSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  bonuses: {
    type: Number,
    default: 0, // Default to no bonuses
  },
  deductions: {
    type: Number,
    default: 0, // Default to no deductions
  },
  netPay: {
    type: Number,
    required: true,
  },
  paymentDate: {
    type: Date,
    default: Date.now,
  },
  paymentStatus: {
    type: String,
    enum: ['Paid', 'Pending', 'Failed'],
    default: 'Pending',
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
payrollSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

// If the model exists already, reuse it; otherwise, create a new one
export default mongoose.models.Payroll || mongoose.model('Payroll', payrollSchema);
