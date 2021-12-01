import T from '@sanity/base/initial-value-template-builder'

export default [
  ...T.defaults(),
	T.template({
		id: 'heroPanel-by-region',
		title: 'Hero panel by region',
		description: 'Hero panel for a specific region',
		schemaType: 'heroPanel',
		parameters: [{name: 'regionId', type: 'string'}],
		value: params => ({
			region: {_type: 'reference', _ref: params.regionId}
		})
	}),
	T.template({
		id: 'carousel-by-region',
		title: 'Carousel by region',
		description: 'Carousel for a specific region',
		schemaType: 'carousel',
		parameters: [{name: 'regionId', type: 'string'}],
		value: params => ({
			region: {_type: 'reference', _ref: params.regionId}
		})
	})
]