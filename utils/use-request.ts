import useSwr from "swr";

const baseUrl = process.env.NEXT_PUBLIC_API ?? "http://localhost:8000";

export const useRequest = (path: string) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const { data, error } = useSwr(`/api/v1${path}`);
  return { data, error };
};
