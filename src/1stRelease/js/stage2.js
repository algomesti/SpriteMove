window.onload = () => {

    document.addEventListener('keydown', keydownHandle, false )
    document.addEventListener('keyup', keyupHandle, false )

    const LEFT = 37,  UP = 38,  RIGHT = 39,  DOWN = 40  
    const cnv = document.querySelector('canvas')
    const ctx = cnv.getContext('2d')

    const spriteSheet = new Image();
    spriteSheet.src = 'img/player.png'
    const scene = new Image();
    scene.src = 'img/scene.png'
    const player = new Sprite(spriteSheet)

    function keydownHandle(e) {
        switch(e.keyCode) {
            case LEFT:
                player.mvLeft = true
                player.mvUp = false
                player.mvRight = false
                player.mvDown = false
                break
            case UP:
                player.mvLeft = false
                player.mvUp = true
                player.mvRight = false
                player.mvDown = false
                break
            case RIGHT:
                player.mvLeft = false
                player.mvUp = false
                player.mvRight = true
                player.mvDown = false
                break
            case DOWN:
                player.mvLeft = false
                player.mvUp = false
                player.mvRight = false
                player.mvDown = true
                break
        }
    }

    function keyupHandle(e) {
        switch(e.keyCode) {
            case LEFT:
                player.mvLeft = false
                break
            case UP:
                player.mvUp = false
                break
            case RIGHT:
                player.mvRight = false
                break
            case DOWN:
                player.mvDown = false
                break
        }
    }

    spriteSheet.onload = () => {
        init()
    }

    const init  = () => {
        loop()        
    }

    const update = () => {
        player.move()   
    }

    const draw = () => {
        
        ctx.clearRect(0, 0, cnv.width, cnv.height)
        ctx.drawImage(scene, 0, 0, scene.width, scene.height, 0, 0, cnv.width, cnv.height)
        player.draw(ctx)

    }

    const loop = () => {
        window.requestAnimationFrame(loop, cnv)
        update()
        draw()
    }
}
