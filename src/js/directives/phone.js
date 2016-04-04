//International-phone-number
angular.module('xeditable').directive('editablePhone', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editablePhone',
      inputTpl: '<input type="text" international-phone-number>',
      render: function() {
        this.parent.render.call(this);
        this.inputEl.attr('ng-model', '$parent.$data');

        var self = this;

        this.scope.$watch('$data', function(data) {
          self.setError(self.inputEl.val() && !self.inputEl.intlTelInput("isValidNumber") ? 'Telefonska številka še ni vpisana do konca.' : false);
        });
      },
      onbeforesave: function() {
        var self = this;
        self.setError(self.inputEl.val() && !self.inputEl.intlTelInput("isValidNumber") ? 'Telefonska številka še ni vpisana do konca.' : false);
        return self.error ? self.error : true;
      }
    });
}]);
