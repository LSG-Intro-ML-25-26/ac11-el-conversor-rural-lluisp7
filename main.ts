//  --- 1. DEFINICIÓN DE CLASES Y CONSTANTES ---
namespace TipoSprite {
    export const Jugador = SpriteKind.create()
    export const Arbol = SpriteKind.create()
    export const ArbolGolpeado = SpriteKind.create()
    export const Casa = SpriteKind.create()
    export const Gallina = SpriteKind.create()
    export const Cabra = SpriteKind.create()
    export const Patata = SpriteKind.create()
    export const Huevo = SpriteKind.create()
    export const Caballo = SpriteKind.create()
    export const Valla = SpriteKind.create()
}

//  --- 2. ASSETS (IMÁGENES) ---
let img_valla = img`
    . . . . . . . . . . . . . . . .
    . . 1 1 . . 1 1 . . 1 1 . . . .
    . . 1 1 . . 1 1 . . 1 1 . . . .
    . . 1 1 . . 1 1 . . 1 1 . . . .
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . .
    . . 1 1 . . 1 1 . . 1 1 . . . .
    . . 1 1 . . 1 1 . . 1 1 . . . .
    . . 1 1 . . 1 1 . . 1 1 . . . .
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . .
    . . 1 1 . . 1 1 . . 1 1 . . . .
    . . 1 1 . . 1 1 . . 1 1 . . . .
    . . 1 1 . . 1 1 . . 1 1 . . . .
    . . 1 1 . . 1 1 . . 1 1 . . . .
    . . . . . . . . . . . . . . . .
`
//  Tu gallina blanca
let img_gallina = img`
    . . . . . . . . . . . . . . . .
    . . . . . f f f f f f . . . . .
    . . . . f 1 1 1 1 1 1 f . . . .
    . . . f 1 1 f 1 1 f 1 1 f . . .
    . . f 1 1 1 1 1 1 1 1 1 1 f . .
    . . f 1 1 1 1 4 4 1 1 1 1 f . .
    . . f 1 1 1 1 4 4 1 1 1 1 f . .
    . . f 1 1 1 1 1 1 1 1 1 1 f . .
    . . . f 1 1 1 1 1 1 1 1 1 f . .
    . . . . f 1 1 1 1 1 1 f f . . .
    . . . . f 1 1 1 1 1 1 f . . . .
    . . . . f 4 f f f f 4 f . . . .
    . . . f 4 f 4 f f 4 f 4 f . . .
`
let img_arbol = img`
    ............ffffffff............
    ...........ff777777ff...........
    ..........ff77777777ff..........
    ..........f7777777777ff.........
    .........f777777777777f.........
    .......fff777777777777ff........
    ......ff777777777777777ff.......
    .....ff77777777777777777ff......
    ....ff7777777777777777777fff....
    ...ff7777777777777777777777ff...
    ..ff777777777777777777777777ff..
    .ff77777777777777777777777777ff.
    ff7777777777777777777777777777ff
    f777777777777777777777777777777f
    f777777777777777777777777777777f
    f777777777777777777777777777777f
    f777777777777777777777777777777f
    f777777777777777777777777777777f
    f777777777777777777777777777777f
    ffffffffffffeeeeeeeeffffffff777f
    .........feeeeeeeeeeeef....fffff
    .........feeeeeeeeeeeef.........
    .........feeeeeeeeeeeef.........
`
let img_tocon = img`
    ................................
    .......fffffffffffffffff........
    .......feeeeeeeeeeeeeeef........
    .......fedddddddddddddef........
    .......fedeeeeeeeeeeedef........
    .......fededddddddddedef........
    .......fededeeeeeeededef........
    .......fededeeeeeeededef........
    .......fededddddddddedef........
    .......fedeeeeeeeeeeedef........
    .......fedddddddddddddef........
    .......feeeeeeeeeeeeeeef........
    .......feeeeeeeeeeeeeeef........
    .......feeeeeeeeeeeeeeef........
    .......fffffffffffffffff........
`
let img_huevo = img`
    . . . . . . . f f . . . . . . .
    . . . . . . f d d f . . . . . .
    . . . . . f d d d d f . . . . .
    . . . . f d d d d d d f . . . .
    . . . f d d d d d d d d f . . .
    . . . f d d d d d d d d f . . .
    . . f d d d d d d d d d d f . .
    . f d d d d d d d d d d d d f .
    . f d d d d d d d d d d d d f .
    . f d d d d d d d d d d d d f .
    . f d d d d d d d d d d d d f .
    . . f d d d d d d d d d d f . .
    . . f d d d d d d d d d d f . .
`
let img_cabra = img`
    . . . . . . . . . . . . . . . .
    . . . f . . . . . f . . . . . .
    . . f 1 f . . . f 1 f . . . . .
    . f 1 1 1 f f f 1 1 1 f . . . .
    . f 1 1 1 1 1 1 1 1 1 f . . . .
    . f f 1 1 1 1 1 1 1 1 f . . . .
    . . f 1 f 1 1 1 1 f 1 f . . . .
    . . f 1 1 1 1 1 1 1 1 f . . f .
    . . f 1 1 1 f f 1 1 1 f . f 1 f
    . . . f 1 1 1 1 1 1 1 1 f 1 1 f
    . . . f 1 1 1 1 1 1 1 1 1 1 f .
    . . . f 1 1 1 1 1 1 1 1 f f . .
    . . . f 1 f f f 1 f f 1 f . . .
    . . . f f . . f f . . f f . . .
`
let img_caballo = img`
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . f f e e e e f . . . . .
    . . f f e e e e e e 4 f . . . .
    . f e e e f 1 e 4 4 4 f . . . .
    f e e e e e e e e 4 e e f . . .
    f e e e e e e 4 4 e e f . . . .
    . f f f f f f e e e e f . . . .
    . . f f e e e e e e e e f f . .
    . . . f e e e e e e e e e e f .
    . . . f e e e e e e e e e f e e f
    . . . f e f f f e f f e f f f .
    . . . f f . . f f . . f f . . .
`
let img_patata = img`
    . . . . . . . . . . . . . . . . .
    . . . . . . . . f f f f f . . . .
    . . . . . . . f 4 4 4 4 4 f . . .
    . . . . . . f 4 4 4 4 4 4 4 f . .
    . . . . f f 4 4 4 4 4 4 4 4 f . .
    . . . f 4 4 4 4 4 4 4 4 4 4 f . .
    . . f 4 4 4 4 4 4 4 4 4 4 4 f . .
    . f 4 4 4 4 4 4 4 4 4 4 4 4 f . .
    . f 4 4 4 4 4 4 4 4 4 4 4 f f . .
    . f 4 4 4 4 4 4 4 4 4 4 4 f . . .
    . f 4 4 4 4 4 4 4 4 4 4 4 f . . .
    . f 4 4 4 4 4 4 4 4 4 f f . . . .
`
let img_casa = img`
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    .......................ee.......................
    ......................e22e......................
    .....................e2222e.....................
    ....................e222222e....................
    ...................e22222222e...................
    ..................e2222222222e..................
    .................e222222222222e.................
    ................e22222222222222e................
    ...............e2222222222222222e...............
    ..............ee2222222222222222ee..............
    .............e22222222222222222222e.............
    ............e2222222222222222222222e............
    ...........eeeeeeeeeeeeeeeeeeeeeeeeee...........
    ...........edddddddddddddddddddddddde...........
    ...........edddddddddddddddddddddddde...........
    ...........edddddddddddddddddddddddde...........
    ...........eddd99dddddddddddd99ddddde...........
    ...........eddd99dddddddddddd99ddddde...........
    ...........edddddddddddddddddddddddde...........
    ...........edddddddddeeeeedddddddddde...........
    ...........eddddddddde444edddddddddde...........
    ...........eddddddddde444edddddddddde...........
    ...........eddddddddde444edddddddddde...........
    ...........eddddddddde444edddddddddde...........
    ...........eeeeeeeeeeeeeeeeeeeeeeeeee...........
`
//  --- 3. VARIABLES GLOBALES ---
let inventario_madera = 0.0
let mis_productos = {
    "gallinas" : 0,
    "cabras" : 0,
    "patatas" : 0.0,
    "huevos" : 0,
    "caballos" : 0,
}

