const Product = require('../models/product.model');

class FruitBasket {

    constructor() {
        this.basket =
        [
		  {
		  	'id' : 1,
		    'name': 'banana',
		    'type': 'fruit',
		    'sugar': 14
		  },
		  {
		  	'id' : 2,
		    'name': 'apple',
		    'type': 'fruit',
		    'sugar': 12
		  },
		  {
		  	'id' : 3,
		    'name': 'orange',
		    'type': 'fruit',
		    'sugar': 21
		  },
		  {
		  	'id' : 4,
		    'name': 'ananas',
		    'type': 'fruit',
		    'sugar': 14
		  },
		  {
		  	'id' : 5,
		    'name': 'watermelon',
		    'type': 'fruit',
		    'sugar': 2
		  },
		  {
		  	'id' : 6,
		    'name': 'melon',
		    'type': 'fruit',
		    'sugar': 4
		  },
		  {
		  	'id' : 7,
		    'name': 'tomatoes',
		    'type': 'vegetable',
		    'sugar': 4
		  }
		]
	}

    updateFrut(id, frut) {
        const indexToUpdate = this.basket.findIndex(frut => frut.id === id);
        if (indexToUpdate === -1) throw 'not_found';
        this.basket[indexToUpdate] = frut;
    }
    
    getFrut(filters) {
        const keys = Object.keys(filters);
        if (!keys.length) return this.basket; 
        return this.basket.filter(frut =>
            keys.every(key => frut[key] === filters[key])
        );
    }
}

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

//Simple version, trying to implement validation or sanitation
exports.testExercice = function (req, res) {
	TestBasket = new FruitBasket;
	const tmp_obj = {'id': 2,'name': 'tomatoes','type': 'vegetable','sugar': 120}
	//TestBasket.updateFrut(2,tmp_obj)
    res.send(TestBasket);
};