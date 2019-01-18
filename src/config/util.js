
function Local (key) {
  this.get = function () {
    return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : ''
  }
  this.set = function (obj) {
    localStorage.setItem(key, JSON.stringify(obj))
  }
  this.clear = function () {
    localStorage.removeItem(key)
  }
}

export const local = new Local('user')
