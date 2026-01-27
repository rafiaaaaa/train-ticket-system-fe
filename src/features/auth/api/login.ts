import { api } from "@/utils/api";
import { LoginRequest } from "@/validators/auth.schema";

export const login = (payload: LoginRequest) => {
  const user = api("/auth/login", {
    method: "POST",
    body: payload,
  });

  return user;
};
