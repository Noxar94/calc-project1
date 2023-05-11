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
    if (amount <= 0 || isNaN(amount)) {
      alert("cant use negative numbers or letters");
      return menu();
    } else
      this.balanceArray.push({
        amount: parseFloat(amount),
      });
    return true;
  },

  withdrawal: function (amount) {
    const balance = this.getBalance();

    if (amount > balance) {
      return false;
    }
    if (amount <= 0 || isNaN(amount)) {
      alert("cant use negative numbers or letters");
      return menu();
    } else
      this.balanceArray.push({
        amount: -parseFloat(amount),
      });
    return true;
  },
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
        const deposited = accountObj.deposit(DepositAmount);

        if (deposited) {
          prompt("Succes! added: " + DepositAmount + "kr too balance");
        } else {
          prompt("srry something happed");
        }
        break;
      case "3":
        const WithdrawalAmount = prompt("Enter withdrawal amount: ");
        const withdrawn = accountObj.withdrawal(WithdrawalAmount);
        if (withdrawn) {
          prompt(
            "Success! Subtracted: " + WithdrawalAmount + "kr from balance"
          );
        } else {
          prompt("Not enough balance.");
        }
        break;
      case "4":
        prompt("Name of account: " + accountObj.accountName);
        break;
      case "5":
        alert("Exited");
        break;
      default:
        alert("Invalid choice!");
    }
  } while (choice !== "5");
}

menu();
