const mongoose = require("mongoose");

module.exports = () => {
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try {
		mongoose.connect(process.env.DB, connectionParams);
		console.log("Connected to database successfully");
	} catch (error) {
		console.log(error);
		console.log("Could not connect database!");
	}
};


// const mongoose = require("mongoose");

// module.exports = connection = async () => {
// 	try{
// 	const connectionParams = {
// 		useNewUrlParser: true,
// 		useCreateIndex: true,
// 		useUnifiedTopology: true,
// 	};
// 		await mongoose.connect(process.env.DB, connectionParams);
// 		console.log("Connected to database successfully");
// 	} catch (error) {
// 		console.log(error);
// 		console.log("Could not connect database!");
// 	}
// };
