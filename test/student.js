//import modules
var request = require('supertest'),
	should = require('should-http');

describe('student', function(){		//for whole student module
	var url = 'localhost:5000';
	describe('find()', function(){	//for every unit	
		it('Should retrieve all student record.', function(done){
			request(url).get('/students').end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Array).and.have.lengthOf(5);
				done();
			});
		});
	});
	
	describe('findOne()', function(){	//for every unit	
		it('Should retrieve an existing student record.', function(done){
			request(url).get('/students/2015-12345').end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				done();
			});
		});
	});
	
	describe('insert()', function(){	//for every unit	
		it('Should return the newly created record.', function(done){
			request(url).post('/students').send({'studNo':'2015-67890','name':'Yay','bdate':'2015-09-11'}).end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);
				res.body.should.be.an.instanceOf(Object);
				done();
			});
		});
	});
});