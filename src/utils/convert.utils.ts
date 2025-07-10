import { Status } from "@/@types/analytic.type";

export const convertEnumToArray = (
  enumObject: Record<string, string | number>
) => {
  return Object.values(enumObject).filter((value) => typeof value === "string");
};

export const calculatePercentages = (statuses: Status[]): Status[] => {
  if (!statuses) return [];

  const total = statuses.reduce((sum, status) => sum + Number(status.count), 0);
  const basePercentage = 100 / (statuses.length * 2); // Base percentage derived dynamically
  const totalBase = basePercentage * statuses.length;
  const remainingPercentage = 100 - totalBase;

  if (total === 0) {
    // If total is 0, distribute evenly while ensuring minimum percentage
    return statuses.map((status) => ({
      ...status,
      percentage: parseFloat((100 / statuses.length).toFixed(2)),
    }));
  }

  let allocatedPercentage = 0;
  const result = statuses.map((status) => {
    let percentage = basePercentage;
    if (total > 0 && Number(status.count) > 0) {
      percentage += (Number(status.count) / total) * remainingPercentage;
    }
    percentage = parseFloat(percentage.toFixed(2)); // Round to 2 decimal places
    allocatedPercentage += percentage;
    return { ...status, percentage };
  });

  // Adjust the last item to ensure total is exactly 100%
  const difference = 100 - allocatedPercentage;
  if (difference !== 0) {
    result[result.length - 1].percentage += difference;
  }

  return result;
};
