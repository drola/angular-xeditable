
angular.module('xeditable').directive('editableCombodate', ['editableDirectiveFactory', 'editableCombodate',
  function(editableDirectiveFactory, editableCombodate) {
    return editableDirectiveFactory({
      directiveName: 'editableCombodate',
      inputTpl: '<input type="text">',
      render: function() {
        this.parent.render.call(this);

        var options = {
          value: new Date(this.scope.$data)
        };
        var self = this;
        angular.forEach(["format", "template", "minYear", "maxYear", "yearDescending", "noYearValue", "noYearText", "minuteStep", "secondStep", "firstItem", "errorClass", "customClass", "roundTime", "smartDays"], function(name) {

          var attrName = "e" + name.charAt(0).toUpperCase() + name.slice(1);
          if (attrName in self.attrs) {
            options[name] = self.attrs[attrName];
          }
        });

        var combodate = editableCombodate.getInstance(this.inputEl, options);
        combodate.$widget.find('select').bind('change', function(e) {
          self.scope.$data = (new Date(combodate.getValue()));
        });
      }
    });
  }
]);
