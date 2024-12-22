import { globalFetch } from "@/utils";

export const getLatestBooks = async () => {
  return globalFetch(`/new-books`, {
    method: "GET",
  });
};
