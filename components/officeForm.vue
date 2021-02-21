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
			<form @submit.prevent="checkOfficeForm">
				<label for="title" class="block text-sm font-medium text-darkBlue mb-2" > Title * </label>
				<div class="relative">
					<span class="inset-y-0 left-0 flex items-center">
						<input
							id="title"
							name="title"
							type="text"
							v-on:keyup="validTitle()"
							v-on:focus="() => {this.clicked.title = true}"
							v-model="officeInput.title"
							class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim"
							:class="{'border-red-500 focus:border-red-500': !validTitle() && this.clicked.title}"
						>
						<svg v-if="!validTitle() && this.clicked.title" class="w-6 h-6 absolute right-0 mr-3 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</span>
				</div>
				<p v-if="!validTitle() && this.clicked.title" class="text-red-500 text-xs italic">This field must be valid and not empty</p>
				<label for="address" class="block text-sm font-medium text-darkBlue mb-2 mt-5" > Enter the address * </label>
				<div class="relative">
					<span class="inset-y-0 left-0 flex items-center">
						<input
							id="address"
							name="address"
							type="text"
							v-on:keyup="validAddress()"
							v-on:focus="() => {this.clicked.address = true}"
							v-model="officeInput.address"
							class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim"
							:class="{'border-red-500 focus:border-red-500': !validAddress() && this.clicked.address}"
						>
						<svg v-if="!validAddress() && this.clicked.address" class="w-6 h-6 absolute right-0 mr-3 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</span>
				</div>
				<p v-if="!validAddress() && this.clicked.address" class="text-red-500 text-xs italic">This field must be valid and not empty</p>
				<span class="text-sm divide-y mt-5">
					<div>
						<h2 class="text-prim mt-6 mb-2">CONTACT INFORMATION</h2>
					</div>
					<div>
						<label for="title" class="block text-sm font-medium text-darkBlue mb-2 mt-4" > Full name * </label>
						<div class="relative">
							<span class="inset-y-0 left-0 flex items-center">
								<input
									id="title"
									name="title"
									type="text"
									v-on:keyup="validFullName()"
									v-on:focus="() => {this.clicked.fullName = true}"
									v-model="officeInput.contact.fullName"
									class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim"
									:class="{'border-red-500 focus:border-red-500': !validFullName() && this.clicked.fullName}"
								>
								<svg v-if="!validFullName() && this.clicked.fullName" class="w-6 h-6 absolute right-0 mr-3 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
						</div>
						<p v-if="!validFullName() && this.clicked.fullName" class="text-red-500 text-xs italic">This field must be valid and not empty</p>
						<label for="title" class="block text-sm font-medium text-darkBlue mb-2  mt-5" > Job Position * </label>
						<div class="relative">
							<span class="inset-y-0 left-0 flex items-center">
								<input
									id="title"
									name="title"
									type="text"
									v-on:keyup="validJobPosition()"
									v-on:focus="() => {this.clicked.jobPosition = true}"
									v-model="officeInput.contact.jobPosition"
									class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim"
									:class="{'border-red-500 focus:border-red-500': !validJobPosition() && this.clicked.jobPosition}"
								>
								<svg v-if="!validJobPosition() && this.clicked.jobPosition" class="w-6 h-6 absolute right-0 mr-3 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
						</div>
						<p v-if="!validJobPosition() && this.clicked.jobPosition" class="text-red-500 text-xs italic">This field must be valid and not empty</p>
						<label for="title" class="block text-sm font-medium text-darkBlue mb-2  mt-5" > Email address * </label>
						<div class="relative">
							<span class="inset-y-0 left-0 flex items-center">
								<input
									id="title"
									name="title"
									type="text"
									v-on:keyup="validEmail()"
									v-on:focus="() => {this.clicked.emailAddress = true}"
									v-model="officeInput.contact.emailAddress"
									class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim"
									:class="{'border-red-500 focus:border-red-500': !validEmail() && this.clicked.emailAddress}"
								>
								<svg v-if="!validEmail() && this.clicked.emailAddress" class="w-6 h-6 absolute right-0 mr-3 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
						</div>
						<p v-if="!validEmail() && this.clicked.emailAddress" class="text-red-500 text-xs italic">This field must be valid and not empty</p>
						<label for="title" class="block text-sm font-medium text-darkBlue mb-2  mt-5" > Phone * </label>
						<div class="relative">
							<span class="inset-y-0 left-0 flex items-center">
								<input
									id="title"
									name="title"
									type="text"
									v-on:keyup="validPhoneNumber()"
									v-on:focus="() => {this.clicked.phoneNumber = true}"
									v-model="officeInput.contact.phoneNumber"
									class="focus:outline-none opacity-90 p-1 w-full rounded-md border-2 border-darkBlue focus:border-prim"
									:class="{'border-red-500 focus:border-red-500': !validPhoneNumber() && this.clicked.phoneNumber}"
								>
								<svg v-if="!validPhoneNumber() && this.clicked.phoneNumber" class="w-6 h-6 absolute right-0 mr-3 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</span>
						</div>
						<p v-if="!validPhoneNumber() && this.clicked.phoneNumber" class="text-red-500 text-xs italic">This field must be valid and not empty</p>
					</div>
				</span>


				<button
					:disabled="!validFields()"
					type="submit"
					class="bg-prim opacity-90 text-white py-2 px-4 rounded  mt-5"
					:class="[{'bg-gray-400 cursor-not-allowed': !validFields()}, {'hover:opacity-100': validFields()}]"
				>
					Save
				</button>
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
			},
			emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
			clicked: {
				title: false,
				address: false,
				fullName: false,
				jobPosition: false,
				emailAddress: false,
				phoneNumber: false
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
			const operation = this.isEdit ? 'editOffice' : 'addOffice'
			this.$store.commit(operation, this.officeInput)
			this.close()
		},
		checkOfficeForm() {
			this.validFields() ? this.saveData() : alert('Office not saved')
		},
		validTitle() {
			return this.officeInput.title
				&& this.officeInput.title.trim() !== ''
		},
		validAddress() {
			return this.officeInput.address
				&& this.officeInput.address.trim() !== ''
		},
		validFullName() {
			return this.officeInput.contact.fullName
				&& this.officeInput.contact.fullName.trim() !== ''
		},
		validJobPosition() {
			return this.officeInput.contact.jobPosition
				&& this.officeInput.contact.jobPosition.trim() !== ''
		},
		validEmail() {
			return this.officeInput.contact.emailAddress
			    && this.officeInput.contact.emailAddress !== ''
			    && this.emailRegex.test(this.officeInput.contact.emailAddress)
		},
		validPhoneNumber() {
			return this.officeInput.contact.phoneNumber
				&& this.officeInput.contact.phoneNumber.trim() !== ''
		},
		validFields() {
			return this.validTitle()
				&& this.validAddress()
				&& this.validFullName()
				&& this.validJobPosition()
				&& this.validEmail()
				&& this.validPhoneNumber()
		}
	}
}
</script>
