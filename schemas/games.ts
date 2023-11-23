import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'games',
  title: 'Game List',
  type: 'document',
  fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'poster',
			title: 'Poster',
			type: 'image',
		}),
		defineField(
			{
				type: 'string',
				name: 'type',
				initialValue: 'frequent',
				options: {list: [{title:'Frequently Played',value:'frequent'}, {title:'Less Common',value:'less'}]},
			}
		)
  ],
	preview: {
    select: {
      title: 'name',
      subtitle: 'type',
			media:'poster'
    }
	}
})
