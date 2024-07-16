import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
	try {
		const data = await Product.create(req.body);
		if (data) {
			return res.status(201).json({
				success: true,
				data,
				message: "Tao san pham thanh cong!",
			});
		}
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

export const getAllProducts = async (req, res) => {
	try {
		const data = await Product.find();
		if (data) {
			return res.status(200).json({
				success: true,
				data,
				message: "Lay san pham thanh cong!",
			});
		}
		if (!data) {
			return res.status(404).json({
				success: false,
				message: "Khong co san pham nao!",
			});
		}
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
