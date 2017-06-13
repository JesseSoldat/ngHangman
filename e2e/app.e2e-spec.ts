import { NgHangmanPage } from './app.po';

describe('ng-hangman App', () => {
  let page: NgHangmanPage;

  beforeEach(() => {
    page = new NgHangmanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
