export const validateIntegerInput = (points) => {
    if (isNaN(points)) return false;
    return parseInt(points) >= 0
};

export const validateNameInput = (name) => {
    return (name.trim().length > 2);
};