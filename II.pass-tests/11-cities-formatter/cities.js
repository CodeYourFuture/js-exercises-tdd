module.exports = function(capitals) {
    return capitals.map(capital => {
        return `${capital.city} is the capital of ${capital.country}`;
    });
};
