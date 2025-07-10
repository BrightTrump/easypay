import { Priority } from "@/@types/_index";

export const getPriorityColor = (priority?: Priority) => {
  switch (priority) {
    case Priority.Low:
      return "#FFFF00";
    case Priority.Medium:
      return "#17B26A";
    case Priority.High:
      return "#FFA500";
    case Priority.Urgent:
      return "#F04438";
    default:
      return "#E6E6E6";
  }
};
