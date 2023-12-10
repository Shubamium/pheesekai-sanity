import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'artworks',
  title: 'Artworks',
  type: 'document',
  fields: [
		defineField({
			name: 'art',
			title: 'Art',
			type: 'image',
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
		}),
		defineField({
			name: 'contacts',
			title: 'Link',
			type: 'array',
			of:[
				{
					type:'object',
					fields:[
						{
							name:'url',
							title:'URL',
							type:'string',
						},
						{
							name:'media',
							title:'media',
							initialValue: 'twitter',
							type:'string',
							options: {list: [ 'twitter' , 'youtube' , 'discord' , 'vgen' , 'kofi' , 'website']},
							validation:(rule) => rule.required()
						}
					]
				}
			]
		}),
		defineField({
			name:'full_width',
			title:'Full Width',
			type:'boolean',
		}),defineField({
			name:'full_height',
			title:'Full Height',
			type:'boolean',
		})
  ],

})
