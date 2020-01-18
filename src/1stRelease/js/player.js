export default function createPlayer(playerId) {

    console.log('criou')
    const state = {
        playerId: NaN,
        position: {
            x: 0,
            y: 0
        },
        fragmentSprite: {
            x: 0,
            y: 0
        },
        image: new Image(),
        width: 24,
        height: 32,
        actions: {
            mvLeft: 0,
            mvUp: 0, 
            mvlRight: 0,
            mvDown: 0, 
        },
        speed: 5,
        move : {
            37: 'mvLeft',
            38: 'mvUp',
            39: 'mvRight',
            40: 'mvDown',
        },
        countAnime: 0
    }
    const observers = []
    state.playerId = playerId
    state.image.src = '../img/player.png'
    

    function draw(ctx) {
        ctx.drawImage(
            state.image, 
            state.fragmentSprite.x, 
            state.fragmentSprite.y,
            state.width,
            state.height,
            state.position.x,
            state.position.y,
            state.width,
            state.height
        )
      //  console.log(`moveu para x: ${state.position.x}`)
       // console.log(`moveu para y: ${state.position.y}`)
        animation()
    }
    
    function animation() {
        if (state.actions.mvLeft || state.actions.mvRight || state.actions.mvUp || state.actions.mvDown) {
            state.countAnime ++
            if (state.countAnime >= 40) {
                state.countAnime = 0
            }
            state.fragmentSprite.x = Math.floor(state.countAnime / 5) * state.width
        }
    }

    function getState() {
        return state
    }


    
    function subscribe(observerFunction) {
        observers.push(observerFunction)
    }

    function manageAction(command) {

        if(state.actions.mvRight === true) {
            state.position.x += state.speed
            state.fragmentSprite.y = state.height * 3
        }
        if(state.actions.mvLeft === true) {
            state.position.x -= state.speed
            state.fragmentSprite.y = state.height * 2
        }
        if(state.actions.mvUp === true) {
            state.position.y -= state.speed
            state.fragmentSprite.y = state.height * 1
        }
        if(state.actions.mvDown === true) {
            state.position.y += state.speed
            state.fragmentSprite.y = state.height * 0
        }
        __notify({
            type: 'move'
        })

    }

    function __notify(command) {
        for (const observerFunction of observers) {
            observerFunction(command)
        }
    }

    return {
        subscribe,
        manageAction,
        draw,
        getState,
    }
}