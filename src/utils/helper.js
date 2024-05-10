
const charSet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', 
 '8', '9', '!', '#', '$', '%', '^', '*', '(', ')'];

class Helper {
  generateRandomUrl() {
    let urlStr = '';
    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(( Math.random() * 10000 ) % charSet.length);
      urlStr += charSet[randomNum];
    }
    return 'http://localhost:3000/' + urlStr;
  }
}

module.exports = new Helper();
