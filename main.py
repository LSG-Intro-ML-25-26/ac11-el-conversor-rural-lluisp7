# --- 1. DEFINICIÓN DE CLASES Y CONSTANTES ---
@namespace
class TipoSprite:
    Jugador = SpriteKind.create()
    Arbol = SpriteKind.create()
    ArbolGolpeado = SpriteKind.create()
    Casa = SpriteKind.create()
    Gallina = SpriteKind.create()
    Cabra = SpriteKind.create()
    Patata = SpriteKind.create()
    Huevo = SpriteKind.create()
    Caballo = SpriteKind.create()
    Valla = SpriteKind.create()

# --- 2. ASSETS (IMÁGENES) ---

img_valla = img("""
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
""")

# Tu gallina blanca
img_gallina = img("""
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
""")

img_arbol = img("""
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
""")

img_tocon = img("""
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
""")

img_huevo = img("""
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
""")

img_cabra = img("""
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
""")

img_caballo = img("""
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
""")

img_patata = img("""
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
""")

img_casa = img("""
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
""")

# --- 3. VARIABLES GLOBALES ---
inventario_madera = 0.0
mis_productos = {
    "gallinas": 0,
    "cabras": 0,
    "patatas": 0.0,
    "huevos": 0,
    "caballos": 0
}

comerciante_cercano: Sprite = None
sprite_jugador: Sprite = None

# --- 4. FUNCIONES DE LÓGICA (Definidas antes de usarse) ---

def obtener_nombre_producto(tipo_kind: number):
    if tipo_kind == TipoSprite.Gallina:
        return "Gallina"
    elif tipo_kind == TipoSprite.Cabra:
        return "Cabra"
    elif tipo_kind == TipoSprite.Patata:
        return "Patatas (Kg)"
    elif tipo_kind == TipoSprite.Huevo:
        return "Huevos"
    elif tipo_kind == TipoSprite.Caballo:
        return "Caballo"
    return "Desconocido"

def calcular_coste_leña(tipo_kind: number, cantidad: number):
    coste_total = 0
    if tipo_kind == TipoSprite.Gallina:
        coste_total = cantidad * 6
    elif tipo_kind == TipoSprite.Cabra:
        coste_total = cantidad * 5
    elif tipo_kind == TipoSprite.Patata:
        ratio = 2 / 1.5
        coste_total = cantidad * ratio
    elif tipo_kind == TipoSprite.Huevo:
        coste_total = cantidad * 0.25
    elif tipo_kind == TipoSprite.Caballo:
        coste_total = cantidad * 12
    return Math.round(coste_total * 100) / 100

def validar_entrada(tipo_kind: number, cantidad: number):
    if cantidad <= 0:
        return False
    es_animal = (tipo_kind == TipoSprite.Gallina or
                 tipo_kind == TipoSprite.Cabra or
                 tipo_kind == TipoSprite.Caballo or
                 tipo_kind == TipoSprite.Huevo)
    if es_animal and (cantidad % 1 != 0):
        game.show_long_text("¡Error! No puedes comerciar medio animal/huevo.", DialogLayout.BOTTOM)
        return False
    return True

def actualizar_stock(kind, qty):
    if kind == TipoSprite.Gallina: mis_productos["gallinas"] += qty
    elif kind == TipoSprite.Cabra: mis_productos["cabras"] += qty
    elif kind == TipoSprite.Patata: mis_productos["patatas"] += qty
    elif kind == TipoSprite.Huevo: mis_productos["huevos"] += qty
    elif kind == TipoSprite.Caballo: mis_productos["caballos"] += qty

def round(n):
    return Math.round(n * 100) / 100

