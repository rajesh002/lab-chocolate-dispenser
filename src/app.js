var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates, color, count) {
    if (count < 1)
        return 'Number cannot be zero/negative'
    for (var index = 0; index < count; index++)
        chocolates.unshift(color)
    return chocolates
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, count) {
    if (chocolates.length < count)
        return 'Insufficient chocolates in the dispenser'
    else if (count < 1)
        return 'Number cannot be zero/negative'
    var newChoco = []
    for (var index = 0; index < count; index++)
        newChoco.push(chocolates.shift())
    return newChoco
}


//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    if (chocolates.length < number)
        return 'Insufficient chocolates in the dispenser'
    else if (number < 1)
        return 'Number cannot be zero/negative'
    var newList = []
    for (var index = 0; index < number; index++) {
        newList.push(chocolates.pop())
    }
    return newList
}



//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates, number, color) {
    var temp = ''
    if (chocolates.length < number)
        return 'Insufficient chocolates in the dispenser'
    else if (number < 1)
        return 'Number cannot be zero/negative'
    var newList = []
    for (var index = 0; index < number; index++) {
        temp = chocolates.pop()
        if (temp == color)
            newList.push(temp)
    }
    return newList
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function removeDuplicates(arra) {
    return arra.filter((a, b) => arra.indexOf(a) === b);
}


function noOfChocolates(chocolates) {
    var afterRemove = []
    afterRemove = removeDuplicates(chocolates)
    var count = 0,
        res = []
    for (var index = 0; index < afterRemove.length; index++) {
        count = 0
        for (var chocoIndex = 0; chocoIndex < chocolates.length; chocoIndex++) {
            if (afterRemove[index] == chocolates[chocoIndex])
                count++
        }
        res.push(count)
    }
    return res
}





//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    var temp, res = [];
    var inNumbers = noOfChocolates(chocolates)
    var afterRemoveDuplicates = removeDuplicates(chocolates)
    for (var index = 0; index < afterRemoveDuplicates.length; index++) {
        res.push(afterRemoveDuplicates[index])
    }
    return res
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    var count = 0
    if (color == finalColor)
        return 'Can\'t replace the same chocolates'
    if (number < 1)
        return 'Number cannot be zero/negative'
    else if (chocolates.length == 1) {
        chocolates[0] = finalColor
        return chocolates
    }
    for (var chocoIndex = 0; chocoIndex < chocolates.length; chocoIndex++) {
        if ((count < number) && (chocolates[chocoIndex] == color)) {
            chocolates[chocoIndex] = finalColor
            count++
        }

    }
    return chocolates
}


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    if (color == finalColor)
        return 'Can\'t replace the same chocolates'
    else if (chocolates.length == 1) {
        chocolates[0] = finalColor
        return [1, chocolates]
    } else if (chocolates.length == 0) {
        return [0, []]
    }
    for (var chocoIndex = 0; chocoIndex < chocolates.length; chocoIndex++) {
        if (chocolates[chocoIndex] == color) {
            chocolates[chocoIndex] = finalColor
        }

    }
    return [chocolates.length, chocolates]
}


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed