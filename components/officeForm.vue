<template>
	<div class="mb-5">
		<section class="container p-6 bg-white rounded-md" :class="{'pb-0': isEdit}">
			<span class="flex justify-between items-center mb-8 font-semibold">
				<h1> {{ this.isEdit ? 'Edit' : 'New' }} Location </h1>
				<button @click="close">
					<svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</span>
			<form @submit.prevent="saveData">
				<label for="title" class="block text-sm font-medium text-darkBlue mb-2" > Title * </label>
				<input id="title" name="title" type="text" v-model="officeInput.title" class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim mb-5">
				<label for="title" class="block text-sm font-medium text-darkBlue mb-2" > Enter the address * </label>
				<input id="title" name="title" type="text" v-model="officeInput.address" class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim mb-5">

				<span class="text-sm divide-y">
					<div>
						<h2 class="text-prim mt-6 mb-2">CONTACT INFORMATION</h2>
					</div>
					<div>
						<label for="title" class="block text-sm font-medium text-darkBlue mb-2 mt-4" > Full name * </label>
						<input id="title" name="title" type="text" v-model="officeInput.contact.fullName" class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim mb-5">
						<label for="title" class="block text-sm font-medium text-darkBlue mb-2" > Job Position * </label>
						<input id="title" name="title" type="text" v-model="officeInput.contact.jobPosition" class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim mb-5">
						<label for="title" class="block text-sm font-medium text-darkBlue mb-2" > Email address * </label>
						<input id="title" name="title" type="text" v-model="officeInput.contact.emailAddress" class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim mb-5">
						<label for="title" class="block text-sm font-medium text-darkBlue mb-2" > Job Position * </label>
						<input id="title" name="title" type="text" v-model="officeInput.contact.jobPosition" class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim mb-5">
						<label for="title" class="block text-sm font-medium text-darkBlue mb-2" > Phone * </label>
						<input id="title" name="title" type="text" v-model="officeInput.contact.phoneNumber" class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim mb-5">
					</div>
				</span>


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
					fullName: '',
					jobPosition: '',
					emailAddress: '',
					phoneNumber: '',
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
