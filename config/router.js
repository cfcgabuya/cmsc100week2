var student = require('./../controllers/student');
var teacher = require('./../controllers/teachers');

module.exports = function(router){
	router.route('/students')
		.get(student.find);
	router.route('/teachers')
		.get(teacher.find);
	router.route('/teachers')
		.post(teacher.create);
	router.route('/teachers')
		.put(teacher.update);
	router.route('/teachers')
		.delete(teacher.delete);
	return router;
};