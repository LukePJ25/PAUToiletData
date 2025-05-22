const bogs = [
  {
    "name": "Hugh Owen D Floor Library Toilets",
    "building": "Hugh Owen",
    "location": [
      52.41630621422134,
      -4.063704929103349
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
    "location": [
      52.413984411015875,
      -4.081882972928905
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
    "location": [
      52.41629745248087,
      -4.065505932775849
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
    "location": [
      52.41640701054271,
      -4.066159093545723
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
    "location": [
      52.417270614029775,
      -4.06425564068996
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
    "building": "Llandinam",
    "location": [
      52.41670064058521,
      -4.066624147156847
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
    "name": "Physical Sciences Main Floor Mens",
    "building": "Physical Sciences",
    "location": [
      52.41605786753717,
      -4.06552391189433
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
    "location": [
      52.417159721700244,
      -4.067189571545547
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
    "location": [
      52.418036565402545,
      -4.064732851299743
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
    "location": [
      52.41672845459848,
      -4.064230981956178
    ],
    "floor": "E",
    "gender": 2,
    "notes": "No Notes.",
    "scores": {
      "handdriers": 1,
      "floorceilingcubicles": 1,
      "manualflush": 1,
      "windows": 1,
      "tappressure": 6,
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
    "location": [
      52.415171460555946,
      -4.062864730306762
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
    "name": "Physical Sciences Top Floor Mens",
    "building": "Physical Sciences",
    "location": [
      52.41586052500259,
      -4.065638347805913
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
  },
  {
    "name": "Hugh Owen Library E Floor Mens",
    "building": "Hugh Owen",
    "floor": "E",
    "gender": 0,
    "location": [
      52.4160469,
      -4.0635443
    ],
    "notes": "No Notes",
    "scores": {
      "handdriers": 1,
      "floorceilingcubicles": 0,
      "manualflush": 1,
      "windows": 0,
      "tappressure": 7,
      "cubicles": 1,
      "quietness": 6,
      "cleanliness": 6,
      "soapuptime": 8,
      "tpuptime": 8,
      "lighting": 8
    }
  },
  {
    "name": "Cledwyn Ground Floor Unisex",
    "building": "Cledwyn",
    "location": [
      52.417161,
      -4.067396
    ],
    "floor": "0",
    "gender": 2,
    "notes": "Single Toilet",
    "scores": {
      "handdriers": 0,
      "floorceilingcubicles": 1,
      "manualflush": 1,
      "windows": 0,
      "tappressure": 7,
      "cubicles": 1,
      "quietness": 9,
      "cleanliness": 9,
      "soapuptime": 8,
      "tpuptime": 7,
      "lighting": 8
    }
  },
  {
    "name": "Cledwyn Top Floor Mens",
    "building": "Cledwyn",
    "location": [
      52.417198,
      -4.067417
    ],
    "floor": "2",
    "gender": 0,
    "notes": "No Notes",
    "scores": {
      "handdriers": 0,
      "floorceilingcubicles": 0,
      "manualflush": 1,
      "windows": 1,
      "tappressure": 7,
      "cubicles": 2,
      "quietness": 8,
      "cleanliness": 8,
      "soapuptime": 7,
      "tpuptime": 8,
      "lighting": 6
    }
  },
  {
    "name": "Gwendolen Rees Top Floor Mens",
    "building": "Gwendolen Rees",
    "location": [
      52.416644,
      -4.066956
    ],
    "floor": "1",
    "gender": 0,
    "notes": "No Notes",
    "scores": {
      "handdriers": 1,
      "floorceilingcubicles": 0,
      "manualflush": 1,
      "windows": 0,
      "tappressure": 8,
      "cubicles": 1,
      "quietness": 6,
      "cleanliness": 8,
      "soapuptime": 6,
      "tpuptime": 9,
      "lighting": 7
    }
  },
  {
    "name": "Gwendolen Rees Bottom Floor Mens",
    "building": "Gwendolen Rees",
    "location": [
      52.416644,
      -4.066956
    ],
    "floor": "0",
    "gender": 0,
    "notes": "No Notes",
    "scores": {
      "handdriers": 1,
      "floorceilingcubicles": 0,
      "manualflush": 1,
      "windows": 0,
      "tappressure": 6,
      "cubicles": 1,
      "quietness": 5,
      "cleanliness": 7,
      "soapuptime": 7,
      "tpuptime": 6,
      "lighting": 7
    }
  },
  {
    "name": "Edward Llwyd Basement Mens",
    "building": "Edward Llwyd",
    "location": [
      52.415559,
      -4.066323
    ],
    "floor": "-1",
    "gender": 0,
    "notes": "No Notes",
    "scores": {
      "handdriers": 0,
      "floorceilingcubicles": 0,
      "manualflush": 1,
      "windows": 0,
      "tappressure": 5,
      "cubicles": 3,
      "quietness": 8,
      "cleanliness": 6,
      "soapuptime": 7,
      "tpuptime": 8,
      "lighting": 5
    }
  },
  {
    "name": "Edward Llwyd Ground Floor Unisex",
    "building": "Edward Llwyd",
    "location": [
      52.415767,
      -4.066578
    ],
    "floor": "0",
    "gender": 2,
    "notes": "Mid",
    "scores": {
      "handdriers": 0,
      "floorceilingcubicles": 1,
      "manualflush": 1,
      "windows": 0,
      "tappressure": 3,
      "cubicles": 1,
      "quietness": 5,
      "cleanliness": 4,
      "soapuptime": 6,
      "tpuptime": 4,
      "lighting": 4
    }
  },
  {
    "name": "Edward Llwyd Top Floor Mens",
    "building": "Edward Llwyd",
    "location": [
      52.415852,
      -4.06665
    ],
    "floor": "1",
    "gender": 0,
    "notes": "Club Toilets",
    "scores": {
      "handdriers": 0,
      "floorceilingcubicles": 0,
      "manualflush": 1,
      "windows": 1,
      "tappressure": 4,
      "cubicles": 1,
      "quietness": 6,
      "cleanliness": 3,
      "soapuptime": 6,
      "tpuptime": 7,
      "lighting": 7
    }
  },
  {
    "name": "Physical Sciences 1st Floor Unisex",
    "building": "Physical Sciences",
    "location": [
      52.415664,
      -4.065379
    ],
    "floor": "1",
    "gender": 2,
    "notes": "No Notes",
    "scores": {
      "handdriers": 1,
      "floorceilingcubicles": 0,
      "manualflush": 1,
      "windows": 1,
      "tappressure": null,
      "cubicles": 1,
      "quietness": 6,
      "cleanliness": 7,
      "soapuptime": 7,
      "tpuptime": 8,
      "lighting": 9
    }
  },
  {
    "name": "Physical Sciences Second Floor Mens",
    "building": "Physical Sciences",
    "location": [
      52.416019,
      -4.065523
    ],
    "floor": "2",
    "gender": 0,
    "notes": "Smelly but huge",
    "scores": {
      "handdriers": 1,
      "floorceilingcubicles": 0,
      "manualflush": 1,
      "windows": 1,
      "tappressure": 4,
      "cubicles": 3,
      "quietness": 6,
      "cleanliness": 8,
      "soapuptime": 6,
      "tpuptime": 7,
      "lighting": 7
    }
  },
  {
    "name": "Physical Sciences Third Floor Unisex",
    "building": "Physical Sciences",
    "location": [
      52.415904,
      -4.065623
    ],
    "floor": "3",
    "gender": 2,
    "notes": "No Notes",
    "scores": {
      "handdriers": 1,
      "floorceilingcubicles": 0,
      "manualflush": 1,
      "windows": 1,
      "tappressure": 4,
      "cubicles": 1,
      "quietness": 7,
      "cleanliness": 6,
      "soapuptime": 5,
      "tpuptime": 6,
      "lighting": 8
    }
  }
];
