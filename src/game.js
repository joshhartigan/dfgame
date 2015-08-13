const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.font = '10px courier'
ctx.fillRect(0, 0, canvas.width, canvas.height)

// 'map' is an array of 50 strings that have a length
// of 50. Each character in a string represents a tile.
// The position of a character in a string can be seen
// as an x coordinate, and the position of a string in
// the array is a y coordinate.
var blank_row = '                                                  '
var map = Array.apply(null, new Array(50)).map(function() { return blank_row })

var TILE_SIZE = 10

var GRASS_CHARS = ',\'.`'
var GRASS_COLOR = 'darkgreen'

var CURSOR_CHAR = 'X'
var CURSOR_COLOR = 'magenta'

function generate_grass() {
  for (var y = 0; y < map.length; y++) {

    for (var x = 0; x < map[y].length; x++) {
      map[y] = map[y].replace_at(x, util.random(GRASS_CHARS))
    }
  }
}

function draw_map() {
  // clear
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (var y = 0; y < map.length; y++) {
    var row = map[y]

    for (var x = 0; x < row.length; x++) {
      var tile = row[x]

      if (GRASS_CHARS.contains(tile)) {
        ctx.fillStyle = GRASS_COLOR
        ctx.fillText(tile, x * TILE_SIZE, y * TILE_SIZE)
      }

      if (tile === CURSOR_CHAR) {
        ctx.fillStyle = CURSOR_COLOR
        ctx.fillText(tile, x * TILE_SIZE, y * TILE_SIZE)
      }
    }
  }
}

cursor_x = (canvas.width / TILE_SIZE / 2)
cursor_y = (canvas.width / TILE_SIZE / 2)

function place_cursor() {
  map[cursor_y] = map[cursor_y].replace_at(cursor_x, CURSOR_CHAR)
}

document.addEventListener('keydown', function(event) {
  if (event.which === 38) {        // up
    cursor_y--
  } else if (event.which === 40) { // down
    cursor_y++
  } else if (event.which === 37) { // left
    cursor_x--
  } else if (event.which === 39) { // right
    cursor_x++
  }
})


setInterval(function() {
  generate_grass()
  place_cursor()
  draw_map()
}, 60)
