import { MoviesPage } from './app.po';

describe('movies App', () => {
  let page: MoviesPage;

  beforeEach(() => {
    page = new MoviesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
