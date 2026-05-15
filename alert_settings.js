// Severe Weather Javascript code //

function RunG() {

    // ALERT TYPE
    let alertType = document.querySelector('input[name="alert-type"]:checked');

    // COUNTIES
    let counties = document.querySelectorAll('input[name="county"]:checked');

    // COUNTY LABEL
    let countyLabel = document.querySelector('input[name="cntySelection"]:checked');

    // EXPIRATION
    let expiration = document.getElementById("expiration").value;

    // HAIL
    let hailThreat = document.querySelector('input[name="hailThreat"]:checked');

    // WIND
    let windThreat = document.querySelector('input[name="windThreat"]:checked');

    // DIRECTION
    let direction = document.querySelector('input[name="direction"]:checked');

    // SPEED
    let speed = document.getElementById("speed").value;

    // CRITICAL WORDING
    let critical = document.querySelector('input[name="howCritical"]:checked');

    // VALIDATION
    if (!alertType) {
        document.getElementById("output").innerText =
            "Please select an alert type.";
        return;
    }

    // COUNTY ARRAY
    let countyList = [];

    counties.forEach(function(county) {
        countyList.push(county.value);
    });

    // COUNTY STRING
    let countyString = countyList.join(", ");

    // BASE MESSAGE
    let message =
        "A " + alertType.value +
        " has been issued for " +
        countyString + " " +
        (countyLabel ? countyLabel.value : "") +
        " until " + expiration + ".";

    // HAIL
    if (hailThreat) {
        message +=
            " Storms may produce up to " +
            hailThreat.value + ".";
    }

    // WIND
    if (windThreat) {
        message +=
            " " + windThreat.value +
            " are possible with this storm.";
    }

    // DIRECTION + SPEED
    if (direction && speed) {
        message +=
            " This storm is moving " +
            direction.value +
            " at " +
            speed +
            " MPH.";
    }

    // CRITICAL
    if (critical && critical.value === "yes") {
        message += " SEEK SHELTER IMMEDIATELY!";
    }

    // OUTPUT
    document.getElementById("output").innerText = message;
}
