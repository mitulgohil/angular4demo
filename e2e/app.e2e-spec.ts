import { Demong4Page } from './app.po';

describe('demong4 App', function() {
  let page: Demong4Page;

  beforeEach(() => {
    page = new Demong4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
