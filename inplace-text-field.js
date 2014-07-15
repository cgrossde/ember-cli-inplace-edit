import Ember from "ember";

export default Ember.InplaceTextField = Ember.InplaceField.extend({
	type: 'text',
	inputField: Ember.TextField.extend(Ember.FocusSupport)
});