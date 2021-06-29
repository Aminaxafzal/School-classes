class School {

    constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  
      }
  
      get name() {
      return this._name;
    }
    
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
   
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
  
   static pickSubstituteTeacher(substituteTeachers) {
     Math.floor(substituteTeachers.length * Math.random());
  }
  
  
  
    set numberOfStudents(value) {
     if ( typeof numberOfStudents === number) {
     this.numberOfStudents = numberOfStudents; 
    } else {
      console.log('Invalid input: numberOfStudents must be set to a Number.');
    }
  }
  
     }
  
  
  
  
  class Primary extends School {
    constructor(name,numberOfStudents,pickupPolicy){
    super(name,'primary',  numberOfStudents);
    this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  
    }
  
  class Highschool extends School {
    constructor(name,numberOfStudents,sportsTeams){
    super(name,'High',numberOfStudents)
    this._sportsTeams= sportsTeams;
    }
    
    get sportsTeams() {
      return this._sportsTeams;
    }
  
  }
  
  const lorraineHansbury = new Primary ('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.'); 
  
  lorraineHansbury.quickFacts();
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new Highschool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);