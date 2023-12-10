import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'showcase',
  title: 'Showcase',
  type: 'document',
  fields: [
		defineField({
      name: 'preset',
      title: 'Preset ID',
      description: "You can have multiple presets, Set the one you want to use to 'main'",
      type: 'string',
    }),
		defineField({
			name:'list',
			type:'array',
			of:[
				{
					type:'object',
					fields:[
						{
							name:'title',
							type:'string',
							validation: (rule) => rule.required()
						},
						{
							name:'credit',
							type:'string',
						},
						{
							name:'media_type',
							type:'string',
							options: {list: [{title:'Image',value:'image'}, {title:'Youtube Video',value:'video'}]},
							validation: (rule) => rule.required(),
						},{
							name:'art',
							type:'image',
							// options: { isHighlighted: true },
						},
						{
							name:'video_id',
							title:'Youtube Video ID',
							description:'The video id at the end of youtube url,for example: https://www.youtube.com/watch?v=dQw4w9WgXcQ -> dQw4w9WgXcQ',
							type:'string',
							// options: { isHighlighted: true },
						}
					]
				}
			]
		})
  ],

})
