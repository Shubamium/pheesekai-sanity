import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General',
  type: 'document',
  fields: [
    defineField({
      name: 'preset',
      title: 'Preset ID',
      description: "You can have multiple presets, Set the one you want to use to 'main'",
      type: 'string',
    }),
    defineField({
      name: 'schedules',
      title: 'Schedules',
      type: 'image',
    }),
		defineField({
			name: 'pc',
			title: 'PC Specs',
			type:'object',
			fields:[
				{name:'processor',title:'Processor',type:'string'},
				{name:'gpu',title:'GPU',type:'string'},
				{name:'motherboard',title:'Motherboard',type:'string'},
				{name:'ram',title:'RAM',type:'string'}
			]
		}),
		defineField({
			name:'peripherals',
			title:'Peripherals',
			type:'array',
			of:[
				{type:'object',fields:[
						{name:'item_name',title:'Peripherals Name',type:'string'},
						{name:'item_image',title:'Peripherals Image',type:'image'},
						{name:'item_link',title:'Peripherals Link',type:'url'},
				]},
			]
		}),
		defineField({
			name:'stats',
			title:'Statistics',
			type:'object',
			fields:[
				{
					name: 'avg',
					title: 'Average CCV',
					type: 'string',
				},
				{
					name: 'peak',
					title: 'Peak CCV',
					type: 'string',
				},
				{
					name: 'twitter',
					title: 'Twitter Count',
					type: 'string',
				},
				{
					name: 'tiktok',
					title: 'Tiktok Count',
					type: 'string',
				},
				{
					name: 'twitch',
					title: 'Twitch Count',
					type: 'string',
				},
				{
					name: 'youtube',
					title: 'Youtube Count',
					type: 'string',
				},
			]
		})
  ],
})
