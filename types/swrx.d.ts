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

declare const clients: {
  matchAll(options: {
    includeUncontrolled: boolean;
    type: "window";
  }): Promise<Window[]>;
};

// define service serviceStorage
declare const serviceStorage: Storage;

declare interface Component {
  status: number;
  headers: Headers;
  body: BodyInit | null;

  setStatus(status: number): Component;
  setHeader(name: string, value: string): Component;
  setBody(body: BodyInit): Component;

  buildResponse(): Response;
}

// Define a custom HTML template

declare function html(
  strings: TemplateStringsArray,
  ...values: any[]
): Component;
