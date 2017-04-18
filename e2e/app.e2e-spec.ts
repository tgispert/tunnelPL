import { TunnelPage } from './app.po';

describe('tunnel App', () => {
  let page: TunnelPage;

  beforeEach(() => {
    page = new TunnelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
