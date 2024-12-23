import { globalFetch } from "@/utils";

export const getLatestBooks = async () => {
  return globalFetch(`/new-books`, {
    method: "GET",
  });
};

export const getPopularBooks = async () => {
  return globalFetch(`/popular-books`, {
    method: "GET",
  });
};

export const getTeensBooks = async () => {
  return globalFetch(`/teens-books`, {
    method: "GET",
  });
};

export const getBookDetails = async (id: string) => {
  return globalFetch(`/details/${id}`, {
    method: "GET",
  });
};
