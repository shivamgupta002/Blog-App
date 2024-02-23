const { default: mongoose } = require("mongoose");

const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Using existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connection[0].readyState;
  } catch (err) {
    console.log(err.message);
    throw new Error(err);
  }
};

export default connectToDb;
