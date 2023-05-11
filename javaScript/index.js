// account object!
const accountObj = {
  accountName: "Jonatan Lundmark",
  balance: [],

  getBalance: function (amount) {},

  deposit: function (amount) {},

  withdrawal: function (amount) {},

  getAccountName: function (amount) {},
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
        break;
      case "2":
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        prompt("exited");
        break;
      default:
        alert("Invalid choice!");
    }
  } while (choice !== 5);
}

menu();
