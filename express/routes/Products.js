import { Router } from "express";
import Product from "../models/Product.js";
const router = Router();

/* GET Route um ALLE Produkte anzuzeigen / zurückzuschicken */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Fehler bei Produktabfrage", error });
  }
});

/* POST um EIN neues Produkt zu erstellen*/
router.post("/", async (req, res) => {
  try {
    const newProduct = req.body;
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Fehler bei Produkterstellung", error });
  }
});

/* CRUD => Create, Read, Update, Delete => CRUD operations */

export default router;
