
		var message = "Hello";
		var obj = {
			message: "World",
			sayHello: function(){
				(function(){
					console.log(this.message);	
				}());
				

			}
		};

		var fn = obj.sayHello;
		fn(); //Hello
		obj.sayHello(); //World
