import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
//ES6 function syntax
describe('Our fierst test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});
//ES5 function syntax
describe('index.html', () => {
  it('should say hello', function(done) {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Hello World");
      done();
      window.close();
    });
  })
})

