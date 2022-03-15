radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        xValue = value
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (name == "y") {
        yValue = value
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
})
let rightwheel = 0
let leftwheel = 0
let yValue = 0
let xValue = 0
basic.showIcon(IconNames.Triangle)
radio.setGroup(1)
xValue = 0
yValue = 0
basic.forever(function () {
    leftwheel = yValue + xValue
    rightwheel = yValue - xValue
    bitbot.BBBias(BBRobotDirection.Right, rightwheel)
    bitbot.BBBias(BBRobotDirection.Left, leftwheel)
})
