export interface Env {
  REDIRECT_TO: string;
}

export default {
	async fetch(request): Promise<Response> {
		const destinationURL = `${env.REDIRECT_TO}`;
		const statusCode = 301;
		return Response.redirect(destinationURL, statusCode);
	},
} satisfies ExportedHandler;
