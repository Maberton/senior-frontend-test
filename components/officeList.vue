<template>
	<div class="container flex justify-center mt-20">
		<div class="office-list justify-center">
			<h1 class="head mb-5">Offices</h1>
			<button class="add-new bg-prim mb-5 w-full text-gray-200 py-2 px-4 rounded flex items-center justify-between shadow-lg focus:outline-none">
				<span>Add New Location</span>
				<svg
					class="h-5"
					xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
				</svg>
			</button>
			<div v-for="office in offices" :key="office.id">
				<OfficeCard :office="office"/>
			</div>
		</div>
	</div>
</template>

<script>

import offices from "../data/offices.json";
import OfficeCard from '@/components/officeCard'

export default {
	components: {
		OfficeCard
	},
	data(){
		return {
			offices: offices
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
	.add-new {
		height: 56px;
	}
</style>
