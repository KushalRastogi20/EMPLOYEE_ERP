// import mongoose from "mongoose";

// let isConnected = false;
// export async function dbConnect() {
//   if (isConnected) {
//     console.log("Mongo running");
//     return;
//   }
//   try {
//     await mongoose.connect(process.env.MONGODB_URI, {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//     });
//     isConnected = true;
//     console.log("Mongo running");
//   } catch (error) {
//     console.error("Error connecting to MongoDB", error);
//     throw new Error("Unable to connect to MongoDB");
//   }
// }

// export default dbConnect;
import mongoose from "mongoose";

let isConnected = false; // Track the connection state globally

export async function dbConnect() {
  if (isConnected) {
    console.log("MongoDB is already connected.");
    return;
  }

  try {
    // Establish a new connection if not already connected
    const connection = await mongoose.connect(process.env.MONGODB_URI, {
      // dbName: "employee_erp", // Optional: Specify your database name
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    isConnected = connection.connections[0].readyState === 1; // Check the connection state
    if (isConnected) {
      console.log("MongoDB connected successfully.");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Unable to connect to MongoDB");
  }
}

export default dbConnect;
