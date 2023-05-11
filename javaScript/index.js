// account object!
const accountObj = {
  accountName: "Jonatan Lundmark",
  balanceArray: [],

  // en funktion för att räkna ut saldo genom att summera alla värden i balanceArray
  getBalance: function () {
    let balance = 0;

    this.balanceArray.forEach(function (Obj) {
      balance += Obj.amount;
    });
    return balance;
  },
  // en funktion för insättning, som lägger till beloppet i balanceArray
  deposit: function (amount) {
    if (amount <= 0 || isNaN(amount)) {
      // om amount är mindre än noll eller is not a number.
      alert("cant use negative numbers or letters");
      return menu();
    } else
      this.balanceArray.push({
        amount: parseFloat(amount),
      });
    return true;
  },
  // en funktion för uttag, som tar ett belopp från balanceArray
  withdrawal: function (amount) {
    const balance = this.getBalance();

    if (amount > balance) {
      // om amount är mera än va balancen är return false.
      return false;
    }
    // kolla om beloppet är ogiltigt, om så, visa en varning och gå tillbaka till menyn
    if (amount <= 0 || isNaN(amount)) {
      // om amount är mindre än noll eller is not a number.
      alert("cant use negative numbers or letters");
      return menu();
    } else
      this.balanceArray.push({
        amount: -parseFloat(amount),
      });
    return true;
  },
};
// meny för atm
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
  //gör menyn!
  do {
    choice = prompt(menu + "Enter choice (1-5)"); //val

    // här använder jag mig utav en switch för det är lättare att läsa av enligt mig än att använda en if statement. brukar i regel använda mig av switch när det är mer än 3 olika ifs.
    switch (choice) {
      case "1":
        prompt("Balance: " + accountObj.getBalance() + "kr");
        break;
      case "2":
        const DepositAmount = prompt("Enter deposit amount: ");
        const deposited = accountObj.deposit(DepositAmount);

        if (deposited) {
          prompt("Succes! added " + DepositAmount + "kr too balance");
        } else {
          return menu();
        }
        break;
      case "3":
        const WithdrawalAmount = prompt("Enter withdrawal amount: ");
        const withdrawn = accountObj.withdrawal(WithdrawalAmount);
        if (withdrawn) {
          prompt("Success! Took out " + WithdrawalAmount + "kr from balance");
        } else {
          alert("Not enough balance.");
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
  } while (choice !== "5"); // om input är mer än 5 => default
}

menu();
