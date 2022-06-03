controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    firework = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, firework_maker, randint(0, -100), randint(0, -100))
    firework.startEffect(effects.spray, 5000)
    firework.startEffect(effects.warmRadial, 5000)
    firework.startEffect(effects.coolRadial, 5000)
    firework.destroy(effects.warmRadial, 1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    firework = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, firework_maker, randint(0, -100), randint(0, -100))
    firework.startEffect(effects.spray, 5000)
    firework.startEffect(effects.warmRadial, 5000)
    firework.startEffect(effects.coolRadial, 5000)
    firework.destroy(effects.coolRadial, 1000)
})
let firework: Sprite = null
let firework_maker: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccfffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffccccccffffffffffcccccccccccccccccccffffffffffffffffffffffccccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffccccccccfffffffccccccccccccccccccccccffffffffffffffffffccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffccccccccccffffcccccccccccccccccccccccffffffffffffffcccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1ffffffffffffffffcccccccccccffcccccccccccccccccccccccccfffffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccfffffffffffccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1fffcccccccccccccccccccccccccccccccccccccccfffffffffcccccccccccccccccffffffffffffffffffff1fffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccfffffffffcccccccccccccccccffccffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccffffffffcccccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccffffffffccccccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccffffffffccccccccccccccccccccffffff1ffffffffffffffffffffffffffffffffffffffffff
    fffffffff1fffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccfffffffffcccccccccccccccccccfffffffffffffffffffffffffffffffffffffffff1fffffff
    ffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccfffffffffcccccccccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccfffffffffccccccccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff2fff2ff2fffffccccccccccccccccccccccccccccccccfffffffffffccccccccccccffffffffffffffffffffffffffffffffffffffffffff11ffffffffff
    fffffffffffffffffffffffffffffffffffff22f2f2fffffffcccccccccccccccccccccccccccccfffffffffffffcccccccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff2fffffffffffffffffffffffffff22222fffffffffffcccccccccccccccccccccccfffffffffffffffcccccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff22ffffffffffffffffffffffffff22ffffffffffffffffffccccccccccccccccffffffffffffffffffffcccccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffff2222fffffffffffffffffffff22222222222ffffffffffffffffccccccccccffffffffffffffffffffffffcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff28882ffffffffffffffffffffff22fbb2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff28f822fffffffffffffffffff22fffbbf2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff22888222fffffffffffffffffffffffbbff2fffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222ffffffffffffffffffffffbbffffffffffffffffffffffffffffffffffffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222fffffffffffffffffffffbbbffffffffffffffffffffffffffffffffffffff222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222fffffffffffffffffffffbbbbffffffffffffffffffffffffffffffffffff22222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222fffffffffffffffffffffbbbbfffffffffffffffffffffffffffffffffff228882fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222fffffffffffffffffffffb888fffffffffffffffffffffffffffffffffff228f822ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222fffffffffffffffffffffb8f8ffffffffffffffffffffffffffffffffff222888222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222ffffffffffffffffffffbb888fffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222ffffffffffffffffffffbbbbbfffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222ffffffffffffffffffffbbbbbbffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222ffffffffffffffffffffbbbbbbffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222ffffffffffffffffffffbbbbbbffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222fffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222fffffffffffffffffffbbbbbbbffffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff222fff2222fffffffffffffffffffbb8888bbfffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff222fff2222fffffffffffffffffffbb8ff8bbfffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff222fff2222fffffffffffffffffffbb8ff8bbfffffffffffffffffffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff222fff2222ffffffffffffccccccfbb8888bbffffffffffffffff2ffffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffff2222222222fccccccccccc888888bbbbbbbbbcccffffffffffff282fffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffccccccccccc88888888888888888bbbbbbbbb888ccccffffffff222fffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ccccccc8888888888888888888888888888bbbbbbbbbb888888ccccffff222fffffffffffff2222222222fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888888888888888888888888888888bbbbbbbbbb8888888888cccc2f2fffffffffffff2222ffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    88888888888888888888888888888888888bbbbbbbbbb88888888888888ccccffffffffffff2222ffff22fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888bbbbbbbbbbb888888888888888888ccccffffffff2222ffff22fffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888bbbbbbbbbbb8888888888888888888888ccccffff2222ffff22fffffffffffffffffffffffff22ffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888bbb8888888bb8888888888888888888888888cccc2222ffff22ffffffffffffffffffffffff888ffffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888bbb8fffff8bb88888888888888888888888888888ccccffff22ffffffffffffffffffffffff8f82fffffffffffffffffffffffffffffffffffffffffffffff
    8888888888888888888888888888888888bbb8fffff8bb888888888888888888888888888888888cccc22fffffffffffffffffffffff288822ffffffffffffffffffffffffffffffffffffffffffffff
    888888888888888888888888888888888bbbb8fffff8bb8888888888888888888888888888888888888ccccfffffffffffffffffffff222222ffffffffffffffffffffffffffffffffffffffffffffff
    888888888888888888888888888888888bbbb8888888bb88888888888888888888888888888888888888888cccffffffffffffffffff222222fffffffffffffffff2ffffffffffffffffffffffffffff
    888888888888888888888888888888888bbbbbbbbbbbbb88888888888888888888888888888888888888888877ffffffffffffffffff222222ffffffffffffffff282fffffffffffffffffffffffffff
    888888888888888888888888888888888bbbbbbbbbbbbbb88888888888888888888888888888888888888887ff777fffffffffffffff22ff22ffffffffffffffff222fffffffffffffffffffffffffff
    888888888888888888888888888888888b88888bbb8888b8888888888888888888888888888888888888887ffffff777ffffffffffff22ff22ffffffffffffffff222fffffffffffffffffffffffffff
    88888888888888888888888888888888bb8fff8bbb8ff8b888888888888888888888888888888888888887ffffffffff777fffffffff222222ffffffffffffffff2f2fffffffffffffffffffffffffff
    88888888888888888888888888888888bb8fff8bbb8ff8b88888888888888888888888888888888888887ffffffffffffff77ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    88888888888888888888888888888888bb8fff8bbb8ff8b8888888888888888888888888888888888887fffffff1fffffff7888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888bb8fff8bbb8ff8bb88888888888888888888888888888888887fffffff1fffffff78888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888bb8fff8bbb8ff8bb8888888888888888888888888888888887fffffff1fffffff788888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888bbb88888bbb8888bb888888888888888888888888888888887ffffffffffffffff788888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888bbbbbbbbbbbbbbbbb888888888888888888888888888888887fffffffffffffff7888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888b8888888bb888888888888888888888888888888888888887fffffffffffffff78888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888b8fffff8bb8fffff88888888888888888888888888888887fffffff1fffffff788888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888b8fffff8bb8fffff8b88888888888888888888888888887ffffff11fffffff7888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888bb8fffff8bb8fffff8b8888888888888888888888888887ffffff1fffffffff7888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888bb8fffff8bb8fffff8b888888888888888888888888887ffffffffffffffff78888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888bb8fffff8bb8fffff8b88888888888888888888888877ffffffffffffffff788888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888bb8888888bb8888888b888888888888888888888887fffffffffffffffff7888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888bbbbbbbbbbbbbbbbbbbb8888888888888888888887ffffffff1ffffffff78888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888bbbbbbbbbbbbbbbbbbbbb888888888888888888887fffffff11ffffffff788888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888b888888bb888888bb888888888888888888888887fffffff1fffffffff7888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888b8ffff8bb8ffff8bb8ff88888888888888888887fffffffffffffffff78888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888b8ffff8bb8ffff8bb8ff8888888888888888887fffffff1fffffffff788888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888b8ffff8bb8ffff8bb8ff888888888888888887fffffff1fffffffff7888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888bb8ffff8bb8ffff8bb8ff8b888888888888887fffffff1ffffffff778888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888bb888888bb888888bb8888b88888888888887ffffffffffffffff7888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbb8888888888887ffffffffffffffff78888888888888888888882888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbb888888888887fffffff1ffffffff788888888888888888888822288888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbb88888888887fffffff1ffffffff7888888888888888888888222228888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbb888888877fffffff1ffffffff78888888888888888888888288882888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888b88888b88888b88888bb8888887fffffffffffffffff78888888888888888888888228ff82288888888888888888888888888888888888888888888888888888
    8888888888888888888888888888fff8b8fff8b8fff8b8fff8bb888887fffffffffffffffff788888888888888888888882228ff82228888888888888888888888888888888888888888888888888888
    8888888888888888888888888888fff8b8fff8b8fff8b8fff8bb88887ffffffff1ffffffff78888888888888888888888222288882222888888888888888888888888888888888888888888888888888
    8888888888888888888888888888fff8b8fff8b8fff8b8fff8bb8887ffffffff1fffffff9999999999999999988888882222222222222288888888888888888888888888888888888888888888888888
    88888888888888888888888888888888b88888b88888b88888bb887ffffffff1ffffffff9fff9fffffff9fff988888882222222222222288888888888888888888888888888888888888888888888888
    88888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbb7fffffffffffffffff79fff9fffffff9fff988888882222222222222288888888888888888888888888888888888888888888888888
    88888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbffffffff1ffffffff789fff9fffffff9fff988888882222222222222288888888888888888888888888888888888888888888888888
    88888888888888888888888888888b888b888b888b888b888b888fffffff1ffffffff7889fff9fffffff9fff988888882222222222222288888888888888888888888888888888888888888888888888
    888888888888888888888888888f8b8f8b8f8b8f8b8f8b8f8b8f8ffffff1fffffff77888dddd9ddddddd9dddd88888882222222222222288888888888888888888888888888888888888888888888888
    88888888888888888888888888888b888b888b888b888b888b888fffffffffffff788888dddd999999999dddd88888882222222222222288888888888888888888888888888888888888888888888888
    8888888888888888888888888bbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff1fffffff7888888ddddddddddddddddd88888882222222222222288888888888888888888888888888888888888888888888888
    8888888888888888888888888b88888bbb8888888888888bb88888ff1fffffff78888888ddddddddddddddddd88888882222222222222288888888888888888888888888888888888888888888888888
    8888888888888888888888888b8fff8bbb8fffffffffff8bb8fff8f1fffffff788888888ddddddddddddddddd88888882222222222222288888888888888888888888888888888888888888888888888
    8888888888888888888888888b8fff8bbb8fffffffffff8bb8fff8ffffffff7888888888ddddddddddddddddd888888822222fffff222288888888888888888888888888888888888888888888888888
    8888888888888888888888888b88888bbb8888888888888bb88888fffffff78888888888ddddddddddddddddd888888822222fffff222288888888888888888888888888888888888888888888888888
    888888888888888888eeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfffff7788888888888ddddddddddddddddd888888822222fffff222288888888888888888888888888888888888888888888888888
    888888eeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfff7eeeeeeeeeeeeeddddddddddddddddd888888822222fffff222288888888888888888888888888888888888888888888888888
    eeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7eeeeeeeeeeeeeedddddddddddddddddeeeeeee22222fffff2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7eeeeeeeeeeeeeeedddddddddddddddddeeeeeee22222fffff2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7eeeeeeeeeeeeeeeedddddddddddddddddeeeeeee22222fffff2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbeeeeeeeeeeeeeeeeedddddddddddddddddeeeeeee22222222222222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
firework_maker = sprites.create(assets.image`firework maker`, SpriteKind.Player)
firework_maker.setPosition(140, 111)
forever(function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 A B G A F G E ", 120)
    }
    for (let index = 0; index < 2; index++) {
        music.playMelody("E D G F B A C5 B ", 120)
    }
    music.playMelody("G B A G C5 B A B ", 120)
    music.playMelody("C5 G B A F A C5 B ", 120)
    music.playMelody("B G A G F A F B ", 120)
})
