class Game {
    constructor() {
        this.animate = setInterval(() => {
            this.update()
            this.draw()
        }, 1)
        this.player1 = new Player(1)
        this.player2 = new Player(2)
        this.players = [this.player1, this.player2]
        this.attacks = []
        this.attacks.length = 2
        this.bgcolor = '#020202'
        this.gravity = 1
    }

    update() {
        // update pos by velocity
        this.players.forEach(player => {
            player.pos.x += player.vel.x * player.speed
            player.pos.y += player.vel.y * player.speed
        })
    }

    draw() {
        // bg
        ctx.fillStyle = this.bgcolor
        ctx.fillRect(0, 0, cw, ch)

        // players
        this.players.forEach(player => {
            ctx.fillStyle = player.color
            ctx.fillRect(player.pos.x, player.pos.y, player.size.width, player.size.height)
        })
    }
}

class Player {
    constructor(id) {
        this.colors = ['#00f', '#f00', '#ccc', '#ccc']
        this.color = this.colors[id - 1]
        this.dodgeColor = this.colors[id + 1]
        this.pos = {
            x: (id - 1) * 100,
            y: 0
        }
        this.size = {
            width: 75,
            height: 150
        }
        this.vel = {
            x: 0,
            y: 0
        }
        this.speed = 1
    }
}




const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const cw = 1366
const ch = 768
canvas.width = cw
canvas.height = ch

let game 

document.addEventListener('DOMContentLoaded', function main() {

    game = new Game()
    console.log(game);
     
    window.addEventListener('keydown', function move(e) {
        if (e.key === 'z') {

        }
    })
})