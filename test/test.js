var assert = chai.assert;
var should = chai.should();
describe('Tests for todo.app', function() {
  describe('the trimTodoName function', function() {
    it('should remove leading whitespace', function() {
      todo.util.trimTodoName('   name').should.equal('name');
    });
    it('should remove trailing whitespace', function() {
      todo.util.trimTodoName('name   ').should.have.length(4);
    });
    it('should remove leading and trailing whitespace', function() {
      assert(todo.util.trimTodoName('  name  '), 'name');
    });
  });
}
);