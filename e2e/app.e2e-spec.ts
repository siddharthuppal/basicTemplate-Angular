import { BasicTemplatePage } from './app.po';

describe('basic-template App', () => {
  let page: BasicTemplatePage;

  beforeEach(() => {
    page = new BasicTemplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
