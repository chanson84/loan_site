$(document).ready(
    function () {

//add event handlers
        var myRules = {
            salary: {
                required: true,
                min: 40000,
                max: 100000,
                digits: true
            },
            creditScore: {
                required: true,
                min: 300,
                max: 850,
                digits: true
            },
            jobTime: {
                required: true,
                min: 0,
                max: 360,
                digits: true
            }
        }
        var myMessages = {
            salary: {
                required: "Salary is required",
                min: "Your Salary is too low",
                max: "Your Salary is too high",
                digits: "Please use numerical values"
            },
            creditScore: {
                required: "Your Credit Score is required",
                min: "Your credit score is too low",
                max: "Enter a valid credit score",
                digits: "Enter a valid credit score"
            },
            jobTime: {
                required: "Your time at your job is required in months",
                min: "Not enough job time",
                max: "Enter correct time in months",
                digits: "Enter correct time in months"
            }
        }

//Math
        if (salary > 40000) {
            true
        }
        if (salary < 40000) {
            false
        }
        if (creditScore < 630) {
            false
        }
        if (creditScore > 629) {
            true
        }
        if (jobTime < 12) {
            false
        }
        if (jobTime > 12) {
            true
        }

//Function for form validation
        function validateForm() {
            var formSalary = document.forms["loanForm"]["salary"].value;
            if (formSalary ==""){
                alert("Salary is required");
                return false;
            }
            var formCredit = document.forms["loanForm"]["creditScore"].value;
            if (formCredit ==""){
                alert("Your Credit Score is required");
                return false;
            }
            var formJob = document.forms["loanForm"]["jobTime"].value;
            if (formJob ==""){
                alert("Your time at your job is required in months")
                return false;
            }
        }

        //all other functions (program logic)
        $(validateForm()).validate({
            rules: myRules,
            messages: myMessages,
        })
//put in spans
        $("#loanStatus").text();
        $(".output").show();

//Amortization Calculator
        var calcRules ={
            presValue: {
                required:true,
            min: 100,
            max: 100000,
            digits: true},
            intRate: {
                required:true,
                min: 0.1,
                max: 10,
                digits: true
            },
            numPmt: {
                required: true,
                min: 2,
                max: 120,
                digits:true
            }
        }
        var calcMessages = {
            presValue: {
                required: "Your loan's present value is required.",
                min: "Your loan's value is too low.",
                max: "Your loan value is too high.",
                digits:"Please use numbers for your loan value."
            },
            intRate: {
                required: "Your loan's interest rate is required.",
                min: "Your interest rate is too low.",
                max: "Your interest rate is too high.",
                digits: "Please use numbers to one decimal for your loan"
            },
            numPmt: {
                required: "The number of payments you have are required.",
                min: "Your number of payments is too low.",
                max: "Your number of payments is too high.",
                digits: "Please enter the numerical value of payments."
            }
        }
        //Math
var intPayment1 = intRate + 1;
        var intPaymentTotal = intPayment1 / numPayments -1;
        var intRatePer = intRate * 0.01;
        var intPVal = intRatePer * presValue;
        var paymentFinal = intPVal / intPaymentTotal;

        //Put in Spans
$("#loanPmt").text;
    })