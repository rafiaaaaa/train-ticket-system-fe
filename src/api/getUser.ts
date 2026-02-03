import { api, ApiError } from "@/utils/api";

export const getUser = async () => {
  try {
    const res = await api("/auth/me", {
      credentials: "include",
    });

    return res.data;
  } catch (err) {
    if (err instanceof ApiError && err.status === 401) {
      return null;
    }

    throw err;
  }
};
