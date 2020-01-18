import createKeyboardListener from './keyboardListener.js'
import createPlayer from './player.js'
import createStage from './stage.js'
export default function createGame(document) {
        
    const cnv = document.querySelector('canvas')
    const ctx = cnv.getContext('2d')
    const player = createPlayer()
    const stage = createStage(1)

    function start() {   
        createKeyboardListener(document, player) 
        loop()             
    }

    function update () {
        player.manageAction()   
    }

    function render() { 
        ctx.clearRect(0, 0, cnv.width, cnv.height)
        stage.draw(ctx, cnv)
        player.draw(ctx, cnv)
    }

    function loop() {
        window.requestAnimationFrame(loop, cnv)
        update()
        render()
    }
    
    return {
        start,
    }
    
}
