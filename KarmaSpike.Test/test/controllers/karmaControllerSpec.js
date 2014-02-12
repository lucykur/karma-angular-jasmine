define(['angular-mocks','controllers/karma-controller'], function (anMocks,karmaCtrl) {
    describe('karma controller test', function() {
        beforeEach(inject(function ($rootScope, $controller) {
            $_rootScope = $rootScope;
            $_controller = $controller;
        }));
        
        it('testing karma controller', function () {
            var scope = $_rootScope.$new();
            expect(scope.hello).toBe("he");
        });
    });
});