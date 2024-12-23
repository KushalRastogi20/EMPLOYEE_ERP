import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const employeeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);

export async function POST(req) {
  await dbConnect();

  try {
    const { fullName, email, password } = await req.json();

    if (!fullName || !email || !password) {
      return new Response(JSON.stringify({ message: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      return new Response(JSON.stringify({ message: "Email already in use" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newEmployee = new Employee({
      fullName,
      email,
      password: hashedPassword,
    });

    await newEmployee.save();

    return new Response(
      JSON.stringify({ message: "Employee registered successfully!" }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Error registering employee:", err);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
