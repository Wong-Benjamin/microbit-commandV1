// Control Left
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
    if (bulletx >= 1) {
        bulletx += -1
    }
})
// Control Right
// 
// 
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
    if (bulletx <= 3) {
        bulletx += 1
    }
})
// Control Shoot
// 
input.onGesture(Gesture.Shake, function () {
    bullet = game.createSprite(bulletx, 3)
    soundExpression.slide.play()
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        bullet.change(LedSpriteProperty.Y, -1)
    }
    bullet.delete()
})
// Sets up all the items to be referenced later because this coding is wacky and I'm too rusty for this
// 
let progress4 = 0
let progress3 = 0
let progress_2 = 0
let progress_1 = 0
let progress0 = 0
let bullet: game.LedSprite = null
let bulletx = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 4)
bulletx = 2
bullet = game.createSprite(0, 0)
bullet.delete()
let C0 = game.createSprite(0, 0)
C0.delete()
let C1 = game.createSprite(0, 0)
C1.delete()
let C2 = game.createSprite(0, 0)
C2.delete()
let C3 = game.createSprite(0, 0)
C3.delete()
let C4 = game.createSprite(0, 0)
C4.delete()
// Bad Kalinka
// 
basic.forever(function () {
    if (game.isGameOver()) {
        music.stopMelody(MelodyStopOptions.All)
    } else {
        music.playMelody("A A E F G F E D ", 140)
        music.playMelody("D F A G F E E E ", 140)
        music.playMelody("F G A F D D - - ", 140)
    }
})
// Hit Detection
// Needs to run 24/7 so it get its own function
basic.forever(function () {
    if (C0.isTouching(bullet)) {
        C0.delete()
        game.addScore(1)
    }
    if (C1.isTouching(bullet)) {
        C1.delete()
        game.addScore(1)
    }
    if (C2.isTouching(bullet)) {
        C2.delete()
        game.addScore(1)
    }
    if (C3.isTouching(bullet)) {
        C3.delete()
        game.addScore(1)
    }
    if (C4.isTouching(bullet)) {
        C4.delete()
        game.addScore(1)
    }
})
// Column0 enemy
// 
basic.forever(function () {
    basic.pause(randint(1000, 5000))
    progress0 = 0
    C0 = game.createSprite(0, 0)
    for (let index = 0; index < 4; index++) {
        if (C0.isDeleted()) {
            break;
        } else {
            basic.pause(2000)
            C0.change(LedSpriteProperty.Y, 1)
            progress0 += 1
            if (progress0 == 4) {
                C0.delete()
                soundExpression.spring.play()
                game.gameOver()
            }
        }
    }
})
// Column1 enemy
// 
basic.forever(function () {
    basic.pause(randint(1000, 5000))
    progress_1 = 0
    C1 = game.createSprite(1, 0)
    for (let index = 0; index < 4; index++) {
        if (C1.isDeleted()) {
            break;
        } else {
            basic.pause(2000)
            C1.change(LedSpriteProperty.Y, 1)
            progress_1 += 1
            if (progress_1 == 4) {
                C1.delete()
                soundExpression.spring.play()
                game.gameOver()
            }
        }
    }
})
// Column2 enemy
// 
basic.forever(function () {
    basic.pause(randint(1000, 5000))
    progress_2 = 0
    C2 = game.createSprite(2, 0)
    for (let index = 0; index < 4; index++) {
        if (C2.isDeleted()) {
            break;
        } else {
            basic.pause(2000)
            C2.change(LedSpriteProperty.Y, 1)
            progress_2 += 1
            if (progress_2 == 4) {
                C2.delete()
                soundExpression.spring.play()
                game.gameOver()
            }
        }
    }
})
// Column3 enemy
// 
basic.forever(function () {
    basic.pause(randint(1000, 5000))
    progress3 = 0
    C3 = game.createSprite(3, 0)
    for (let index = 0; index < 4; index++) {
        if (C3.isDeleted()) {
            break;
        } else {
            basic.pause(2000)
            C3.change(LedSpriteProperty.Y, 1)
            progress3 += 1
            if (progress3 == 4) {
                C3.delete()
                soundExpression.spring.play()
                game.gameOver()
            }
        }
    }
})
// Column4 enemy
// 
basic.forever(function () {
    basic.pause(randint(1000, 5000))
    progress4 = 0
    C4 = game.createSprite(4, 0)
    for (let index = 0; index < 4; index++) {
        if (C4.isDeleted()) {
            break;
        } else {
            basic.pause(2000)
            C4.change(LedSpriteProperty.Y, 1)
            progress4 += 1
            if (progress4 == 4) {
                C4.delete()
                soundExpression.spring.play()
                game.gameOver()
            }
        }
    }
})
