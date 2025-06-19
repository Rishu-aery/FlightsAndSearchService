function compareDateTime(arrivalTime, departureTime) {
    const startTime = new Date(departureTime).getTime();
    const endTime = new Date(arrivalTime).getTime();
    if (startTime > endTime) {
        return false;
    } else {
        return true;
    }
}

module.exports = {
    compareDateTime
}