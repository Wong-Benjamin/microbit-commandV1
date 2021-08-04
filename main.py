def on_button_pressed_a():
    global bulletx
    sprite.change(LedSpriteProperty.X, -1)
    if bulletx >= 1:
        bulletx += -1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global bulletx
    sprite.change(LedSpriteProperty.X, 1)
    if bulletx <= 3:
        bulletx += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global bullet
    bullet = game.create_sprite(bulletx, 3)
    for index in range(4):
        basic.pause(100)
        bullet.change(LedSpriteProperty.Y, -1)
    bullet.delete()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

# Sets up all the items to be referenced later because this coding is wacky
# 
bullet: game.LedSprite = None
bulletx = 0
sprite: game.LedSprite = None
sprite = game.create_sprite(2, 4)
bulletx = 2
bullet = game.create_sprite(0, 0)
bullet.delete()
C0 = game.create_sprite(0, 0)
C0.delete()
C1 = game.create_sprite(0, 0)
C1.delete()
C2 = game.create_sprite(0, 0)
C2.delete()
c3 = game.create_sprite(0, 0)
c3.delete()
C4 = game.create_sprite(0, 0)
C4.delete()
# Hit Detection
# 

def on_forever():
    if C0.is_touching(bullet):
        C0.delete()
    if C1.is_touching(bullet):
        C1.delete()
    if C2.is_touching(bullet):
        C2.delete()
    if c3.is_touching(bullet):
        c3.delete()
    if C4.is_touching(bullet):
        C4.delete()
basic.forever(on_forever)

# Column0 enemy
# 

def on_forever2():
    global C0
    basic.pause(randint(1000, 5000))
    C0 = game.create_sprite(0, 0)
    for index2 in range(4):
        basic.pause(1500)
        C0.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever2)

# Column1 enemy
# 

def on_forever3():
    global C1
    basic.pause(randint(1000, 5000))
    C1 = game.create_sprite(1, 0)
    for index3 in range(4):
        basic.pause(1500)
        C1.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever3)

# Column2 enemy
# 

def on_forever4():
    global C2
    basic.pause(randint(1000, 5000))
    C2 = game.create_sprite(2, 0)
    for index4 in range(4):
        basic.pause(1500)
        C2.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever4)

# Column3 enemy
# 

def on_forever5():
    global c3
    basic.pause(randint(1000, 5000))
    c3 = game.create_sprite(3, 0)
    for index5 in range(4):
        basic.pause(1500)
        c3.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever5)

# Column4 enemy
# 

def on_forever6():
    global C4
    basic.pause(randint(1000, 5000))
    C4 = game.create_sprite(4, 0)
    for index6 in range(4):
        basic.pause(1500)
        C4.change(LedSpriteProperty.Y, 1)
basic.forever(on_forever6)
