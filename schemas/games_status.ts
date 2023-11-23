import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'games_status',
  title: 'Game Status',
  type: 'document',
  fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'progress',
			title: 'Progress (%)',
			type: 'string',
		}),
		defineField(
			{
				type: 'string',
				name: 'type',
				initialValue: 'frequent',
				options: {list: [{title:'In Progress',value:'progress'}, {title:'Completed',value:'completed'}]},
			}
		)
  ],
	preview: {
    select: {
      title: 'name',
      subtitle: 'type',
    }
	}
})
