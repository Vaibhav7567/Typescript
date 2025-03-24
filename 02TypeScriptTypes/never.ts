type Color = "red" | "green" | "blue";

function getColorCode(color: Color): string {
  switch (color) {
    case "red":
      return "#FF0000";
    case "green":
      return "#00FF00";
    case "blue":
      return "#0000FF";
    default:
      const _exhaustiveCheck : never = color;  // Type-checking fails if any case is missing
      return _exhaustiveCheck;
  }
}
console.log(getColorCode("Yellow" as any));
