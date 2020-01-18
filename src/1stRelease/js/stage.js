export default function createStage() {

    const state = {
        stage: 1,
        image:  ''  
    }
    
    setScene()

    function setScene() {
        
        const img = {
            1: '../img/scene.png'
        }     
        const stage = state.stage
        state.image = new Image()
        state.image.src = img[stage]
    }

    function getState() {
        return state
    }

    function draw(ctx, cnv) {
        const stateStage = getState()
        ctx.drawImage(
            stateStage.image, 
            0, 
            0, 
            stateStage.image.width, 
            stateStage.image.height, 
            0, 
            0, 
            cnv.width, 
            cnv.height
        )
    }
        
    return  {
        draw,
    }
}