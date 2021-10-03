/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let result = {};
    for (let i = 0; i < this.words.length; i++) {
      let next;
      if (this.words[i + 1]) {
        next = this.words[i + 1];
      } else {
        next = null;
      }
      if (result && this.words[i] in result) {
        result[this.words[i]].push(next);
      } else {
        result[this.words[i]] = [];
        result[this.words[i]].push(next);
      }
    }
    return result;
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    let firstWord = this.words[Math.floor(Math.random() * this.words.length)];
    let next;
    let result = "";

    for (let i = 0; i < numWords; i++) {
      if(next !== null){
      if (i === 0) {
        result = result + firstWord;
        next = this.chains[firstWord][
          Math.floor(Math.random() * this.chains[firstWord].length)
        ];
      } else {
        next = this.chains[next][
          Math.floor(Math.random() * this.chains[next].length)
        ];
      }
      }
      result = result + " " + next;
    }
    result = new String(result);
    return result;
  }
}

module.exports = { MarkovMachine };