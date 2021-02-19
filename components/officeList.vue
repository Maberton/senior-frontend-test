<template>
	<div class="container flex justify-center mt-20">
		<div class="office-list justify-center">
			<h1 class="head mb-5">Offices</h1>

			<button
				v-if="!showForm"
				@click="toggleForm"
				class="opacity-90 hover:opacity-100 mb-5 bg-prim w-full text-gray-200 py-4 px-4 rounded flex items-center justify-between shadow-lg focus:outline-none">
				<span>Add New Location</span>
				<svg
					class="h-5"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
				</svg>
			</button>

			<OfficeForm v-if="showForm" @closed="toggleForm"/>
			<div v-for="office in loadedOffices" :key="office.id">
				<OfficeCard :office="office"/>
			</div>
		</div>
	</div>
</template>

<script>

import OfficeCard from '@/components/officeCard'
import OfficeForm from '@/components/officeForm'

export default {
	components: {
		OfficeCard,
		OfficeForm
	},
	data(){
		return {
			showForm: false
		}
	},
	methods: {
		toggleForm() {
			this.showForm = !this.showForm
		}
	},
	computed: {
		loadedOffices() {
		return this.$store.getters.loadedOffices
		}
	}
}
</script>
<style>
	.head {
		font-family: Roboto;
		font-style: normal;
		font-weight: 300;
		font-size: 64px;
		line-height: 100%;
		text-align: center;
		color: #33a6ba;
	}

	.office-list {
		width: 318px;
	}
</style>
