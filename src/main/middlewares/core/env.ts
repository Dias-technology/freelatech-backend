import process from 'process'

export default {
	prod: process.env.PROD || true,
	port: process.env.PORT || 5050,
}
