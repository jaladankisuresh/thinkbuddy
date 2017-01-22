import { ThinkbuddyPage } from './app.po';

describe('thinkbuddy App', function() {
  let page: ThinkbuddyPage;

  beforeEach(() => {
    page = new ThinkbuddyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
