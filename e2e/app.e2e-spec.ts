import { OnebnbClientPage } from './app.po';

describe('onebnb-client App', function() {
  let page: OnebnbClientPage;

  beforeEach(() => {
    page = new OnebnbClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
