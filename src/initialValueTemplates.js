import T from '@sanity/base/initial-value-template-builder'
import Schema from 'part:@sanity/base/schema'

//_source contains only document types declared by user
const templates = Schema._source.types.map(schemaType => 
	T.template({
    schemaType: schemaType.name,
		id: `${schemaType.name}-has-region`,
		title: `${schemaType.title} by region`,
		description: `${schemaType.title} for a specific region`,
		parameters: [{name: 'regionId', type: 'string'}],
		value: params => ({
			region: {_type: 'reference', _ref: params.regionId}
		})
	}),
)
  

export default [
  ...T.defaults(),
  ...templates
]
