basic.showIcon(IconNames.Duck)
for (let index = 0; index < 9; index++) {
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . # #
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . # # #
        . . . # #
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . # # # .
        . . # # #
        . . # # #
        . . . . .
        `)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # # # .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # # # . .
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
	
})
