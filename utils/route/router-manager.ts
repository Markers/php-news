export function pathManager(): { currentPath: string; prevPath: string } {
  const storage = globalThis.sessionStorage;

  const currentPath = globalThis.location.pathname;
  let prevPath = storage.getItem("currentPath");
  if (!prevPath) {
    prevPath = globalThis.location.pathname;
  }

  storage.setItem("prevPath", prevPath);
  storage.setItem("currentPath", currentPath);

  return { currentPath, prevPath };
}
