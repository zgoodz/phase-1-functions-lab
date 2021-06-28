const hq = 42;
const feet = 264;

function distanceFromHqInBlocks(pickup) {
    if (pickup >= 42) {
        return pickup - hq;
    } else {
        return hq - pickup;
    }
}

function distanceFromHqInFeet(pickup) {
    return (distanceFromHqInBlocks(pickup) * feet);
}

function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        return (start - destination) * feet;
    } else if (start < destination) {
        return (destination - start) * feet;
    }
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return 2.56
    } else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25
    } else if (distanceTravelledInFeet(start, destination) >= 2500) {
        return 'cannot travel that far'
    }
}