1- A method is a block of code which only runs when it is called.
       1- Why use methods? To reuse code: define the code once, and use it many times.
         (methods : تستخدم لتعريف الكود مره واحده واستخدمه عدة مرات عن طريق الاستدعاء )=> reusable code ( invoking, calling)
          (يتم استدعاء methods عن طريق اسمها و الاقواس بيكون فيها المعاملات) invoking = method name (argument) 

2- What does pop() return when the array is empty? 
               (pop() : لو استخدمت مع مصفوفه فاضيه بترجع قيمه غير معرفه ) return = undefined

3- Can you change an array’s elements or an object’s properties when it is declared with const?
         ( ايوا بقدر اغير في قيم arrey , object عادي لكن مقدرش اغير arrey , object نفسه )

4- How is modifying a value different from reassigning the variable? 
   1- modifying : بيشير لتعدبل قيمه بس value يعنى let i= 5  modifying  let i= 10 
   2-  reassigning :  اعاده انشاء متغير باسم و قيمه مختلفين  let name="mohamed" reassigning  let age = 20

5- Can you call each one before the line where it is defined? Explain using examples with const for the function expression.
   1- Function Delaration : sayHello()
               function sayHello(){} (function Declaration: اقدر استدعى الداله قبل ما اعرفها )
   2- Function Expression :  
                                  <!-- sayHello() ==> Error -->
              const sayHello() = function(){} 
                  sayHello() 

6- What is the difference between an implicit return and an explicit return?
   1- Explicit return :  دى اللى القيمه اللى راجعه انا اللى بكتبها بنفسى زى مثلا فى function Delcaration 
   2- Implicit return : دلا بتلاجع قيمه تلاقئى بدون ما انا اكتبها زى فى Arrow function اما تكون عندى one statment و ما فيش curly prackets {}

7- How do you return an object using an arrow function?
        ( لو عايزين نرجع قيمه object باستخدام arrow function بكتب object داخل brackets  ({object}))

8- What is the difference between a parameter and an argument?
        1- parameter : (دى بتكتب مع تعريف function           function sayHello (parameter) {function body})
        2- argument : (دى بيكتب عند استعاء function من اجل التنفيذ        sayHello(argument))

9- What does a function return when it has no return statement?
     No return ==> Undefined

