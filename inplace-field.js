import Ember from "ember";

export default Ember.InplaceField = Ember.View.extend({
	tagName: 'div',
	classNames: ['inplace_field'],
	classNameBindings: ['isEmpty:inplace_empty'],
	emptyValue: "Click to add content for this field",
	isEditing: false,
	
	isEmpty: (function() {
		return Ember.isEmpty(this.get('content'));
	}).property('content'),

	
	layout: Ember.computed(function() {
		return Ember.Handlebars.compile([
			'{{#if view.isEditing}}',
			'  {{view view.inputField valueBinding="view.content"}}',
			'{{else}}',
			'  {{#if view.isEmpty}}',
			'    {{view.emptyValue}}',
			'  {{else}}',
			'    {{#if view.template}}',
			'      {{yield}}',
			'    {{else}}',
			'      {{view.content}}',
			'    {{/if}}',
			'  {{/if}}',
			'{{/if}}'].join('\n'));
	}),

	focusOut: function() {
		this.get('controller').get('store').commit();
		return this.set('isEditing', false);
	},

	click: function() {
		return this.set('isEditing', true);
	}
});