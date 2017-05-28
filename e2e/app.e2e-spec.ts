import { SiteNiloPage } from './app.po';

describe('site-nilo App', () => {
  let page: SiteNiloPage;

  beforeEach(() => {
    page = new SiteNiloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
