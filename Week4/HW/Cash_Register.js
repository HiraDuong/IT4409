function checkCashRegister(price, cash, cid) {
    // Define currency values
    const currencyUnit = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
    ];
  
   
    let changeDue = cash - price;
  
   
    const totalInDrawer = cid.reduce((total, [_, amount]) => total + amount, 0);
  

    if (totalInDrawer < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  

    if (totalInDrawer === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    let change = [];
    for (let i = currencyUnit.length - 1; i >= 0; i--) {
      const [unit, value] = currencyUnit[i];
      const availableAmount = cid[i][1];
      const maxUnits = Math.floor(availableAmount / value);
      const returnedUnits = Math.min(maxUnits, Math.floor(changeDue / value));
  
      if (returnedUnits > 0) {
        changeDue -= value * returnedUnits;
        change.push([unit, value * returnedUnits]);
        changeDue = Number(changeDue.toFixed(2)); 
      }
    }
  
    
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change };
  }

  const result = checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]);
  
  console.log(result);
  