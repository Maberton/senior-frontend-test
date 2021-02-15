<template>
	<div class="bg-white shadow overflow-hidden rounded-md mb-5 shadow-lg">
		<span  v-if="!showEdit">
			<button
				@click="showInfo"
				class="w-full card-title flex items-center justify-between outline-none focus:outline-none transition duration-300"
				:class="{'bg-gray-400': showExtendedInfo}"
			>
				<span>
					<h1 class="font-bold text-darkBlue m-4 transition duration-300"
					:class="{'text-white': showExtendedInfo}"
					> {{office.title}} </h1>
					<p class="text-gray-500 m-4"
					:class="{'text-white transition duration-300': showExtendedInfo}"
					> {{ office.address }} </p>
				</span>
				<svg
					class="h-8 m-2 closed-card transition duration-300"
					:class="{'open-card transform rotate-180': showExtendedInfo}"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</button>
			<div
				class="card-content ease-linear my-6 mx-10 divide-y "
				v-if="showExtendedInfo"
			>
				<section class="info-office">
					<h2 class="mb-3 font-medium"> {{ office.contact.fullName }} </h2>
					<p class="mb-3 text-sm"> {{ office.contact.jobPosition }} </p>
					<p class="mb-3 text-sm text-prim"> <a :href="'mailto:' + office.contact.emailAddress">{{office.contact.emailAddress}} </a> </p>
					<p class="mb-3 text-sm"> {{ office.contact.phoneNumber }} </p>
				</section>
				<section class="actions flex justify-between pt-4">
					<button
						@click="editOffice"
						class="flex items-center text-gray-400">
						<svg
							class="h-6 mr-2"
							xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
						</svg>
						<span>
							EDIT
						</span>
					</button>
					<button class="flex items-center text-red-400">
						<svg
							class="h-6 mr-2"
							xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
						</svg>
						<span>
							DELETE
						</span>
					</button>
				</section>
			</div>
		</span>
		<OfficeForm :office="office" v-if="showEdit" @closed="handleClose" isEdit/>
	</div>

</template>

<script>

import OfficeForm from '@/components/officeForm'

export default {
	components: {
		OfficeForm
	},
	data() {
		return {
			showExtendedInfo: false,
			showEdit: false
		}
	},
	props: {
		office: {
			id: {
				type: Number,
				required: true
			},
			title: {
				type: String,
				required: true
			},
			address: {
				type: String,
				required: true
			},
			contact: {
				fullname: {
					type: "String",
					required: true
				},
				jobPosition: {
					type: "String",
					required: true
				},
				emailAddress: {
					type: "String",
					required: true
				},
				phoneNUmber: {
					type: "String",
					required: true
				},
			},
		}
	},
	methods: {
		showInfo() {
			this.showExtendedInfo = !this.showExtendedInfo
		},
		editOffice() {
			this.showEdit = !this.showEdit
		},
		handleClose() {
			this.editOffice();
			this.showInfo();
		}
	}
}
</script>

<style scoped>
	.closed-card {
		color: #33a6ba
	}
	.open-card {
		color: #ffffff
	}
	.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
	}
</style>
