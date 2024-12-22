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
