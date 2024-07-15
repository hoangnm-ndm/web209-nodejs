import Product from "../models/Product";

export const createProduct = async (req, res) => {
	try {
		const data = await Product.create(req.body);
		return res.status(201).json({
			success: true,
			data,
			message: "Tao san pham thanh cong!",
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

export const removeProduct = async (req, res) => {
	try {
		const data = await Product.findByIdAndDelete(req.params.id);
		return res.status(200).json({
			success: true,
			data,
			message: "Xoa san pham thanh cong!",
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

export const updateProduct = async (req, res) => {
	try {
		const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (data) {
			return res.status(200).json({
				success: true,
				data,
				message: "Update san pham thanh cong!",
			});
		}
		return res.status(404).json({ error: "San pham khong ton tai!" });
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

export const getAllProduct = async (req, res) => {
	try {
		const data = await Product.find();
		return res.status(200).json({
			success: true,
			data,
			message: "Lay san pham thanh cong!",
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};

export const getProductById = async (req, res) => {
	try {
		const data = await Product.findById(req.params.id);
		return res.status(200).json({
			success: true,
			data,
			message: "Lay san pham thanh cong!",
		});
	} catch (error) {
		return res.status(500).json({ error: error.message });
	}
};
