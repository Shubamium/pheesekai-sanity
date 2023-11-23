import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'mods',
  title: 'Moderator',
  type: 'document',
  fields: [
		defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
		defineField({
			name: 'about',
			title:'About',
			type:'text',

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
