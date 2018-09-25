let base = '/'
if (process.env.NODE_ENV == 'dev') {
	base = '/'
	console.log('dev')
}
if (process.env.NODE_ENV == 'test') {
	base = '/dist'
	console.log('test')
}
if (process.env.NODE_ENV == 'prod') {
	base = '/VueDynamicLoad'
	console.log('prod')
}
module.exports = {
	
	baseUrl: base,
	configureWebpack: {
		resolve: {
			alias: {
				vue$: "vue/dist/vue.common",
			},
		},
	},
};
