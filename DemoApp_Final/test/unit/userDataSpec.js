'use strict';

describe('userData', function() {
  var mockUserResource;
  
  beforeEach(module('eventsApp'));
  
  beforeEach(function() {
    mockUserResource = sinon.stub({get: function() {}});
    module(function($provide) {
      $provide.value('userResource', mockUserResource);
    });
  });
  
  describe('getUser', function() {
    it('should call getresource.get with the username', inject(function(userData) {
      userData.getUser('bob');
      
      expect(mockUserResource.get.args[0][0]).toEqual({userName: 'bob'});
    }))
  })
})