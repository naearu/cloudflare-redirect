// require('dotenv').config()


export default {
	async fetch(request, env, ctx): Promise<Response> {
		const destinationURL = env.REDIRECT_TO;
		const statusCode = 301;
		return Response.redirect(destinationURL, statusCode);
	},
} satisfies ExportedHandler;
