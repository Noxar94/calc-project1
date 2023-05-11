// account object!
const accountObj = {
  accountName: "Jonatan Lundmark",
  balanceArray: [],

  getBalance: function () {
    let balance = 0;
    this.balanceArray.forEach(function (Obj) {
      balance += Obj.amount;
    });
    return balance;
  },

  deposit: function (amount) {
    this.balanceArray.push({
      amount: parseFloat(amount),
    });
  },

  withdrawal: function (amount) {},
};

function menu() {
  let choice;

  const menu = `
  Select a choice:
  1. See balance
  2. Deposit
  3. Withdrawal
  4. See accountname
  5. Exit
  `;

  do {
    choice = prompt(menu + "Enter choice (1-5)");

    switch (choice) {
      case "1":
        prompt("Balance: " + accountObj.getBalance());
        break;
      case "2":
        const DepositAmount = prompt("Enter deposit amount: ");
        accountObj.deposit(DepositAmount);
        break;
      case "3":
        break;
      case "4":
        prompt(accountObj.accountName);
        break;
      case "5":
        prompt("bye bye");
        break;
      default:
        alert("Invalid choice!");
    }
  } while (choice !== "5");
}

menu();
