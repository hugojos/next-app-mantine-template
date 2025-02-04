import ky, { HTTPError } from "ky";
import addBodyJsonHook from "src/utils/ky/addBodyJsonHook";
import envs from "./envs";

export type KyError<T = unknown> = HTTPError<T> & {
  response: {
    bodyJson?: T;
  };
};

const fetchApi = ky.create({
  prefixUrl: envs.apiURL,
  retry: 0,
  timeout: 1000 * 60 * 3,
  hooks: {
    beforeRequest: [
      async (request) => {
        // const at = (await createClient().auth.getSession()).data.session
        //   ?.access_token;

        // request.headers.set("Authorization", `Bearer ${at}`);

        return request;
      }
    ],
    beforeError: [addBodyJsonHook]
  }
});

export default fetchApi;