let comerciante_cercano : Sprite = null
let sprite_jugador : Sprite = null
//  --- 4. FUNCIONES DE LÓGICA (Definidas antes de usarse) ---
function obtener_nombre_producto(tipo_kind: number): string {
    if (tipo_kind == TipoSprite.Gallina) {
        return "Gallina"
    } else if (tipo_kind == TipoSprite.Cabra) {
        return "Cabra"
    } else if (tipo_kind == TipoSprite.Patata) {
        return "Patatas (Kg)"
    } else if (tipo_kind == TipoSprite.Huevo) {
        return "Huevos"
    } else if (tipo_kind == TipoSprite.Caballo) {
        return "Caballo"
    }
    
    return "Desconocido"
}

function calcular_coste_leña(tipo_kind: number, cantidad: number): number {
    let ratio: number;
    let coste_total = 0
    if (tipo_kind == TipoSprite.Gallina) {
        coste_total = cantidad * 6
    } else if (tipo_kind == TipoSprite.Cabra) {
        coste_total = cantidad * 5
    } else if (tipo_kind == TipoSprite.Patata) {
        ratio = 2 / 1.5
        coste_total = cantidad * ratio
    } else if (tipo_kind == TipoSprite.Huevo) {
        coste_total = cantidad * 0.25
    } else if (tipo_kind == TipoSprite.Caballo) {
        coste_total = cantidad * 12
    }
    
    return Math.round(coste_total * 100) / 100
}

