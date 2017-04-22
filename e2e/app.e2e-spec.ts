import { MyStyleAngTestPage } from './app.po';

describe('my-style-ang-test App', () => {
  let page: MyStyleAngTestPage;

  beforeEach(() => {
    page = new MyStyleAngTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
