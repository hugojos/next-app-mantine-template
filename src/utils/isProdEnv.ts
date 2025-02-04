import envs from "src/config/envs";

const isProdEnv = envs.vercelEnv === "production";

export default isProdEnv;
