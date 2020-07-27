export const validatePointsInput = (points) => {
    if (isNaN(points)) return false;
    return parseInt(points) >= 0
};

export const validateNameInput = (name) => {
    return (name.length > 2);
};