function validar_entrada(tipo_kind: number, cantidad: number): boolean {
    if (cantidad <= 0) {
        return false
    }
    
    let es_animal = tipo_kind == TipoSprite.Gallina || tipo_kind == TipoSprite.Cabra || tipo_kind == TipoSprite.Caballo || tipo_kind == TipoSprite.Huevo
    if (es_animal && cantidad % 1 != 0) {
        game.showLongText("¡Error! No puedes comerciar medio animal/huevo.", DialogLayout.Bottom)
        return false
    }
    
    return true
}

function actualizar_stock(kind: number, qty: number) {
    if (kind == TipoSprite.Gallina) {
        mis_productos["gallinas"] += qty
    } else if (kind == TipoSprite.Cabra) {
        mis_productos["cabras"] += qty
    } else if (kind == TipoSprite.Patata) {
        mis_productos["patatas"] += qty
    } else if (kind == TipoSprite.Huevo) {
        mis_productos["huevos"] += qty
    } else if (kind == TipoSprite.Caballo) {
        mis_productos["caballos"] += qty
    }
    
}

function round(n: number): number {
    return Math.round(n * 100) / 100
}

function realizar_intercambio() {
    let mensaje: string;
    let mensaje_error: string;
    
    if (!comerciante_cercano) {
        return
    }
    
    if (!sprite_jugador.overlapsWith(comerciante_cercano)) {
        comerciante_cercano = null
        return
    }
    
    let tipo_prod = comerciante_cercano.kind()
    let nombre_prod = obtener_nombre_producto(tipo_prod)
    let cantidad_deseada = game.askForNumber("¿Cuántos " + nombre_prod + " quieres?", 2)
    if (!validar_entrada(tipo_prod, cantidad_deseada)) {
        return
    }
    
    let coste = calcular_coste_leña(tipo_prod, cantidad_deseada)
    if (inventario_madera >= coste) {
        inventario_madera -= coste
        actualizar_stock(tipo_prod, cantidad_deseada)
        mensaje = "¡Trato hecho!\n"
        mensaje += "Comprado: " + ("" + cantidad_deseada) + " " + nombre_prod + "\n"
        mensaje += "Coste: " + ("" + coste) + " leña.\n"
        mensaje += "Te queda: " + ("" + round(inventario_madera)) + " leña."
        game.showLongText(mensaje, DialogLayout.Bottom)
        sprite_jugador.sayText("+ " + nombre_prod, 1000)
        music.baDing.play()
    } else {
        mensaje_error = `No tienes suficiente leña.
`
        mensaje_error += "Necesitas: " + ("" + coste) + " kg\n"
        mensaje_error += "Tienes: " + ("" + round(inventario_madera)) + " kg"
        game.showLongText(mensaje_error, DialogLayout.Bottom)
        music.buzzer.play()
    }
    
}

