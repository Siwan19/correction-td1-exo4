input.onButtonPressed(Button.A, function () {
    led.unplot(pos_X, pos_Y)
    pos_X += -1
    if (pos_X < 0) {
        pos_X = 4
        pos_Y += -1
        if (pos_Y < 0) {
            pos_Y = 4
        }
    }
    led.plot(pos_X, pos_Y)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(pos_X, pos_Y)
    pos_X += 1
    if (pos_X > 4) {
        pos_X = 0
        pos_Y += 1
        if (pos_Y > 4) {
            pos_Y = 0
        }
    }
    led.plot(pos_X, pos_Y)
})
let pos_Y = 0
let pos_X = 0
pos_X = 2
pos_Y = 2
led.plot(pos_X, pos_Y)
