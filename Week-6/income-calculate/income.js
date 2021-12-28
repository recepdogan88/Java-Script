const incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic",
                        600, 79, "abo", 342, "printer", 450, 32, 45, "fitness",
                        64, 10, 23, 12, 2, 56,7]

let salary=incomeStatement[0]
//console.log(salary)


function expendetures(){
    incomeStatement.shift()
    let expendeture=incomeStatement
                                  .filter((item)=>(typeof item=="number"))
                                  .reduce((accumulator,item)=>accumulator+item)
    
    return  expendeture
}
let gider=expendetures()
console.log(gider)

function supportBudget(gider){
     let amount=gider*0.2
     return amount
}
let butce=supportBudget(gider)
console.log(butce)


function leftMoney(a,b,c){
    let leftincome=a-(b-c)
    return leftincome
}
console.log(leftMoney(salary,gider,butce))







//call functions
expendetures()
supportBudget()
leftMoney()










/*let removedString=incomeStatement.filter((item)=>(typeof item=="number"))
console.log(removedString)


function income(){
    sum=0
    for(let i=0;i<removedString.length;i=i+2){
        sum=sum+removedString[i]
  } return sum
}

console.log(income())

function expendetures(){
    sum=0
    for(let i=1;i<removedString.length;i=i+2){
        sum=sum+removedString[i]
        kalan=sum/1.2
    }return kalan
}
console.log(expendetures())



function result(a,b){
    let leftmoney=a-b
    return leftmoney
}
console.log(result(income(),expendetures()))*/