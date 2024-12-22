const baseUrl = process.env.EXPO_PUBLIC_API_URL;

export const globalFetch = async (endpoint: string, options = {}) => {
  let header: any = {
    "Content-Type": "application/json",
  };

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: {
      ...header,
    },
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "INTERNAL SERVER ERROR");
  }

  return response.json();
};
