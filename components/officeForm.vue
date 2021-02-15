<template>
	<div class="mb-5">
		<section class="container p-6">
			<span class="flex justify-between items-center ">
				<h1> {{ this.isEdit ? 'Edit' : 'New' }} Location </h1>
				<button @click="close">X</button>
			</span>
			<form @submit.prevent="saveData">
				<label for="title" class="block text-sm font-medium text-gray-700" > Title* </label>
				<input id="title" name="title" type="text" v-model="officeInput.title" class="focus:ring-prim focus:border-prim block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md">
				<button type="submit" class="bg-prim opacity-90 hover:opacity-100 text-white py-2 px-4 rounded"> Save </button>
			</form>
		</section>
	</div>
</template>

<script>
export default {
	data() {
		return {
			officeInput: this.office ? { ...this.office } : {
				id: 0,
				title: '',
				address: '',
				contact: {
					fullname: '',
					jobPosition: '',
					emailAddress: '',
					phoneNUmber: '',
				}
			}
		}
	},
	props: {
		isEdit: {
			type: Boolean,
			default: false
		},
		office: {
			type: Object,
			required: false
		}
	},
	methods: {
		close() {
			this.$emit('closed', true)
		},
		saveData() {
			console.log('office', this.officeInput)
		}
	}
}
</script>
