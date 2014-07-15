import Ember from "ember";

export default Ember.InplaceTextArea = Ember.InplaceField.extend({
	inputField: Ember.TextArea.extend(Ember.FocusSupport)
});