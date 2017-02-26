/* ----- vsscBus Init ----- */

var vssCartBus = new Vue();

/* ----- vssCart Init ----- */

var vssCartData = {
	data: {
		products: []
	}
};

var vssCart = Vue.extend({
	template: '#template-vss-cart',
	props: {
		type: String,
		eventable: Boolean
	},
	data: function() {
		return vssCartData
	},
	methods: {
		initVssCart: function() {
			if (localStorage) {
				if (localStorage.getItem('vssCart')) {
					this.$set(this, 'data', JSON.parse(localStorage.getItem('vssCart')));
				}
			}
			else {
				console.log("localStorage isn't support!");
			}
		},
		setVssCart: function() {
			if (localStorage) {
				localStorage.setItem('vssCart', JSON.stringify(this.data));
			}
			else {
				console.log("localStorage isn't support!");
			}
		},
		addProduct: function(product) {
			var self          = this;
			var productNumber = self.findProductNumber(product);
			if (productNumber === undefined) {
				self.data.products.push({
					id: product.id,
					title: product.title,
					image: product.image,
					price: product.price,
					count: 1
				});
			}
			else {
				self.data.products[productNumber].count += 1;
			}
			this.setVssCart();
		},
		removeProduct: function(product) {
			var productNumber = this.findProductNumber(product);
			this.data.products.splice(productNumber, 1);
			this.setVssCart();
		},
		reduceProduct: function(product) {
			var productNumber = this.findProductNumber(product);
			if (this.data.products[productNumber].count > 1) {
				this.data.products[productNumber].count--;
				this.setVssCart();
			}
			else {
				this.removeProduct(product);
			}
		},
		increaseProduct: function(product) {
			var productNumber = this.findProductNumber(product);
			this.data.products[productNumber].count++;
			this.setVssCart();
		},
		findProductNumber: function(product) {
			for (var i = 0; i < this.data.products.length; i++) {
				if (this.data.products[i].id === product.id) {
					return i;
				}
			}
		},
		getProductCount: function(product) {
			var productNumber = this.findProductNumber(product);
			
			return this.data.products[productNumber].count
		},
		getProductsCount: function() {
			var count = 0;
			for (var i = 0; i < this.data.products.length; i++) {
				count += this.data.products[i].count;
			}
			
			return count;
		},
		getProductsTotalPrice: function() {
			var price = 0;
			for (var i = 0; i < this.data.products.length; i++) {
				price += this.data.products[i].count * this.data.products[i].price;
			}
			
			return price.toFixed(2);
		},
		getProductTotalPrice: function(product) {
			var productNumber = this.findProductNumber(product);
			
			return this.data.products[productNumber].count * this.data.products[productNumber].price;
		}
	},
	created: function() {
		var self = this;
		self.initVssCart();
	}
});

/* ----- Vue Init ----- */

var app = new Vue({
	el: '#app',
	components: {
		'vss-cart': vssCart
	}
});