import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'credits',
  title: 'Credits',
  type: 'document',
  fields: [
		defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
		defineField({
			name: 'position',
			title:'Position',
			type:'string',
		}),
		defineField({
			name: 'link',
			title:'Link',
			type:'string',
		}),
		defineField({
			name:'pfp',
			title:'Profile Picture',
			type:'image'			
		})
  ],

})
