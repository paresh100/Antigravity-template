import type { Context } from "@netlify/edge-functions";

export default async (request: Request, context: Context) => {
  // Strip Accept-Encoding so upstream doesn't compress
  const cleanRequest = new Request(request.url, {
    method: request.method,
    headers: new Headers(
      [...request.headers.entries()].filter(
        ([key]) => key.toLowerCase() !== "accept-encoding"
      )
    ),
  });

  const response = await context.next(cleanRequest);
  const body = await response.text();

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, no-transform",
      "X-Content-Type-Options": "nosniff",
      "Content-Encoding": "identity",
    },
  });
};

export const config = { path: "/sitemap.xml" };
