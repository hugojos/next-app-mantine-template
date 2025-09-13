const envs = {
  apiURL: process.env.NEXT_PUBLIC_API_URL ?? "",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? "",
  vercelEnv:
    (process.env.NEXT_PUBLIC_VERCEL_ENV as
      | "development"
      | "production"
      | "preview") ?? "development",
};

export default envs;
