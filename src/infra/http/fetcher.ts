export interface FetcherOptions {
  headers?: Record<string, string>;
  // Add any other options you need
}

/**
 * Fetcher function to make HTTP requests
 * @param url
 * @param options
 * @returns
 */
export async function fetcher<T>(url: string, options: FetcherOptions = {}): Promise<T> {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
