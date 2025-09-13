import { getCookie } from "cookies-next/client";
import ky from "ky";
import { addBodyJsonHook } from "lkd-web-kit";
import { COOKIE_SESSION_NAME } from "src/consts/cookies";
import envs from "./envs";

export const fetchApi = ky.create({
  prefixUrl: envs.apiURL,
  retry: 0,
  timeout: 1000 * 60 * 3,
  hooks: {
    beforeRequest: [
      async (request) => {
        const at =
          typeof window !== "undefined" ? getCookie(COOKIE_SESSION_NAME) : null;
        if (at) request.headers.set("Authorization", `Bearer ${at}`);
        return request;
      },
    ],
    beforeError: [addBodyJsonHook],
  },
});
