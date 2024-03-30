// routes/companies.routes.js

const express = require("express");
const router = express.Router();

// **** require Company model in order to use it ****
const Company = require("../models/Company.model");

// GET "/api/companies" => Route to list all available companies
router.get("/companies", (req, res, next) => {
	Company.find()
		.then((companiesFromDB) => res.status(200).json(companiesFromDB))
		.catch((err) => next(err));
});

// POST '/api/companies' => for saving a new Company in the database
router.post("/companies", (req, res, next) => {
	console.log("body: ", req.body); //==> here we can see that all
	// the fields have the same names as the ones in the model so we can simply pass
	// req.body to the .create() method

	Company.create(req.body)
		.then((createdCompany) => {
			console.log("Created new company: ", createdCompany);
			res.status(200).json(createdCompany);
		})
		.catch((err) => next(err));
});

module.exports = router;
