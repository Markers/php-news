const baseUrl = process.env.NEXT_PUBLIC_API ?? "http://localhost:8000";

export const fetchRequest = async (path: string) => {
  if (!path) {
    throw new Error("Path is required");
  }
  const url = `${baseUrl}/api/v1${path}`;
  const data = await (await fetch(url)).json();

  return { data: data, path: `${url}` };
};
