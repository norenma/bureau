import { BureauPage } from './app.po';

describe('bureau App', function() {
  let page: BureauPage;

  beforeEach(() => {
    page = new BureauPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
