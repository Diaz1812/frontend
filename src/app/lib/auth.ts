// src/lib/auth.ts
import Cookies from "js-cookie";

export const getAuthToken = (): string | null => {
  return Cookies.get("authToken") || null;
};

export const setAuthToken = (token: string): void => {
  Cookies.set("authToken", token, {
    expires: 7, // 7 hari
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
};

export const removeAuthToken = (): void => {
  Cookies.remove("authToken");
};

export const isAuthenticated = (): boolean => {
  return getAuthToken() !== null;
};
