module.exports = {
	development: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: 'localhost',
		dialect: 'mysql',
	},
	test: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: process.env.DB_NAME,
		host: 'localhost',
		dialect: 'mysql',
	},
	production: {
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		database: 'database_production',
		host: '127.0.0.1',
		dialect: 'mysql',
	},
};
