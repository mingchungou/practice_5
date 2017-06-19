import { GraphicPage } from './app.po';

describe('graphic App', () => {
  let page: GraphicPage;

  beforeEach(() => {
    page = new GraphicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
