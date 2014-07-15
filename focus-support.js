import Ember from "ember";

export default Ember.FocusSupport = Ember.Mixin.create({
	didInsertElement: function() {
		return this.$().focus();
	}
});