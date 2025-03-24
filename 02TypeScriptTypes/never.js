function getColorCode(color) {
    switch (color) {
        case "red":
            return "#FF0000";
        case "green":
            return "#00FF00";
        case "blue":
            return "#0000FF";
        default:
            var _exhaustiveCheck = color; // Type-checking fails if any case is missing
            return _exhaustiveCheck;
    }
}
console.log(getColorCode("Yellow"));
