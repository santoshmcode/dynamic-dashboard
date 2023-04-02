type Unit = "px" | "em" | "rem" | "vw" | "vh" | "vmin" | "vmax";

function convertToPx(width: string): number {
    const num = parseInt(width, 10);
    if (isNaN(num)) {
        return 0;
    }
    if (width.endsWith("px")) {
        return num;
    } else if (width.endsWith("%")) {
        const percent = num / 100;
        const screenWidth = window.screen.width;
        return Math.round(screenWidth * percent);
    } else if (width.endsWith("rem")) {
        const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        return Math.round(num * fontSize);
    } else if (width.endsWith("em")) {
        const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
        return Math.round(num * fontSize);
    } else {
        // default to pixels if no unit specified
        return num;
    }
}

export { convertToPx }