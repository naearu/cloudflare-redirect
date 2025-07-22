export default {
	async fetch(request): Promise<Response> {
		const destinationURL = `${env.redirect_to}`;
		const statusCode = 301;
		return Response.redirect(destinationURL, statusCode);
	},
} satisfies ExportedHandler;
