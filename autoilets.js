const bogs = [
	{
		"name": "D Floor Library Toilets",
		"building": "Hugh Owen",
		"location" : [
			52.41630621422134, -4.063704929103349
		],
		"floor": "D",
		"gender": 2,
		"notes": "No Notes",
		"scores": {
			"handdriers": 1,
			"floorceilingcubicles": 1,
			"manualflush": 0,
			"windows": 0,
			"tappressure": 7,
			"cubicles": 7,
			"quietness": 5,
			"cleanliness": 8,
			"soapuptime": 7,
			"tpuptime": 8,
			"lighting": 8
		}
	},
	{
		"name": "Workstation Toilets",
		"building": "Workstation",
		"location" : [
			52.413984411015875, -4.0818829729289049
		],
		"floor": "0",
		"gender": 2,
		"notes": "No Notes",
		"scores": {
			"handdriers": 0,
			"floorceilingcubicles": 0,
			"manualflush": 0,
			"windows": 0,
			"tappressure": 6,
			"cubicles": 0,
			"quietness": 8,
			"cleanliness": 7,
			"soapuptime": 8,
			"tpuptime": 7,
			"lighting": 6
		}
	},
	{
		"name": "DCS Mens",
		"building": "Llandinam",
		"location" : [
			52.41629745248087, -4.065505932775849
		],
		"floor": "B",
		"gender": 0,
		"notes": "Contains crucial Web Infrastructure.",
		"scores": {
			"handdriers": 1,
			"floorceilingcubicles": 0,
			"manualflush": 1,
			"windows": 0,
			"tappressure": 7,
			"cubicles": 3,
			"quietness": 5,
			"cleanliness": 5,
			"soapuptime": 6,
			"tpuptime": 8,
			"lighting": 5
		}
	},
	{
		"name": "Llandinam B Postgrad. Centre Mens",
		"building": "Llandinam",
		"location" : [
			52.41640701054271, -4.066159093545723
		],
		"floor": "B",
		"gender": 0,
		"notes": "No Notes",
		"scores": {
			"handdriers": 1,
			"floorceilingcubicles": 0,
			"manualflush": 0,
			"windows": 0,
			"tappressure": 4,
			"cubicles": 1,
			"quietness": 4,
			"cleanliness": 7,
			"soapuptime": 5,
			"tpuptime": 6,
			"lighting": 8
		}
	},
	{
		"name": "Hugh Owen North Mens",
		"building": "Hugh Owen",
		"location" : [
			52.417270614029775, -4.06425564068996
		],
		"floor": "A",
		"gender": 0,
		"notes": "No Notes",
		"scores": {
			"handdriers": 0,
			"floorceilingcubicles": 0,
			"manualflush": 1,
			"windows": 1,
			"tappressure": 3,
			"cubicles": 2,
			"quietness": 4,
			"cleanliness": 5,
			"soapuptime": 7,
			"tpuptime": 7,
			"lighting": 5
		}
	},
	{
		"name": "Llandinam Top Floor",
		"building": "MP",
		"location" : [
			52.41670064058521, -4.066624147156847
		],
		"floor": "L",
		"gender": 2,
		"notes": "On top of the world!",
		"scores": {
			"handdriers": 0,
			"floorceilingcubicles": 0,
			"manualflush": 1,
			"windows": 1,
			"tappressure": 6,
			"cubicles": 0,
			"quietness": 10,
			"cleanliness": 6,
			"soapuptime": 7,
			"tpuptime": 7,
			"lighting": 10
		}
	},
	{
		"name": "MP Main Floor Mens",
		"building": "MP",
		"location" : [
			52.41605786753717, -4.06552391189433
		],
		"floor": "0",
		"gender": 0,
		"notes": "That one urinal gets to me.",
		"scores": {
			"handdriers": 1,
			"floorceilingcubicles": 0,
			"manualflush": 0,
			"windows": 1,
			"tappressure": 2,
			"cubicles": 3,
			"quietness": 3,
			"cleanliness": 6,
			"soapuptime": 5,
			"tpuptime": 8,
			"lighting": 8
		}
	},
	{
		"name": "Cledwyn Basement Mens",
		"building": "Cledwyn",
		"location" : [
			52.417159721700244, -4.067189571545547
		],
		"floor": "-1",
		"gender": 0,
		"notes": "Horror story.",
		"scores": {
			"handdriers": 1,
			"floorceilingcubicles": 0,
			"manualflush": 1,
			"windows": 1,
			"tappressure": 6,
			"cubicles": 2,
			"quietness": 10,
			"cleanliness": 6,
			"soapuptime": 8,
			"tpuptime": 8,
			"lighting": 2
		}
	},
	{
		"name": "Penbryn Bottom Floor Mens",
		"building": "Penbryn",
		"location" : [
			52.418036565402545, -4.064732851299743
		],
		"floor": "0",
		"gender": 0,
		"notes": "Has a mysterious hole in the sink counter.",
		"scores": {
			"handdriers": 1,
			"floorceilingcubicles": 0,
			"manualflush": 0,
			"windows": 1,
			"tappressure": 4,
			"cubicles": 2,
			"quietness": 7,
			"cleanliness": 5,
			"soapuptime": 5,
			"tpuptime": 8,
			"lighting": 6
		}
	},
	{
		"name": "Iris De Freitas Toilets",
		"building": "Hugh Owen",
		"location" : [
			52.41672845459848, -4.064230981956178
		],
		"floor": "E",
		"gender": 2,
		"notes": "No Notes.",
		"scores": {
			"handdriers": 1,
			"floorceilingcubicles": 1,
			"manualflush": 1,
			"windows": 1,
			"tappressure": 3,
			"cubicles": 2,
			"quietness": 3,
			"cleanliness": 7,
			"soapuptime": 7,
			"tpuptime": 8,
			"lighting": 8
		}
	},
	{
		"name": "Undeb Aber Gents",
		"building": "Student Union",
		"location" : [
			52.415171460555946, -4.062864730306762
		],
		"floor": "0",
		"gender": 0,
		"notes": "No Notes.",
		"scores": {
			"handdriers": 1,
			"floorceilingcubicles": 1,
			"manualflush": 0,
			"windows": 0,
			"tappressure": 7,
			"cubicles": 4,
			"quietness": 4,
			"cleanliness": 8,
			"soapuptime": 8,
			"tpuptime": 8,
			"lighting": 9
		}
	},
	{
		"name": "MP Top Floor Mens",
		"building": "MP",
		"location" : [
			52.41586052500259, -4.065638347805913
		],
		"floor": "4",
		"gender": 0,
		"notes": "Feels like being on a plane, but the urinals are terrible.",
		"scores": {
			"handdriers": 0,
			"floorceilingcubicles": 1,
			"manualflush": 1,
			"windows": 1,
			"tappressure": 6,
			"cubicles": 1,
			"quietness": 9,
			"cleanliness": 8,
			"soapuptime": 5,
			"tpuptime": 6,
			"lighting": 10
		}
	}
];
