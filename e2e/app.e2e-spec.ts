import { SIGNETPage } from './app.po';

describe('signet App', () => {
  let page: SIGNETPage;

  beforeEach(() => {
    page = new SIGNETPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
