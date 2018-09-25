<template>
	<div>
		<b-form-select v-model="selected" :options="options" class="mb-3" size="sm" @change="load($event)" />
		<div>
			<v-runtime-template :template="template"></v-runtime-template>
		</div>
	</div>
</template>

<script>
import FormComponent from '../assets/FormComponent.js';
import ListGroupComponent from '../assets/ListGroupComponent.js';
import VRuntimeTemplate from 'v-runtime-template';
export default {
	data() {
		return {
			template: ``,
			selected: null,
			options: [
				{ value: null, text: 'Please select an option' },
				{ value: FormComponent, text: 'Form' },
				{ value: ListGroupComponent, text: 'ListGroupComponent  ' },
			],
			form: {
				email: '',
				name: '',
				food: null,
				checked: [],
			},
			foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
			show: true,
		};
	},
	computed: {},
	components: {
		VRuntimeTemplate,
	},
	methods: {
		load: function($event) {
			this.template = $event;
		},
		onSubmit(evt) {
			evt.preventDefault();
			alert(JSON.stringify(this.form));
		},
		onReset(evt) {
			evt.preventDefault();
			/* Reset our form values */
			this.form.email = '';
			this.form.name = '';
			this.form.food = null;
			this.form.checked = [];
			/* Trick to reset/clear native browser form validation state */
			this.show = false;
			this.$nextTick(() => {
				this.show = true;
			});
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
