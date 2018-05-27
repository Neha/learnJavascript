# learnJavascript
A simple examples to understand how Javascript and its concepts work.

# ES6 Classes and Inheritance ES6-classes.js

- How to define class
    class CLASSNAME {
        //CODE GOES HERE
    }

- How to define constrcutors
    class CLASSNAME {
        constructor(){
            //INITIAL PROPERTIES GOES HERE
        }
    }

- How to add methods
     class CLASSNAME {
        constructor(){
            //INITIAL PROPERTIES GOES HERE
        }
        METHODNAME() {
            // CODE GOES HERE
        }
    }

- How to get the class instance
     const INSTANCENAME = new CLASSNAME() ; // can pass the properties value in classname();

- How to inherit the subclass from parent class
     class CHILDSUBCLASS extends CLASSNAME {
         //CODE GOES HERE
     }

- How to add child properties
    class CHILDSUBCLASS extends CLASSNAME {
           constructor(){
               super();
               //CHILD LEVEL PROPERTIES GOES HERE
           }    
        }

- How to access parents properties and methods
    class CHILDSUBCLASS extends CLASSNAME {
           constructor(parentProps){
               super(parentProps, Childprops);
               //CHILD LEVEL PROPERTIES GOES HERE
           }    
        }

- How to create 3rd sub-child and inherit the 2nd child
 class CHILDSUB2ndCLASS extends CHILDSUBCLASS {
           constructor(parentProps){
               super(parentProps, Childprops);
               //CHILD LEVEL PROPERTIES GOES HERE
           }    
        }
