// define types for get
declare function get(
  path: string,
  handler: (request: Request & { params: any }) => Promise<Response>
): void;
// define types for post
declare function post(
  path: string,
  handler: (request: Request & { params: any }) => Promise<Response>
): void;
// define types for put
declare function put(
  path: string,
  handler: (request: Request & { params: any }) => Promise<Response>
): void;
// define types for delete
declare function del(
  path: string,
  handler: (request: Request & { params: any }) => Promise<Response>
): void;
// define types for patch
declare function patch(
  path: string,
  handler: (request: Request & { params: any }) => Promise<Response>
): void;

// define service serviceStorage
declare const serviceStorage: Storage;

declare interface ResponseBuilder {
  status: number;
  headers: Headers;
  body: BodyInit | null;

  setStatus(status: number): ResponseBuilder;
  setHeader(name: string, value: string): ResponseBuilder;
  setBody(body: BodyInit): ResponseBuilder;

  buildResponse(): Response;
}

// Define a custom HTML template

declare function html(
  strings: TemplateStringsArray,
  ...values: any[]
): ResponseBuilder;
