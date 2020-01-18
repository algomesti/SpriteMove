export default function createKeyboardListener(document, player) {

    const state = {
        player : NaN,
        observers: []
    }

    state.player = player

    document.addEventListener('keydown', __keydownHandle, false)
    document.addEventListener('keyup', __keyupHandle, false)

    function registerPlayerId(player) {
        state.player = player
    }

    function subscribe(observerFunction) {
        state.observers.push(observerFunction)
    }

    function __notify(command) {
        for (const observerFunction of state.observers) {
            observerFunction(command)
        }
    }

    function __keydownHandle(event) {

        const code = event.keyCode
        const statePlayer = state.player.getState()
        const func = statePlayer.move[code]
        statePlayer.actions[func] = true;



        const command = {
            type: 'keydown-event',
            keyPressed: event.keyCode
        }
        __notify(command)
    }

    function __keyupHandle(e) {

        const code = event.keyCode
        const statePlayer = state.player.getState()
        const func = statePlayer.move[code]
        statePlayer.actions[func] = false;
        console.log(func)
        console.log(statePlayer)

        const command = {
            type: 'keyup-event',
            keyPressed: event.keyCode
        }
        __notify(command)
    }

    return {
        registerPlayerId,
        subscribe
    }
}