//  --- 5. FUNCIONES DEL MUNDO (AQUÍ ESTÁ LA CORRECCIÓN) ---
function crear_limites_granja() {
    let v1: Sprite;
    let v2: Sprite;
    let v3: Sprite;
    let v4: Sprite;
    let min_x = -50
    let max_x = 250
    let min_y = -50
    let max_y = 200
    for (let x = min_x; x < max_x + 16; x += 16) {
        v1 = sprites.create(img_valla, TipoSprite.Valla)
        v1.setPosition(x, min_y)
        v2 = sprites.create(img_valla, TipoSprite.Valla)
        v2.setPosition(x, max_y)
    }
    for (let y = min_y; y < max_y + 16; y += 16) {
        v3 = sprites.create(img_valla, TipoSprite.Valla)
        v3.setPosition(min_x, y)
        v4 = sprites.create(img_valla, TipoSprite.Valla)
        v4.setPosition(max_x, y)
    }
}

function choca_con_tipo(sprite_chequeo: Sprite, tipo: number): boolean {
    let lista = sprites.allOfKind(tipo)
    for (let candidato of lista) {
        if (candidato != sprite_chequeo && sprite_chequeo.overlapsWith(candidato)) {
            return true
        }
        
    }
    return false
}

function crear_arbol_aleatorio() {
    let x_rand: number;
    let y_rand: number;
    let choca: boolean;
    let nuevo_arbol = sprites.create(img_arbol, TipoSprite.Arbol)
    for (let intento = 0; intento < 20; intento++) {
        x_rand = randint(-30, 230)
        y_rand = randint(-30, 180)
        nuevo_arbol.setPosition(x_rand, y_rand)
        choca = false
        if (nuevo_arbol.overlapsWith(sprite_jugador)) {
            choca = true
        }
        
        if (!choca && choca_con_tipo(nuevo_arbol, TipoSprite.Casa)) {
            choca = true
        }
        
        if (!choca && choca_con_tipo(nuevo_arbol, TipoSprite.Gallina)) {
            choca = true
        }
        
        if (!choca && choca_con_tipo(nuevo_arbol, TipoSprite.Cabra)) {
            choca = true
        }
        
        if (!choca && choca_con_tipo(nuevo_arbol, TipoSprite.Patata)) {
            choca = true
        }
        
        if (!choca && choca_con_tipo(nuevo_arbol, TipoSprite.Huevo)) {
            choca = true
        }
        
        if (!choca && choca_con_tipo(nuevo_arbol, TipoSprite.Caballo)) {
            choca = true
        }
        
        if (!choca && choca_con_tipo(nuevo_arbol, TipoSprite.Arbol)) {
            choca = true
        }
        
        if (!choca) {
            return
        }
        
    }
}

//  --- 6. EVENTOS Y FÍSICA ---
function golpear_arbol(arbol: Sprite) {
    
    music.thump.play()
    scene.cameraShake(2, 100)
    arbol.setImage(img_tocon)
    pause(500)
    sprites.destroy(arbol)
    inventario_madera += 1
    sprite_jugador.sayText("+1 Madera", 1000)
    crear_arbol_aleatorio()
}

