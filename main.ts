let 乱数移動 = 0
let 位置 = 0
let 角度 = 2
let ボール = game.createSprite(位置, 角度)
let 方向 = 1
let 角度変化 = 1
let 上下移動 = 0
let 球速 = 200
basic.forever(function () {
    if (ボール.get(LedSpriteProperty.X) == 4) {
        方向 = -1
        上下移動 = randint(-1, 1)
        球速 = randint(6, 15) * 20
    } else if (ボール.get(LedSpriteProperty.X) == 0) {
        方向 = 1
        上下移動 = randint(-1, 1)
        球速 = randint(6, 15) * 20
    } else {
        if (上下移動 != 0) {
            if (ボール.get(LedSpriteProperty.Y) == 0) {
                上下移動 = 角度変化
            } else if (ボール.get(LedSpriteProperty.Y) == 4) {
                上下移動 = 角度変化 * -1
            }
        }
    }
    if (角度 + 上下移動 + 乱数移動 < 0) {
        乱数移動 = 0
    } else if (角度 + 上下移動 + 乱数移動 > 4) {
        乱数移動 = 0
    }
    上下移動 = 上下移動 + 乱数移動
    位置 += 方向
    角度 += 上下移動
    ボール.set(LedSpriteProperty.X, 位置)
    ボール.set(LedSpriteProperty.Y, 角度)
    if (位置 == 4) {
        乱数移動 = randint(-1, 1)
    } else if (位置 == 0) {
        乱数移動 = randint(-1, 1)
    } else {
        乱数移動 = 0
    }
    basic.pause(球速)
})
