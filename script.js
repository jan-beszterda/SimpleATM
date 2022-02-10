let account = {
  accountName: "Spongebob Squarepants",
  balance: 100,

  getBalance: function () {
    return `${this.balance}`;
  },

  deposit: function () {
    /*
     * Using parseFloat method here to assure input can be converted to a number.
     * If not amount is set to NaN and an error message is shown.
     */
    let amount = parseFloat(prompt(`Input deposit amount:`));
    if (isNaN(amount) || amount <= 0) {
      this.accountError(`Incorrect deposit amount!`);
      this.deposit();
    } else {
      this.balance += amount;
    }
  },

  withdrawal: function () {
    /*
     * Using parseFloat method here to assure input can be converted to a number.
     * If not amount is set to NaN and an error message is shown.
     */
    let amount = parseFloat(prompt(`Input withdrawal amount:`));
    if (isNaN(amount) || amount <= 0 || amount > this.balance) {
      this.accountError(`Incorrect withdrawal amount!`);
      this.withdrawal();
    } else {
      this.balance -= amount;
    }
  },

  getAccountName: function () {
    return this.accountName;
  },

  /*
   * accountError function is used for displaying error messages to the user.
   * 'Message' argument allows it to be flexible and adapt the error text to the situation.
   * This function is used in these places where an error could occur due to incorrect input from the user
   * e.g. in deposit & withdrawal functions where user is asked to input amount as well as in main menu where user
   * can pick an incorrect option.
   */
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
