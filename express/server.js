import express from "express";
import productRoutes from "./routes/Products.js";
import mongoose from "mongoose";
import "dotenv/config";

const app = express(); // express Funktion aufrufen

/* Middleware */
app.use(express.json());

// Verbinden mit MongoDB via mongoose:
// Mongoose ist ein "Driver" mit dem wir Datenbankoperationen ausführen können.
// man kann dafür auch "mongodb" verwenden, mongoose macht das alles nur einfacher.
/* mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Mit Datenbank verbunden");
}); */

const connectDB = (uri) => {
  try {
    mongoose.connect(uri);
    console.log("💾 Mit Datenbank verbunden");
  } catch (error) {
    console.log("❌ Fehler beim Verbinden mit der Datenbank", error);
  }
};

connectDB(process.env.MONGO_URI)



/* Routen */
app.use("/products", productRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 Server gestartet und läuft auf Port: ${PORT}`);
});