def realizar_intercambio():
    global inventario_madera, comerciante_cercano
    if not comerciante_cercano:
        return
    if not sprite_jugador.overlaps_with(comerciante_cercano):
        comerciante_cercano = None
        return

    tipo_prod = comerciante_cercano.kind()
    nombre_prod = obtener_nombre_producto(tipo_prod)
    
    cantidad_deseada = game.ask_for_number("¿Cuántos " + nombre_prod + " quieres?", 2)
    
    if not validar_entrada(tipo_prod, cantidad_deseada):
        return
        
    coste = calcular_coste_leña(tipo_prod, cantidad_deseada)
    
    if inventario_madera >= coste:
        inventario_madera -= coste
        actualizar_stock(tipo_prod, cantidad_deseada)
        
        mensaje = "¡Trato hecho!\n"
        mensaje += "Comprado: " + str(cantidad_deseada) + " " + nombre_prod + "\n"
        mensaje += "Coste: " + str(coste) + " leña.\n"
        mensaje += "Te queda: " + str(round(inventario_madera)) + " leña."
        
        game.show_long_text(mensaje, DialogLayout.BOTTOM)
        sprite_jugador.say_text("+ " + nombre_prod, 1000)
        music.ba_ding.play()
    else:
        mensaje_error = "No tienes suficiente leña.\n"
        mensaje_error += "Necesitas: " + str(coste) + " kg\n"
        mensaje_error += "Tienes: " + str(round(inventario_madera)) + " kg"
        game.show_long_text(mensaje_error, DialogLayout.BOTTOM)
        music.buzzer.play()

# --- 5. FUNCIONES DEL MUNDO (AQUÍ ESTÁ LA CORRECCIÓN) ---

def crear_limites_granja():
    min_x = -50
    max_x = 250
    min_y = -50
    max_y = 200
    
    for x in range(min_x, max_x + 16, 16):
        v1 = sprites.create(img_valla, TipoSprite.Valla)
        v1.set_position(x, min_y)
        v2 = sprites.create(img_valla, TipoSprite.Valla)
        v2.set_position(x, max_y)

    for y in range(min_y, max_y + 16, 16):
        v3 = sprites.create(img_valla, TipoSprite.Valla)
        v3.set_position(min_x, y)
        v4 = sprites.create(img_valla, TipoSprite.Valla)
        v4.set_position(max_x, y)

def choca_con_tipo(sprite_chequeo: Sprite, tipo: number):
    lista = sprites.all_of_kind(tipo)
    for candidato in lista:
        if candidato != sprite_chequeo and sprite_chequeo.overlaps_with(candidato):
            return True
    return False

def crear_arbol_aleatorio():
    nuevo_arbol = sprites.create(img_arbol, TipoSprite.Arbol)
    
    for intento in range(20):
        x_rand = randint(-30, 230)
        y_rand = randint(-30, 180)
        nuevo_arbol.set_position(x_rand, y_rand)
        
        choca = False
        if nuevo_arbol.overlaps_with(sprite_jugador): choca = True
        if not choca and choca_con_tipo(nuevo_arbol, TipoSprite.Casa): choca = True
        if not choca and choca_con_tipo(nuevo_arbol, TipoSprite.Gallina): choca = True
        if not choca and choca_con_tipo(nuevo_arbol, TipoSprite.Cabra): choca = True
        if not choca and choca_con_tipo(nuevo_arbol, TipoSprite.Patata): choca = True
        if not choca and choca_con_tipo(nuevo_arbol, TipoSprite.Huevo): choca = True
        if not choca and choca_con_tipo(nuevo_arbol, TipoSprite.Caballo): choca = True
        if not choca and choca_con_tipo(nuevo_arbol, TipoSprite.Arbol): choca = True
        
        if not choca:
            return

# --- 6. EVENTOS Y FÍSICA ---

def golpear_arbol(arbol: Sprite):
    global inventario_madera
    music.thump.play()
    scene.camera_shake(2, 100)
    
    arbol.set_image(img_tocon)
    pause(500)
    sprites.destroy(arbol)
    
    inventario_madera += 1
    sprite_jugador.say_text("+1 Madera", 1000)
    crear_arbol_aleatorio()

def on_overlap_solido(player, obstaculo):
    if player.x < obstaculo.x: player.x -= 2
    else: player.x += 2
    if player.y < obstaculo.y: player.y -= 2
    else: player.y += 2

