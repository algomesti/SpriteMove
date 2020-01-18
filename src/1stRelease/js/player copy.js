function Sprite(player) {
//Sprite = (player) => {

    this.mvLeft = this.mvUp = this.mvlRight = this.mvDown = 0 
    this.fragmentSpriteSourceX = this.fragmentSpriteSourceY = 0
    this.width = 24
    this.height = 32
    this.positionX = this.positionY = 0
    this.img = player
    this.speed = 1
    this.countAnime = 0

    this.move = function () {
        if(this.mvRight === true) {
            this.positionX += this.speed
            this.fragmentSpriteSourceY = this.height * 3
        }
        if(this.mvLeft === true) {
            this.positionX -= this.speed
            this.fragmentSpriteSourceY = this.height * 2
        }
        if(this.mvUp === true) {
            this.positionY -= this.speed
            this.fragmentSpriteSourceY = this.height * 1
        }
        if(this.mvDown === true) {
            this.positionY += this.speed
            this.fragmentSpriteSourceY = this.height * 0
        }
    }

    this.draw  = function (ctx) {
        ctx.drawImage(
            this.img, 
            this.fragmentSpriteSourceX, 
            this.fragmentSpriteSourceY,
            this.width,
            this.height,
            this.positionX,
            this.positionY,
            this.width,
            this.height
        )
        this.animation()
    }

    this.animation = function() {
        if (this.mvLeft || this.mvRight || this.mvUp || this.mvDown) {
            this.countAnime ++
            if (this.countAnime >= 40) {
                this.countAnime = 0
            }
            this.fragmentSpriteSourceX = Math.floor(this.countAnime / 5) * this.width
        }
    }


}