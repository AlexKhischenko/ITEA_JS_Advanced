/*
Task
Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
*/

var Person = function(firstAndLast) {
    let personFullName = firstAndLast;
    this.getFirstName = function() {
      return personFullName.split(' ')[0];
    };
    this.getLastName = function() {
      return personFullName.split(' ')[1];
    };
    this.getFullName = function() {
      return personFullName;
    };
    this.setFirstName = function(data) {
        personFullName = `${data} ${personFullName.split(' ')[1]}`;
    }
    this.setLastName = function(data) {
        personFullName = `${personFullName.split(' ')[0]} ${data}`;
    }
    this.setFullName = function(data) {
        personFullName = data;
    }
    return personFullName;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();

console.log(Object.keys(bob).length); /* should return 6 */
console.log(bob instanceof Person); /* should return true */
console.log(bob.firstName); /* should return undefined */
console.log(bob.lastName); /* should return undefined */
console.log(bob.getFirstName()); /* should return "Bob" */
console.log(bob.getLastName()); /* should return "Ross" */
console.log(bob.getFullName()); /* should return "Bob Ross" */

