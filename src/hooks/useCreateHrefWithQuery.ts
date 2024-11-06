import { usePathname, useSearchParams } from "next/navigation";

const useCreateHrefWithQuery = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createHrefWithQuery = (
    queries: Record<string, string | number | null>,
  ) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    Object.entries(queries).forEach(([key, value]) => {
      if (value === null) {
        newSearchParams.delete(key);
        return;
      }
      newSearchParams.set(key, String(value));
    });

    return `${pathname}?${newSearchParams.toString()}`;
  };

  return createHrefWithQuery;
};

export default useCreateHrefWithQuery;
