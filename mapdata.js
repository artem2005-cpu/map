var simplemaps_countrymap_mapdata = {
	main_settings: {
		//General settings
		width: 'responsive', //'700' or 'responsive'
		background_color: '#FFFFFF',
		background_transparent: 'yes',
		border_color: '#ffffff',

		//State defaults
		state_description: 'State description',
		state_color: 'black',
		state_hover_color: '#3B729F',
		state_url: '',
		border_size: 1.5,
		all_states_inactive: 'no',
		all_states_zoomable: 'yes',

		//Location defaults
		location_description: 'Location description',
		location_url: '',
		location_color: '#FF0067',
		location_opacity: 0.8,
		location_hover_opacity: 1,
		location_size: 25,
		location_type: 'square',
		location_image_source: 'frog.png',
		location_border_color: '#FFFFFF',
		location_border: 2,
		location_hover_border: 2.5,
		all_locations_inactive: 'no',
		all_locations_hidden: 'no',

		//Label defaults
		label_color: '#ffffff',
		label_hover_color: '#ffffff',
		label_size: 16,
		label_font: 'Arial',
		label_display: 'auto',
		label_scale: 'yes',
		hide_labels: 'no',
		hide_eastern_labels: 'no',

		//Zoom settings
		zoom: 'yes',
		manual_zoom: 'yes',
		back_image: 'no',
		initial_back: 'no',
		initial_zoom: '-1',
		initial_zoom_solo: 'no',
		region_opacity: 1,
		region_hover_opacity: 0.6,
		zoom_out_incrementally: 'yes',
		zoom_percentage: 0.99,
		zoom_time: 0.5,

		//Popup settings
		popup_color: 'white',
		popup_opacity: 0.9,
		popup_shadow: 1,
		popup_corners: 5,
		popup_font: '12px/1.5 Verdana, Arial, Helvetica, sans-serif',
		popup_nocss: 'no',

		//Advanced settings
		div: 'map',
		auto_load: 'yes',
		url_new_tab: 'no',
		images_directory: 'default',
		fade_time: 0.1,
		link_text: 'View Website',
		popups: 'detect',
		state_image_url: '',
		state_image_position: '',
		location_image_url: '',
	},
	state_specific: {
		RUAD: {
			name: 'Адыгея',
		},
		RUAL: {
			name: 'Горно-Алтайск',
		},
		RUALT: {
			name: 'Алтай',
		},
		RUAMU: {
			name: 'Амур',
		},
		RUARK: {
			name: 'Архангельск',
		},
		RUAST: {
			name: 'Астрахань',
		},
		RUBA: {
			name: 'Башкортостан',
		},
		RUBEL: {
			name: 'Белгород',
		},
		RUBRY: {
			name: 'Брянск',
		},
		RUBU: {
			name: 'Республика Бурятия',
		},
		RUCE: {
			name: 'Чечня',
		},
		RUCHE: {
			name: 'Челябинск',
		},
		RUCHU: {
			name: 'Чукотский автономный округ',
		},
		RUCU: {
			name: 'Чувашия',
		},
		RUDA: {
			name: 'Дагестан',
		},
		RUIN: {
			name: 'Ингушетия',
		},
		RUIRK: {
			name: 'Иркутск',
		},
		RUIVA: {
			name: 'Иваново',
		},
		RUKAM: {
			name: 'Камчатка',
		},
		RUKB: {
			name: 'Кабардино-Балкарская Республика',
		},
		RUKC: {
			name: 'Карачаево-Черкессия',
		},
		RUKDA: {
			name: 'Краснодар',
		},
		RUKEM: {
			name: 'Кемерово',
		},
		RUKGD: {
			name: 'Калининград',
		},
		RUKGN: {
			name: 'Курган',
		},
		RUKHA: {
			name: 'Хабаровск',
		},
		RUKHM: {
			name: 'Ханты-Мансийск',
		},
		RUKIR: {
			name: 'Киров',
		},
		RUKK: {
			name: 'Хакассия',
		},
		RUKL: {
			name: 'Калмыкия',
		},
		RUKLU: {
			name: 'Калуга',
		},
		RUKO: {
			name: 'Коми',
		},
		RUKOS: {
			name: 'Кострома',
		},
		RUKR: {
			name: 'Карелия',
		},
		RUKRS: {
			name: 'Курск',
		},
		RUKYA: {
			name: 'Красноярск',
		},
		RULEN: {
			name: 'Ленинград',
		},
		RULIP: {
			name: 'Липецк',
		},
		RUMAG: {
			name: 'Магадан',
		},
		RUME: {
			name: 'Марий Эл',
		},
		RUMO: {
			name: 'Мордовия',
		},
		RUMOS: {
			name: 'Москва',
		},
		RUMOW: {
			name: 'Московская область',
		},
		RUMUR: {
			name: 'Мурманск',
		},
		RUNEN: {
			name: 'Ненецкий автономный округ',
		},
		RUNGR: {
			name: 'Великий Новгород',
		},
		RUNIZ: {
			name: 'Нижний Новгород',
		},
		RUNVS: {
			name: 'Новосибирск',
		},
		RUOMS: {
			name: 'Омск',
		},
		RUORE: {
			name: 'Оренбург',
		},
		RUORL: {
			name: 'Орёл',
		},
		RUPER: {
			name: 'Пермь',
		},
		RUPNZ: {
			name: 'Пенза',
		},
		RUPRI: {
			name: 'Приморье',
		},
		RUPSK: {
			name: 'Псков',
		},
		RUROS: {
			name: 'Ростов-на-Дону',
		},
		RURYA: {
			name: 'Рязань',
		},
		RUSA: {
			name: 'Республика Саха (Якутия)',
		},
		RUSAK: {
			name: 'Сахалин',
		},
		RUSAM: {
			name: 'Самара',
		},
		RUSAR: {
			name: 'Саратов',
		},
		RUSE: {
			name: 'Северная Осетия',
		},
		RUSMO: {
			name: 'Смоленск',
		},
		RUSPE: {
			name: 'Санкт-Петербург',
		},
		RUSTA: {
			name: 'Ставрополь',
		},
		RUSVE: {
			name: 'Свердловск',
		},
		RUTA: {
			name: 'Татарстан',
		},
		RUTAM: {
			name: 'Тамбов',
		},
		RUTOM: {
			name: 'Томск',
		},
		RUTUL: {
			name: 'Тула',
		},
		RUTVE: {
			name: 'Тверь',
		},
		RUTY: {
			name: 'Тыва',
		},
		RUTYU: {
			name: 'Тюмень',
		},
		RUUD: {
			name: 'Удмуртия',
		},
		RUULY: {
			name: 'Ульяновск',
		},
		RUVGG: {
			name: 'Волгоград',
		},
		RUVLA: {
			name: 'Владимир',
		},
		RUVLG: {
			name: 'Вологда',
		},
		RUVOR: {
			name: 'Воронеж',
		},
		RUYAN: {
			name: 'Ямало-Ненецкий автономный округ',
		},
		RUYAR: {
			name: 'Ярославль',
		},
		RUYEV: {
			name: 'Еврейская автономная область',
		},
		RUZAB: {
			name: 'Чита',
		},
		UA40: {
			name: 'Севастополь',
		},
		UA43: {
			name: 'Крым',
		},
	},
	locations: {
		0: {
			name: 'Ставрополь',
			lat: '45.044128',
			lng: '41.964882',
		},
		1: {
			name: 'Ростов-на-Дону',
			lat: '47.221809',
			lng: '39.720261',
		},
		2: {
			name: 'Смоленск',
			lat: '54.790310',
			lng: '32.050365',
		},
		3: {
			name: 'Тверь',
			lat: '56.858723',
			lng: '35.917599',
		},
	},
	labels: {
		RUAD: {
			name: 'Адыгея',
			parent_id: 'RUAD',
		},
		RUAL: {
			name: 'Горно-Алтайск',
			parent_id: 'RUAL',
		},
		RUALT: {
			name: 'Алтай',
			parent_id: 'RUALT',
		},
		RUAMU: {
			name: 'Амур',
			parent_id: 'RUAMU',
		},
		RUARK: {
			name: 'Архангельск',
			parent_id: 'RUARK',
		},
		RUAST: {
			name: 'Астрахань',
			parent_id: 'RUAST',
		},
		RUBA: {
			name: 'Башкортостан',
			parent_id: 'RUBA',
		},
		RUBEL: {
			name: 'Белгород',
			parent_id: 'RUBEL',
		},
		RUBRY: {
			name: 'Брянск',
			parent_id: 'RUBRY',
		},
		RUBU: {
			name: 'Республика Бурятия',
			parent_id: 'RUBU',
		},
		RUCE: {
			name: 'Чечня',
			parent_id: 'RUCE',
		},
		RUCHE: {
			name: 'Челябинск',
			parent_id: 'RUCHE',
		},
		RUCHU: {
			name: 'Чукотский автономный округ',
			parent_id: 'RUCHU',
		},
		RUCU: {
			name: 'Чувашия',
			parent_id: 'RUCU',
		},
		RUDA: {
			name: 'Дагестан',
			parent_id: 'RUDA',
		},
		RUIN: {
			name: 'Ингушетия',
			parent_id: 'RUIN',
		},
		RUIRK: {
			name: 'Иркутск',
			parent_id: 'RUIRK',
		},
		RUIVA: {
			name: 'Иваново',
			parent_id: 'RUIVA',
		},
		RUKAM: {
			name: 'Камчатка',
			parent_id: 'RUKAM',
		},
		RUKB: {
			name: 'Кабардино-Балкарская Республика',
			parent_id: 'RUKB',
		},
		RUKC: {
			name: 'Карачаево-Черкессия',
			parent_id: 'RUKC',
		},
		RUKDA: {
			name: 'Краснодар',
			parent_id: 'RUKDA',
		},
		RUKEM: {
			name: 'Кемерово',
			parent_id: 'RUKEM',
		},
		RUKGD: {
			name: 'Калининград',
			parent_id: 'RUKGD',
		},
		RUKGN: {
			name: 'Курган',
			parent_id: 'RUKGN',
		},
		RUKHA: {
			name: 'Хабаровск',
			parent_id: 'RUKHA',
		},
		RUKHM: {
			name: 'Ханты-Мансийск',
			parent_id: 'RUKHM',
		},
		RUKIR: {
			name: 'Киров',
			parent_id: 'RUKIR',
		},
		RUKK: {
			name: 'Хакассия',
			parent_id: 'RUKK',
		},
		RUKL: {
			name: 'Калмыкия',
			parent_id: 'RUKL',
		},
		RUKLU: {
			name: 'Калуга',
			parent_id: 'RUKLU',
		},
		RUKO: {
			name: 'Коми',
			parent_id: 'RUKO',
		},
		RUKOS: {
			name: 'Кострома',
			parent_id: 'RUKOS',
		},
		RUKR: {
			name: 'Карелия',
			parent_id: 'RUKR',
		},
		RUKRS: {
			name: 'Курск',
			parent_id: 'RUKRS',
		},
		RUKYA: {
			name: 'Красноярск',
			parent_id: 'RUKYA',
		},
		RULEN: {
			name: 'Ленинград',
			parent_id: 'RULEN',
		},
		RULIP: {
			name: 'Липецк',
			parent_id: 'RULIP',
		},
		RUMAG: {
			name: 'Магадан',
			parent_id: 'RUMAG',
		},
		RUME: {
			name: 'Марий Эл',
			parent_id: 'RUME',
		},
		RUMO: {
			name: 'Мордовия',
			parent_id: 'RUMO',
		},
		RUMOS: {
			name: 'Москва',
			parent_id: 'RUMOS',
		},
		RUMOW: {
			name: 'Московская область',
			parent_id: 'RUMOW',
		},
		RUMUR: {
			name: 'Мурманск',
			parent_id: 'RUMUR',
		},
		RUNEN: {
			name: 'Ненецкий автономный округ',
			parent_id: 'RUNEN',
		},
		RUNGR: {
			name: 'Великий Новгород',
			parent_id: 'RUNGR',
		},
		RUNIZ: {
			name: 'Нижний Новгород',
			parent_id: 'RUNIZ',
		},
		RUNVS: {
			name: 'Новосибирск',
			parent_id: 'RUNVS',
		},
		RUOMS: {
			name: 'Омск',
			parent_id: 'RUOMS',
		},
		RUORE: {
			name: 'Оренбург',
			parent_id: 'RUORE',
		},
		RUORL: {
			name: 'Орёл',
			parent_id: 'RUORL',
		},
		RUPER: {
			name: 'Пермь',
			parent_id: 'RUPER',
		},
		RUPNZ: {
			name: 'Пенза',
			parent_id: 'RUPNZ',
		},
		RUPRI: {
			name: 'Приморье',
			parent_id: 'RUPRI',
		},
		RUPSK: {
			name: 'Псков',
			parent_id: 'RUPSK',
		},
		RUROS: {
			name: 'Ростов-на-Дону',
			parent_id: 'RUROS',
		},
		RURYA: {
			name: 'Рязань',
			parent_id: 'RURYA',
		},
		RUSA: {
			name: 'Республика Саха (Якутия)',
			parent_id: 'RUSA',
		},
		RUSAK: {
			name: 'Сахалин',
			parent_id: 'RUSAK',
		},
		RUSAM: {
			name: 'Самара',
			parent_id: 'RUSAM',
		},
		RUSAR: {
			name: 'Саратов',
			parent_id: 'RUSAR',
		},
		RUSE: {
			name: 'Северная Осетия',
			parent_id: 'RUSE',
		},
		RUSMO: {
			name: 'Смоленск',
			parent_id: 'RUSMO',
		},
		RUSPE: {
			name: 'Санкт-Петербург',
			parent_id: 'RUSPE',
		},
		RUSTA: {
			name: 'Ставрополь',
			parent_id: 'RUSTA',
		},
		RUSVE: {
			name: 'Свердловск',
			parent_id: 'RUSVE',
		},
		RUTA: {
			name: 'Татарстан',
			parent_id: 'RUTA',
		},
		RUTAM: {
			name: 'Тамбов',
			parent_id: 'RUTAM',
		},
		RUTOM: {
			name: 'Томск',
			parent_id: 'RUTOM',
		},
		RUTUL: {
			name: 'Тула',
			parent_id: 'RUTUL',
		},
		RUTVE: {
			name: 'Тверь',
			parent_id: 'RUTVE',
		},
		RUTY: {
			name: 'Тыва',
			parent_id: 'RUTY',
		},
		RUTYU: {
			name: 'Тюмень',
			parent_id: 'RUTYU',
		},
		RUUD: {
			name: 'Удмуртия',
			parent_id: 'RUUD',
		},
		RUULY: {
			name: 'Ульяновск',
			parent_id: 'RUULY',
		},
		RUVGG: {
			name: 'Волгоград',
			parent_id: 'RUVGG',
		},
		RUVLA: {
			name: 'Владимир',
			parent_id: 'RUVLA',
		},
		RUVLG: {
			name: 'Вологда',
			parent_id: 'RUVLG',
		},
		RUVOR: {
			name: 'Воронеж',
			parent_id: 'RUVOR',
		},
		RUYAN: {
			name: 'Ямало-Ненецкий автономный округ',
			parent_id: 'RUYAN',
		},
		RUYAR: {
			name: 'Ярославль',
			parent_id: 'RUYAR',
		},
		RUYEV: {
			name: 'Еврейская автономная область',
			parent_id: 'RUYEV',
		},
		RUZAB: {
			name: 'Чита',
			parent_id: 'RUZAB',
		},
		UA40: {
			name: 'Севастополь',
			parent_id: 'UA40',
		},
		UA43: {
			name: 'Крым',
			parent_id: 'UA43',
		},
	},
	legend: {
		entries: [],
	},
	regions: {},
}
