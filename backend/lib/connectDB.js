import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://brahmareddy8242_db_user:ZPshGOsafDKpTScm@chopper.jrieyyp.mongodb.net/chopper?retryWrites=true&w=majority&appName=chopper&dbName=blog"
    );
    console.log("✅ MongoDB is connected");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};


export default connectDB