import ky from "ky";
import envs from "./envs";

const fetchApi = ky.create({
  prefixUrl: envs.apiURL,
  retry: 0,
  timeout: 1000 * 60 * 10
});

export default fetchApi;
