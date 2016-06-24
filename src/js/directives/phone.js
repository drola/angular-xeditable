//International-phone-number
angular.module('xeditable').directive('editablePhone', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editablePhone',
      inputTpl: '<input type="text" ng-model="$parent.$data" international-phone-number>',
      render: function() {
        this.parent.render.call(this);

        var self = this;

        this.scope.$watch('$data', function(data) {
          self.setError(self.inputEl.val() && !self.inputEl.intlTelInput("isValidNumber") ? self.attrs.errorMsg : false);
        });
      },
      onbeforesave: function() {
        var self = this;
        self.setError(self.inputEl.val() && !self.inputEl.intlTelInput("isValidNumber") ? self.attrs.errorMsg : false);
        return self.error ? self.error : true;
      }
    });
}]);
