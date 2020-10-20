enum SpriteKindLegacy {
    Player,
    Enemy,
    Projectile,
    Food
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("X=" + player1.x + " Y=" + player1.y)
})
let player1: Sprite = null
game.splash("Sprite Walker", "\"A\" for coordinates")
scene.setBackgroundColor(12)
player1 = sprites.create(img`
    1 1 1 
    1 2 1 
    1 1 1 
    `, SpriteKindLegacy.Player)
controller.moveSprite(player1)
game.onUpdate(function () {
    if (player1.x <= 0) {
        player1.x = 0
    }
    if (player1.x >= 159) {
        player1.x = 159
    }
    if (player1.y <= 0) {
        player1.y = 0
    }
    if (player1.y >= 119) {
        player1.y = 119
    }
})
