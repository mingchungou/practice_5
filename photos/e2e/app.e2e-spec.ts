import { PhotosPage } from './app.po';

describe('photos App', () => {
  let page: PhotosPage;

  beforeEach(() => {
    page = new PhotosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
