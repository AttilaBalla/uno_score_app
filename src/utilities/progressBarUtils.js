const percentToColors = {
    0: "green",
    25: "olive",
    50: "yellow",
    75: "orange",
    100: "red"
};

export const convertPercentToColor = (percent) => {
    let progressColor = "green";
    for (let key of Object.keys(percentToColors)) {
        if (percent > key) {
            progressColor = percentToColors[key];
        }
    }

    return progressColor;
};


export const round = (value, precision) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
};

