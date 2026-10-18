// const library = {
//     name:"Frontend Library",
//     books:[],

//     addBook(title){
//         if(title === "" ){
//           return  "Invalid book title"
            
//         }
//         library.books.push(title)
//         return library.books.length
//     },
//     removeLastBook(){
//         if(library.books.length === 0 ){
//             return  "Library is empty"
//         }
//         return library.books.pop()
//     },
//     getLastBook(){
//         if(library.books.length === 0){
//             return "Library is empty"
//         }
//         return library.books[library.books.length - 1]
//     },
//     getSummary(){
//         return `${this.name} has ${library.books.length} books`
//     }
// }
// console.log(library.addBook("JavaScript Basics"));
// console.log(library.addBook("Clean Code"));  
// console.log(library.getLastBook());  
// console.log(library.removeLastBook()); 
// console.log(library.getSummary());

// ------------------------------------------------------- task_ 2 ---------------------------------

// const employee = {
//   name: "Mona",
//   baseSalary: 10000,
//   bonusPercentage: 10,
//   deduction: 500,
//   getReport(){
//     let bouns = calculateBonus(employee.baseSalary , employee.bonusPercentage);
//     let  net= calculateNetSalary (employee);
//     let  stutas= getSalaryStatus (net);
//     return `Employee:${employee.name} ,
//      Base Salary: ${employee.baseSalary}  EGP,
//      Deduction: ${employee.deduction}  EGP,
//      Net Salary:: ${net}  EGP,
//      Salary Status: ${stutas}
//       `
//   }
// };
// function calculateBonus(baseSalary, Percentage){
//    return (baseSalary * Percentage) / 100
// }
// let calculateNetSalary = function(employee){
//     return employee.baseSalary + employee.bonusPercentage -  employee.deduction
// }
// let getSalaryStatus = (netSalary) => {
//     if (netSalary>= 15000){
//         return "High"
//     }
//     else if(netSalary >= 8000 && netSalary < 15000){
//         return "Medium"
//     }
//     else{
//         return "Low"
//     }
// }
// // console.log(calculateBonus(10000, 10));
// // console.log(calculateNetSalary(employee));
// // console.log(getSalaryStatus(5000));
// console.log(employee.getReport());

// ------------------------------------------------------- task_ 3 ---------------------------------

// function createBankAccount(owner, initialBalance){
//         return {
//             owner:owner,
//             balance:initialBalance,
//             transactions:[],
//             deposit(amount){
//                 if(typeof amount !== "number" || amount<= 0){
//                     return "Invalid amount"
//                 }
//                 this.transactions.push({type: "deposit" , amount , balanceAfter:this.balance}) 
//                  this.balance += amount
//                 return this.balance 
//             },
//             withdraw(amount){
//                  if(typeof amount !== "number" || amount<= 0){
//                     return "Invalid amount"
//                 }
//                 else if(amount > initialBalance){
//                     return "Insufficient balance" 
//                 }
//                 this.transactions.push({type: "withdraw" , amount , balanceAfter:this.balance}) 
//                     this.balance -= amount
//                     return this.balance
                
//             },
//             getLastTransaction(){
//                 if(this.transactions.length === 0){
//                     return "No transactions"
//                 }
//                 return this.transactions[this.transactions.length -1]
//             },
//             undoLastTransaction(){
//                 if(this.transactions.length === 0){
//                     return "No transactions to undo"
//                 }
//                 const last =this.transactions.pop()
//                 this.balance=last.balanceAfter
//                 return this.balance
//             },
//             getSummary(){
//                 return `owner: ${this.owner} , current balance: ${this.balance} , transaction: ${this.transactions.length}`
//             }
//         }
// }
// const account = createBankAccount("Ahmed", 1000);
// console.log(account.deposit(200));    // 1200
// console.log(account.withdraw(300));   // 900
// console.log(account.withdraw(2000));  // "Insufficient balance"
// console.log(account.undoLastTransaction()); // 1200
// console.log(account.undoLastTransaction()); // 1000
// console.log(account.undoLastTransaction()); // "No transactions to undo"
// console.log(account.deposit(-50));    // "Invalid amount"
// console.log(account.deposit("200"));  // "Invalid amount"
// console.log(account. getSummary());  // "owner: Ahmed , current balance: 1000 , transaction: 0"