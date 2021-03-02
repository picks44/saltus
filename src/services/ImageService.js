export default {
  getCeImages() {
    const imageList = require
      .context('@/assets/img/gfa-closed-end', false, /^.*\.png$/)
      .keys()
    let imageObjects = []
    let element = {}
    imageList.forEach((item, index) => {
      let name = item.replace('./', '')
      let path = item.replace('./', 'gfa-closed-end/')
      element = {
        id: index,
        name: name,
        path: path
      }
      imageObjects.push(element)
    })
    return imageObjects
  },
  getOeImages() {
    const imageList = require
      .context('@/assets/img/gfa-open-end', false, /^.*\.png$/)
      .keys()
    let imageObjects = []
    let element = {}
    imageList.forEach((item, index) => {
      let name = item.replace('./', '')
      let path = item.replace('./', 'gfa-open-end/')
      element = {
        id: index,
        name: name,
        path: path
      }
      imageObjects.push(element)
    })
    return imageObjects
  }
}
