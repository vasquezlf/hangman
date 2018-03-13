var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// c stands for 'context'. think of this as the paintbrush
var c = canvas.getContext('2d')

var hangTheMan = {
    // 1. Draw base
    0: function() {
        c.beginPath()
        c.moveTo(125, 550)
        c.lineTo(250, 550)
        c.strokeStyle = '#111'
        c.stroke()
    },
    // 2. Draw pillar
    1: function () {
    c.beginPath()
    c.moveTo(175, 550)
    c.lineTo(175, 100)
    c.strokeStyle = '#111'
    c.stroke()
    },

    // 3. Draw scaffold
    2: function () {
    c.beginPath()
    c.moveTo(125, 150)
    c.lineTo(350, 150)
    c.strokeStyle = '#111'
    c.stroke()
    },


    // 4. Draw rope
    3: function () {
    c.beginPath()
    c.moveTo(300, 150)
    c.lineTo(300, 220)
    c.strokeStyle = '#111'
    c.stroke()
    },

    //5. Draw Head
    4: function () {
    c.beginPath();
    c.arc(300, 250, 30, 0, Math.PI * 2, false)
    c.strokeStyle = '#333'
    c.stroke()
    },

    //6. Draw torso
    5: function () {
    c.beginPath();
    c.moveTo(300, 280)
    c.lineTo(300, 350)
    c.strokeStyle = '#111'
    c.stroke()
    },

    //7. Draw limbs
    6: function () {
        for (var i=0; i < 4; i++) {
            var x1 = [300, 300, 300, 300]
            var y1 = [290, 290, 350, 350]
            var x2 = [250, 350, 280, 320]
            var y2 = [320, 320, 420, 420]
            c.beginPath();
            c.moveTo(x1[i], y1[i])
            c.lineTo(x2[i], y2[i])
            c.strokeStyle = '#111'
            c.stroke()
        }
    }

// // 7a. Left Arm
// c.beginPath();
// c.moveTo(300, 290)
// c.lineTo(250, 320)
// c.strokeStyle = '#111'
// c.stroke()

// // 7b. Right Arm
// c.beginPath();
// c.moveTo(300, 290)
// c.lineTo(350, 320)
// c.strokeStyle = '#111'
// c.stroke()

// // 7c. Right Leg
// c.beginPath();
// c.moveTo(300, 350)
// c.lineTo(280, 420)
// c.strokeStyle = '#111'
// c.stroke()

// // 7d. Right Leg
// c.beginPath();
// c.moveTo(300, 350)
// c.lineTo(320, 420)
// c.strokeStyle = '#111'
// c.stroke()

}