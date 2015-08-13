/* namespace */ var util = {}

util.random = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

util.range = function(limit) {
  return Array.apply(null, Array(limit)).map(function (_, i) {
    return i
  })
}

String.prototype.replace_at = function(i, chr) {
  return this.substr(0, i) + chr + this.substr(i + chr.length);
}

String.prototype.contains = function(str) {
  return this.indexOf(str) >= 0
}
