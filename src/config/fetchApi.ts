import ky from "ky";
import envs from "./envs";

const fetchApi = ky.create({
  prefixUrl: envs.apiURL
});

export default fetchApi;
