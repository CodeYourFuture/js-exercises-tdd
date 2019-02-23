function formatCities(capitals, transform) {
        return capitals.map(element => {
            return transform(element);
        });
    }

module.exports = formatCities;
