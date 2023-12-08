export const SortAlphabeticallyHelper = (employees) => {
  if (employees) {
    return [...employees].sort((a, b) => {
      const nameA = a?.name?.toLowerCase() ?? ""; // Convert to lowercase for case-insensitive sorting
      const nameB = b?.name?.toLowerCase() ?? "";

      return nameA.localeCompare(nameB);
    });
  }
  return [];
};
