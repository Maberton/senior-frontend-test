const colors = require('tailwindcss/colors')

module.exports = {
	theme: {
	  colors: {
		prim: '#33a6ba',
		darkBlue: '#313e4f',
		gray: colors.gray,
		white: colors.white,
		red: colors.red,
	  },
	  extend: {
		spacing: {
		  'max-content': '318px',
		},
	  }
	},
  }
