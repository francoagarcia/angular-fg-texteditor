/*global window,location*/
(function (window) {
	'use strict';

	var Simditor = window.Simditor;
	var defaultToolbar = ['title', 'bold', 'italic', 'underline', 'strikethrough', '|', 'ol', 'ul', 'blockquote', 'code', 'table', '|', 'link', 'hr', '|', 'indent', 'outdent'];
	var defaultHeight = '300px';
	var directives = angular.module('fg.texteditor',[]);

	directives.directive('texteditor', function () {
		return {
			require: "^ngModel",
			scope : {
				toolbar : '=?',
				height : '@?',
				defaultImage : '@?',
			},
			link: function (scope, element, attrs, ngModel) {
				var toolbar = angular.isDefined(scope.toolbar) ? scope.toolbar : defaultToolbar;
				var height = angular.isDefined(scope.height) ? scope.height : defaultHeight;
				var defaultImage = angular.isDefined(scope.defaultImage) ? scope.defaultImage : undefined;

				element.append('<div style="height:'+ height +';"></div>');
				
				scope.texteditor = new Simditor({
					textarea: element.children()[0],
					pasteImage: true,
					toolbar: toolbar,
					/*defaultImage : defaultImage,
					upload: location.search === '?upload' ? {
						url: '/upload'
					} : false*/
				});

				function readViewText() {
					var html = element.find('.simditor-body').html();
					if (attrs.stripBr && html === '<br>') {
						html = '';
					}

					ngModel.$setViewValue(html);
				}

				var $target = element.find('.simditor-body');

				ngModel.$render = function () {
					scope.texteditor.focus();
					$target.prepend(ngModel.$viewValue);
				};

				scope.texteditor.on('valuechanged', function(){
					scope.$apply(readViewText);
				});
			}
		};
	});
}(window));