function on_overlap_solido(player: Sprite, obstaculo: Sprite) {
    if (player.x < obstaculo.x) {
        player.x -= 2
    } else {
        player.x += 2
    }
    
    if (player.y < obstaculo.y) {
        player.y -= 2
    } else {
        player.y += 2
    }
    
}

sprites.onOverlap(TipoSprite.Jugador, TipoSprite.Valla, on_overlap_solido)
sprites.onOverlap(TipoSprite.Jugador, TipoSprite.Arbol, on_overlap_solido)
function on_overlap_comercio(jugador_sprite: Sprite, otro_sprite: Sprite) {
    
    comerciante_cercano = otro_sprite
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function movimiento_arriba() {
    animation.runImageAnimation(sprite_jugador, assets.animation`nena-animation-up`, 500, false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function movimiento_abajo() {
    animation.runImageAnimation(sprite_jugador, assets.animation`nen-animation-down`, 500, false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function movimiento_izquierda() {
    animation.runImageAnimation(sprite_jugador, assets.animation`nen-animation-left`, 500, false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function movimiento_derecha() {
    animation.runImageAnimation(sprite_jugador, assets.animation`nena-animation-right0`, 500, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function boton_a_presionado() {
    let d: number;
    let arbol_tocado = null
    let distancia_minima = 32
    //  Busca árbol normal
    for (let arbol_normal of sprites.allOfKind(TipoSprite.Arbol)) {
        d = Math.sqrt((sprite_jugador.x - arbol_normal.x) ** 2 + (sprite_jugador.y - arbol_normal.y) ** 2)
        if (d < distancia_minima) {
            arbol_tocado = arbol_normal
            break
        }
        
    }
    if (arbol_tocado) {
        golpear_arbol(arbol_tocado)
    } else {
        realizar_intercambio()
    }
    
})
//  --- 7. CONFIGURACIÓN INICIAL ---
scene.setBackgroundColor(7)
sprite_jugador = sprites.create(assets.image`nen-front`, TipoSprite.Jugador)
controller.moveSprite(sprite_jugador)
scene.cameraFollowSprite(sprite_jugador)
sprite_jugador.setPosition(80, 60)
let mi_casa = sprites.create(img_casa, TipoSprite.Casa)
mi_casa.setPosition(130, 30)
let npc_gallina = sprites.create(img_gallina, TipoSprite.Gallina)
npc_gallina.setPosition(30, 30)
let npc_huevo = sprites.create(img_huevo, TipoSprite.Huevo)
npc_huevo.setPosition(130, 90)
let npc_patata = sprites.create(img_patata, TipoSprite.Patata)
npc_patata.setPosition(30, 90)
let npc_cabra = sprites.create(img_cabra, TipoSprite.Cabra)
npc_cabra.setPosition(100, 100)
let npc_caballo = sprites.create(img_caballo, TipoSprite.Caballo)
npc_caballo.setPosition(80, 30)
sprites.onOverlap(TipoSprite.Jugador, TipoSprite.Casa, function on_overlap_info_casa(jugador: Sprite, casa: Sprite) {
    if (controller.A.isPressed()) {
        game.showLongText("Inventario Leña: " + ("" + inventario_madera) + " kg", DialogLayout.Top)
    }
    
})
sprites.onOverlap(TipoSprite.Jugador, TipoSprite.Gallina, on_overlap_comercio)
sprites.onOverlap(TipoSprite.Jugador, TipoSprite.Huevo, on_overlap_comercio)
sprites.onOverlap(TipoSprite.Jugador, TipoSprite.Patata, on_overlap_comercio)
sprites.onOverlap(TipoSprite.Jugador, TipoSprite.Cabra, on_overlap_comercio)
sprites.onOverlap(TipoSprite.Jugador, TipoSprite.Caballo, on_overlap_comercio)
//  IMPORTANTE: Estas llamadas están AHORA AL FINAL, después de que se definan las funciones.
crear_limites_granja()
for (let i = 0; i < 2; i++) {
    crear_arbol_aleatorio()
}
