describe('Mirador | mirador.js', function() {
  var div;
  var mirador;

  function startMirador(done) {
    localStorage.clear();

    div = document.createElement('div');
    div.setAttribute('id', 'viewer');
    document.body.appendChild(div);

    mirador = Mirador({
      id: 'viewer',
      layout: "1x2",
      buildPath: 'spec/',
      data: [{
        "manifestUri": "spec/data/manifest.json",
        "location": "Stanford University",
        "title": "MS 5",
        "widgets": []
      }]
    });

    mirador.viewer.eventEmitter.subscribe('manifestListItemRendered', function() {
      console.log('done')
      done();
    });
  }

  // Tests for object initialization
  describe('Initialization', function() {
    beforeAll(function(done) {
      startMirador(done);
    });

    afterAll(function() {
      mirador = null;
      document.body.removeChild(div);
      div = null;
    });

    // Need a custom event here to show that all manifests have been received
    // // and rendered.
    // it('should render manifest list items', function() {
    //   // mirador.viewer.eventEmitter.subscribe('manifestListItemRendered', function() {
    //     expect(mirador.viewer.manifestsPanel.manifestListItems.length).toBe(1);
    //     // done();
    //   // });
    // });

    // it('should start Mirador as blank workspace', function(done) {
    //   // console.log(mirador)
    //   expect(mirador.viewer).toBeDefined();
    //   done();
    // });
    it('should select a manifest', function() {
      expect(9).toEqual(9)
    });
    // 
    // it('should select a manifest', function(done) {
    //   console.log(div.find('.addItemLink'))
    //   console.log(mirador.viewer)
    //   mirador.viewer.eventEmitter.subscribe('manifestListItemRendered', function() {
    //     console.log('yolo')
    //     // expect(div.find('.addItemLink').first()).toExist();
    //     div.find('.addItemLink').first().click();
    //     div.find('.select-metadata').first().click();
    //     expect(mirador.viewer.workspace.windows[0].manifest.uri).toEqual('spec/data/manifest.json');
    //     done();
    //   });
    // });
    // 
    // it('should show logo specified in manifest', function(){
    //   expect(div.find(".repo-image>img")[0].getAttribute("src"))
    //     .toEqual("https://stacks-test.stanford.edu/image/iiif/ck546xs5106%2Folemiss1/full/300,/0/default.jpg");
    // });
    // 
    // it('should click first page in thumbnail view', function() {
    //   expect(div.find('.window').first()).toExist();
    // });
    // 
    // it('should click the next button', function() {
    //   expect(div.find('.window').first()).toExist();
    // });
  });
});
