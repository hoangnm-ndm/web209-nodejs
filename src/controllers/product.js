import Product from "../models/Product";

export const createProduct = async (req, res) => {
	try {
		// const newProduct = new Product({ title, price, description });
		// await newProduct.save();
		const newProduct = await Product.create(req.body);
		return res.status(201).json({ data: newProduct });
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};
