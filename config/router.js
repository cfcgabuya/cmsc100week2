var student = require('./../controllers/student');
var teacher = require('./../controllers/teachers');

module.exports = function(router){
	router.route('/students')
		.get(student.find)
		.post(student.insert);
		
	router.route('/students/:id')
		.get(student.findOne)
		.put(student.update)
		.delete(student.remove);
		
	router.route('/teachers')
		.get(teacher.find)
		.post(teacher.create)
		.put(teacher.update)
		.delete(teacher.delete);
	return router;
};