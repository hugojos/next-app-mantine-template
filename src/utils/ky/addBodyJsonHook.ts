import { BeforeErrorHook } from "ky";
import { KyError } from "src/config/fetchApi";
import { parseJSON } from "./parseJson";

const addBodyJsonHook: BeforeErrorHook = async (error: KyError<unknown>) => {
  error.response.bodyJson = await parseJSON(error.response);
  return error;
};

export default addBodyJsonHook;
