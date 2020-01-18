import createKeyboardListener from './keyboardListener.js'
import createPlayer from './player.js'
import createStage from './stage.js'
export default function createGame(document, playerId) {
    
    const state = {
        players : [],
        stage : NaN
    }
    
    const cnv = document.querySelector('canvas')
    const ctx = cnv.getContext('2d')
    const player = createPlayer(playerId)
    player.subscribe(update)

    state.players.push(player)
    state.stage = createStage(1)

    const keyboardListener = createKeyboardListener(document, player)
    //keyboardListener.subscribe(player.setMove)

    keyboardListener.subscribe(player.manageAction)


    function start() {    
        loop()             
    }

    function update () {
       // player.move()   
    }

    function render() { 
        ctx.clearRect(0, 0, cnv.width, cnv.height)
        state.stage.draw(ctx, cnv)
        for (const player of state.players) {
            player.draw(ctx, cnv)
        }
    }

    const loop = function() {
        window.requestAnimationFrame(loop, cnv)
        update()
        render()
    }
    
    return {
        start,
    }
    
}
