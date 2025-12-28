function BankAccount(accountHolderName, balance) {
    this.accountHolderName = accountHolderName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount) {
        this.balance += amount;
          
    };
    this.withdraw = (amount) =>  {
        this.balance -= amount;
    };
};


const accountForm = document.querySelector("#accountForm");
const customerName = document.querySelector("#customerName");
const balance = document.querySelector("#balance");

const depositForm = document.querySelector("#depositForm");
const accountNumber = document.querySelector("#accountNumber");
const amount = document.querySelector("#amount");

const accounts = [];

accountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const acc = new BankAccount(customerName.value, +balance.value);
    accounts.push(acc);
    console.log(accounts);
})

depositForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const acc = accounts.find(acc => acc.accountNumber === +accountNumber.value);
    acc.deposit(+amount.value);
    console.log(accounts);
})

// const account1 = new BankAccount(123456, "John Doe", 2000);
// const account2 = new BankAccount(123568, "rakesh kumar", 6000);

// account1.deposit(3000);
// account2.deposit(2000);

// account1.withdraw(1000);
// account2.withdraw(3000);

// console.log(account1, account2);