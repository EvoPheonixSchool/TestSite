'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /Projects when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/Projects");
  });


  describe('Projects', function() {

    beforeEach(function() {
      browser.get('index.html#!/Projects');
    });


    it('should render Projects when user navigates to /Projects', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('About', function() {

    beforeEach(function() {
      browser.get('index.html#!/About');
    });


    it('should render About when user navigates to /About', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
