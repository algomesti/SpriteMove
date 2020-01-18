export default function createKeyboardListener(document, player) {

    document.addEventListener('keydown', __keydownHandle, false)
    document.addEventListener('keyup', __keyupHandle, false)

    function __keydownHandle(event) {

        const code = event.keyCode
        const statePlayer = player.getState()
        const func = statePlayer.move[code]
        statePlayer.actions[func] = true;
    }

    function __keyupHandle(e) {

        const code = event.keyCode
        const statePlayer = player.getState()
        const func = statePlayer.move[code]
        statePlayer.actions[func] = false;
    }
}
