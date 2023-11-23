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
