import { TestPolymerPage } from './app.po';

describe('test-polymer App', () => {
  let page: TestPolymerPage;

  beforeEach(() => {
    page = new TestPolymerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
