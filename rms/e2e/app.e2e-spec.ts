import { RmsPage } from './app.po';

describe('rms App', () => {
  let page: RmsPage;

  beforeEach(() => {
    page = new RmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
