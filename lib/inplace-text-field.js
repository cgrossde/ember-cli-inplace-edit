import Ember from "ember";
import inplaceFieldView from './inplace-field';
import focusSupport from './focus-support';

export default inplaceFieldView.extend({
	type: 'text',
	inputField: Ember.TextField.extend(focusSupport)
});