sprites.on_overlap(TipoSprite.Jugador, TipoSprite.Valla, on_overlap_solido)
sprites.on_overlap(TipoSprite.Jugador, TipoSprite.Arbol, on_overlap_solido)

def on_overlap_comercio(jugador_sprite, otro_sprite):
    global comerciante_cercano
    comerciante_cercano = otro_sprite
    
def on_overlap_info_casa(jugador, casa):
    if controller.A.is_pressed():
        game.show_long_text("Inventario Leña: " + str(inventario_madera) + " kg", DialogLayout.TOP)

def movimiento_arriba():
    animation.run_image_animation(sprite_jugador, assets.animation("nena-animation-up"), 500, False)
controller.up.on_event(ControllerButtonEvent.PRESSED, movimiento_arriba)

def movimiento_abajo():
    animation.run_image_animation(sprite_jugador, assets.animation("nen-animation-down"), 500, False)
controller.down.on_event(ControllerButtonEvent.PRESSED, movimiento_abajo)

def movimiento_izquierda():
    animation.run_image_animation(sprite_jugador, assets.animation("nen-animation-left"), 500, False)
controller.left.on_event(ControllerButtonEvent.PRESSED, movimiento_izquierda)

def movimiento_derecha():
    animation.run_image_animation(sprite_jugador, assets.animation("nena-animation-right0"), 500, False)
controller.right.on_event(ControllerButtonEvent.PRESSED, movimiento_derecha)

def boton_a_presionado():
    arbol_tocado = None
    distancia_minima = 32
    
    # Busca árbol normal
    for arbol_normal in sprites.all_of_kind(TipoSprite.Arbol):
        d = Math.sqrt((sprite_jugador.x - arbol_normal.x)**2 + (sprite_jugador.y - arbol_normal.y)**2)
        if d < distancia_minima:
            arbol_tocado = arbol_normal
            break
            
    if arbol_tocado:
        golpear_arbol(arbol_tocado)
    else:
        realizar_intercambio()

controller.A.on_event(ControllerButtonEvent.PRESSED, boton_a_presionado)

# --- 7. CONFIGURACIÓN INICIAL ---

scene.set_background_color(7)

sprite_jugador = sprites.create(assets.image("nen-front"), TipoSprite.Jugador)
controller.move_sprite(sprite_jugador)
scene.camera_follow_sprite(sprite_jugador)
sprite_jugador.set_position(80, 60)

mi_casa = sprites.create(img_casa, TipoSprite.Casa)
mi_casa.set_position(130, 30)

npc_gallina = sprites.create(img_gallina, TipoSprite.Gallina)
npc_gallina.set_position(30, 30)

npc_huevo = sprites.create(img_huevo, TipoSprite.Huevo)
npc_huevo.set_position(130, 90)

npc_patata = sprites.create(img_patata, TipoSprite.Patata)
npc_patata.set_position(30, 90)

npc_cabra = sprites.create(img_cabra, TipoSprite.Cabra)
npc_cabra.set_position(100, 100)

npc_caballo = sprites.create(img_caballo, TipoSprite.Caballo)
npc_caballo.set_position(80, 30)

sprites.on_overlap(TipoSprite.Jugador, TipoSprite.Casa, on_overlap_info_casa)
sprites.on_overlap(TipoSprite.Jugador, TipoSprite.Gallina, on_overlap_comercio)
sprites.on_overlap(TipoSprite.Jugador, TipoSprite.Huevo, on_overlap_comercio)
sprites.on_overlap(TipoSprite.Jugador, TipoSprite.Patata, on_overlap_comercio)
sprites.on_overlap(TipoSprite.Jugador, TipoSprite.Cabra, on_overlap_comercio)
sprites.on_overlap(TipoSprite.Jugador, TipoSprite.Caballo, on_overlap_comercio)

# IMPORTANTE: Estas llamadas están AHORA AL FINAL, después de que se definan las funciones.
crear_limites_granja()

for i in range(2):
    crear_arbol_aleatorio()