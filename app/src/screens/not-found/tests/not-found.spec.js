import NotFound from '../not-found';
import Layout from '../main/views/not-found-layout-view';

describe('screens/not-found/not-found', function () {

  beforeEach(function () {
    this.notFound = new NotFound();
  });

  it('should define the Layout', function () {
    expect(this.notFound.Layout).to.be.equal(Layout);
  });

  it('should define routes', function () {
    expect(this.notFound.routes).to.be.an('object');
  });

});
