type FetcherOptions = {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: Record<string, string>;
  body?: unknown;
  credentials?: RequestCredentials;
  cache?: RequestCache;
};

export class ApiError extends Error {
  status: number;
  data?: any;

  constructor(message: string, status: number, data?: any) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

const isServer = typeof window === "undefined";

const BASE_URL = isServer ? process.env.NEXT_PUBLIC_API_URL! : "/api";
export async function api(url: string, options: FetcherOptions = {}) {
  try {
    const res = await fetch(BASE_URL + url, {
      method: options.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: options.body ? JSON.stringify(options.body) : undefined,
      credentials: options.credentials,
      cache: options.cache,
    });
    
    return res.json();
  } catch (error) {
    console.error("Error: ", error);
  }
}
