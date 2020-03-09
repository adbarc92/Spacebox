'use strict';
const { server, checkToken } = require('./server');
// import { server, checkToken } from './server';

const PORT = process.env.PORT || 8080;

server.listen(
	PORT,
	checkToken(null, null, () => {
		/* eslint-disable no-console */
		console.log(`Server is listening on ${PORT}`);
		/* eslint-enable no-console */
	})
);
