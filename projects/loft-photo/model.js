// eslint-disable-next-line no-unused-vars
import photosDB from './photos.json';
// eslint-disable-next-line no-unused-vars
import friendsDB from './friends.json';

export default {
  getRandomElement(array) {
    let randomElem = null

    for(let i = 0; i < array.length; i ++) {
      let randomNum = Math.round(Math.random() * (array.length - 1))
        randomElem = array[randomNum]
    }
  
    return randomElem
  },
  getNextPhoto() {
    const friend = this.getRandomElement(friendsDB)
    const photos = photosDB[friend.id]
    const photo = this.getRandomElement(photos)

    return { friend, url: photo.url}
  },
};
