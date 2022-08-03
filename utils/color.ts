import { Category } from "types/category";

export function getCategoryColor(category: Category): string {
  switch (category) {
    case "news":
      return "#5cc2da";
    case "tutorials":
      return "#998bdf";
    case "videos":
      return "#cf7cdb";
    case "php-annotated-monthly":
      return "#e9a29a";
    case "features":
      return "#b2da76";
    case "events":
      return "#dbc072";
    case "eap":
      return "#e0a77d";
    default:
      return "#ff0000";
  }
}
