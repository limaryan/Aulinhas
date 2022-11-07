const maxWebWeight = Math.random () * 101

function canHandleWeight(elephantsWeight) {
    return elephantsWeight < maxWebWeight
}

function elephantsOnWeb() {
    let elephantWeight = 2
    let totalWeightOfElephants = elephantWeight

    console.log("Um elefante estava brincando numa teia!")

    while (canHandleWeight(totalWeightOfElephants)) {
        console.log("Enquanto via que não caía, foi chamar outor elefante!")
        totalWeightOfElephants += elephantWeight
        console.log((totalWeightOfElephants/2) + " elefantes estavam brincando numa teia!")
    }
}