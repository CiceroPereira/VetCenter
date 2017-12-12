import { VetcenterPage } from './app.po';

describe('vetcenter App', function() {
  let page: VetcenterPage;

  beforeEach(() => {
    page = new VetcenterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
