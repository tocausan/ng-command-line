
/*
* ngCommand
* */
app.directive('ngCommand', function() {
    return {
        restrict:   'A',
        require:    '^ngModel',
        scope: {
            ngIndex:    '@',
            ngId:       '@',
            ngText:     '@',
            ngAction:   '@',
            ngEditable: '@',
            ngCommandModel:  '='
        },
        template:
        '<div class="commandLine columns">' +
        '<p class="left">[captain]#</p>' +
        '<p class="command small-8 medium-10 columns left" id="{{ngId}}" contenteditable="{{ngEditable}}" ng-model="ngCommandModel"></p>' +
        '<p class="right" ng-bind="ngIndex"></p>' +
        '</div>'
    }
});