const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

ctx.font = '10px courier'

// map' is an array of 50 strings that have a length
// of 50. Each character in a string represents a tile.
// The position of a character in a string can be seen
// as an x coordinate, and the position of a string in
// the array is a y coordinate.
var blank_row = '                                                  '
var map = Array.apply(null, new Array(50)).map(function() { return blank_row })

var TILE_SIZE = 10

var GRASS_CHARS = ',\'.`'
var GRASS_COLORS = ['green', 'forestgreen', 'lime', 'greenyellow']

function generate_grass() {
  for (var y = 0; y < map.length; y++) {

    for (var x = 0; x < map[y].length; x++) {
      map[y] = map[y].replace_at(x, util.random(GRASS_CHARS))
    }

    console.log(map[y])
  }
}

function draw_map() {
  for (var y = 0; y < map.length; y++) {
    var row = map[y]

    for (var x = 0; x < row.length; x++) {
      var tile = row[x]

      if (GRASS_CHARS.contains(tile)) {
        ctx.fillStyle = util.random(GRASS_COLORS)
        ctx.fillText(tile, x * TILE_SIZE, y * TILE_SIZE)
      }
    }
  }
}

ctx.fillRect(0, 0, canvas.width, canvas.height)

generate_grass()
draw_map()
