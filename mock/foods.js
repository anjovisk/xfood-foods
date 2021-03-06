const foods = [
    {
        "id": 1,
        "name": "Feijoada",
        "image": "http://localhost/img/feijoada.jpg",
        "categories": [{
            "value": "brasileira",
            "name": "Brasileira"
        }],
		"rating": 4.4,
		"status": {
			"value": "available",
			"name": "Available"
		},
        "description": "flaj da f d aldfjlajf jaljdfljad fa dfajlsjdflakjdslfa sfjalsd fasjlfajs dfa dlfja fd aldj fla dlfa lsdf"
    },
    {
        "id": 2,
        "image": "http://localhost/img/food.jpg",
        "name": "Temaki",
        "categories": [{
            "value": "japonesa",
            "name": "Japonesa"
        }],
		"rating": 4.9,
		"status": {
			"value": "available",
			"name": "Available"
		},
        "description": "flaj da f d aldfjlajf jaljdfljad fa dfajlsjdflakjdslfa sfjalsd fasjlfajs dfa dlfja fd aldj fla dlfa lsdf"
    },
    {
        "id": 3,
        "image": "http://localhost/img/food.jpg",
        "name": "Tropeiro",
        "categories": [{
            "value": "brasileira",
            "name": "Brasileira"
        }],
		"rating": 3.5,
		"status": {
			"value": "unavailable",
			"name": "Unavailable"
		},
        "description": "flaj da f d aldfjlajf jaljdfljad fa dfajlsjdflakjdslfa sfjalsd fasjlfajs dfa dlfja fd aldj fla dlfa lsdf"
    },
    {
        "id": 4,
        "image": "http://localhost/img/food.jpg",
        "name": "Lasanha",
        "categories": [{
            "value": "massas",
            "name": "Massas"
        }],
		"rating": 4.4,
		"status": {
			"value": "available",
			"name": "Available"
		},
        "description": "flaj da f d aldfjlajf jaljdfljad fa dfajlsjdflakjdslfa sfjalsd fasjlfajs dfa dlfja fd aldj fla dlfa lsdf"
    },
    {
        "id": 5,
        "image": "http://localhost/img/food.jpg",
        "name": "Frango Xadrez",
        "categories": [{
            "value": "chinesa",
            "name": "Chinesa"
        }],
		"rating": 2.7,
		"status": {
			"value": "unavailable",
			"name": "Unavailable"
		},
        "description": "flaj da f d aldfjlajf jaljdfljad fa dfajlsjdflakjdslfa sfjalsd fasjlfajs dfa dlfja fd aldj fla dlfa lsdf"
    }
]

const foodCategories = [
    {
      "value": "brasileira",
      "name": "Brasileira"
    },
    {
      "value": "japonesa",
      "name": "Japonesa"
    },
    {
      "value": "massas",
      "name": "Massas"
    },
    {
        "value": "chinesa",
        "name": "Chinesa"
    },
    {
        "value": "mexicana",
        "name": "Mexicana"
    },
    {
        "value": "tailandesa",
        "name": "Tailandesa"
    },
    {
        "value": "lanche",
        "name": "Lanche"
    },
    {
        "value": "pizza",
        "name": "Pizza"
    },
    {
        "value": "mineira",
        "name": "Mineira"
    },
    {
        "value": "sobremesa",
        "name": "Sobremesa"
    },
    {
        "value": "doce",
        "name": "Doce"
    }
];

const foodStatuses = [
    {
        "value": "available",
        "name": "Available"
    },
    {
        "value": "unavailable",
        "name": "Unavailable"
    }
];

module.exports  = { foods, foodCategories, foodStatuses };