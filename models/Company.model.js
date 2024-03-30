// models/Company.model.js

const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const companySchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Company name is required"],
			unique: true,
		},
		description: {
			type: String,
			required: false,
		},
		email: {
			type: String,
			required: [true, "Company name is required"],
		},
	},
	{
		timestamps: true,
	}
);

module.exports = model("Company", companySchema);
