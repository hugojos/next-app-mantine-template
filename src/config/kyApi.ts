import ky from "ky";
import envs from "./envs";

const kyApi = ky.create({
  prefixUrl: envs.apiURL
});

export default kyApi;
