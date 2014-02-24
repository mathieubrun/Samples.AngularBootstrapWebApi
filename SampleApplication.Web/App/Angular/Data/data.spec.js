﻿(function () {
    'use strict';

    describe('SampleApplication.Angular.Data', function () {

        beforeEach(module('SampleApplication.Angular.Data'));

        describe('DatasController', function () {

            var scope, $httpBackend, createController;

            beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$controller_) {
                $httpBackend = _$httpBackend_;
                scope = _$rootScope_.$new();

                createController = function () {
                    return _$controller_('DatasController', { '$scope': scope });
                };
            }));

            it('must call api/clients on creation', function () {
                // arrange
                $httpBackend.expectGET('api/clients').respond([]);

                // act
                createController();

                // assert
                $httpBackend.flush();
            });

            afterEach(function () {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            });
        });

        describe('DataController', function () {

            var scope, $httpBackend, createController;

            beforeEach(inject(function (_$rootScope_, _$httpBackend_, _$controller_) {
                $httpBackend = _$httpBackend_;

                $httpBackend.expectGET('api/recommandations').respond([]);
                $httpBackend.expectGET('api/clients/123').respond({});

                scope = _$rootScope_.$new();

                createController = function () {
                    var ctrl = _$controller_('DataController', { '$scope': scope, $routeParams: { id: 123 } });

                    $httpBackend.flush();

                    return ctrl;
                };
            }));

            it('$scope.cancel must set model.IsEditing to false', function () {
                // arrange
                createController();

                // act
                scope.cancel();

                // assert
                expect(scope.model.IsEditing).toBe(false);
            });

            afterEach(function () {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
                scope.$destroy();
            });
        });
    });
}());