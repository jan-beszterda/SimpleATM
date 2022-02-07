let account = {
  accountName: "Spongebob Squarepants",
  balance: 100,
  getBalance: function () {
    return this.balance.toString();
  },
  deposit: function () {
    while (true) {
      let amount = parseFloat(prompt(`Input deposit amount:`));
      if (isNaN(amount) || amount <= 0) {
        this.accountError(`Incorrect deposit amount!`);
      } else {
        this.balance += amount;
        break;
      }
    }
  },
  withdrawal: function () {
    while (true) {
      let amount = parseFloat(prompt(`Input withdrawal amount:`));
      if (isNaN(amount) || amount <= 0 || amount > this.balance) {
        this.accountError(`Incorrect withdrawal amount!`);
      } else {
        this.balance -= amount;
        break;
      }
    }
  },
  getAccountName: function () {
    return this.accountName;
  },
  accountError: function (message) {
    alert(message);
  },
  exitAccount: function () {
    return false;
  },
};

function atm(account) {
  let keepAlive = true;
  while (keepAlive) {
    switch (mainMenu()) {
      case "1":
        alert(`Your account name: ${account.getAccountName()}`);
        break;
      case "2":
        alert(`Your account balance: ${account.getBalance()}`);
        break;
      case "3":
        account.deposit();
        break;
      case "4":
        account.withdrawal();
        break;
      case "5":
        keepAlive = account.exitAccount();
        break;
      default:
        account.accountError(`Incorrect option!`);
        break;
    }
  }
}

function mainMenu() {
  return prompt(
    `Hello and welcome to your bank account!
    
What would you like to do?
1. Show account name
2. Show account balance
3. Deposit money
4. Withdraw money
5. Exit account`
  );
}

atm(account);
