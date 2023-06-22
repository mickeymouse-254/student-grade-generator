const studentMarks = prompt("Enter the student's marks (between 0 and 100):");
const marks = Number(studentMarks); 
let grade;
if (marks >= 80) {
  grade = 'A';
} else if (marks >= 60) {
  grade = 'B';
} else if (marks >= 50) {
  grade = 'C';
} else if (marks >= 40) {
  grade = 'D';
} else {
  grade = 'E';
}
console.log(`The student's grade is: ${grade}`);



function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
  
    if (speed <= speedLimit) {
      console.log("Ok");
      return;
    }
  
    const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
    
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log("Points:", demeritPoints);
    }
  }
  
  
  calculateDemeritPoints(80); 
  calculateDemeritPoints(65); 
  calculateDemeritPoints(100); 
  calculateDemeritPoints(150); 

  function calculateNetSalary(basicSalary, benefits) {
    
    const taxThreshold = 24000;
    const taxRates = [
      { threshold: 24000, rate: 0 },
      { threshold: 40000, rate: 10 },
      { threshold: 80000, rate: 15 },
      { threshold: 120000, rate: 20 },
      { threshold: 160000, rate: 25 },
      { threshold: Infinity, rate: 30 },
    ];
  
    
    const nhifThresholds = [
      { threshold: 5999, rate: 150 },
      { threshold: 7999, rate: 300 },
      { threshold: 11999, rate: 400 },
      { threshold: 14999, rate: 500 },
      { threshold: 19999, rate: 600 },
      { threshold: 24999, rate: 750 },
      { threshold: 29999, rate: 850 },
      { threshold: 34999, rate: 900 },
      { threshold: 39999, rate: 950 },
      { threshold: 44999, rate: 1000 },
      { threshold: 49999, rate: 1100 },
      { threshold: 59999, rate: 1200 },
      { threshold: 69999, rate: 1300 },
      { threshold: 79999, rate: 1400 },
      { threshold: 89999, rate: 1500 },
      { threshold: 99999, rate: 1600 },
      { threshold: Infinity, rate: 1700 },
    ];
  
    
    const nssfThreshold = 18000;
    const nssfRate = 6;
  
    
    const grossSalary = basicSalary + benefits;
  
    
    let payee = 0;
    let taxableIncome = grossSalary - taxThreshold;
    for (let i = taxRates.length - 1; i >= 0; i--) {
      if (taxableIncome > taxRates[i].threshold) {
        payee = (taxableIncome - taxRates[i].threshold) * (taxRates[i].rate / 100);
        break;
      }
    }
  
    
    let nhifDeductions = 0;
    for (let i = nhifThresholds.length - 1; i >= 0; i--) {
      if (grossSalary > nhifThresholds[i].threshold) {
        nhifDeductions = nhifThresholds[i].rate;
        break;
      }
    }
  
    
    const nssfDeductions = Math.min(grossSalary * (nssfRate / 100), nssfThreshold);
  
    
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
  
    
    console.log("Gross Salary:", grossSalary);
    console.log("Payee (Tax):", payee);
    console.log("NHIF Deductions:", nhifDeductions);
    console.log("NSSF Deductions:", nssfDeductions);
    console.log("Net Salary:",
  