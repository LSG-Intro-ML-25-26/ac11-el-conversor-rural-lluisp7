controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nen,
    assets.animation`nena-animation-up`,
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nen,
    assets.animation`nen-animation-left`,
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nen,
    assets.animation`nena-animation-right`,
    500,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    nen,
    assets.animation`nen-animation-down`,
    500,
    false
    )
})
let nen: Sprite = null
scene.setBackgroundColor(1)
nen = sprites.create(assets.image`nen-front`, SpriteKind.Player)
controller.moveSprite(nen)
