/* global browser, element, by */

describe('screens/not-found/not-found', function() {

  beforeEach(function () {
    browser.ignoreSynchronization = true;
  });

  it('should open the page with broken url', function () {
    browser.get('http://localhost:9001/dist#fake-url-' + Math.random());
  });

  it('should display proper content on the page', function () {
    var view = element(by.css('.not-found'));
    var text = view.getText();
    expect(text).toContain('Page not found.');
  });

});

