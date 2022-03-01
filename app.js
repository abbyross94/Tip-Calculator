const fivePer = {
    button: document.querySelector("#five-per"),
    amount: 0.05,
    billAmount : document.querySelector("#bill"),
    people : document.querySelector("#people")
  }
  const tenPer = {
    button: document.querySelector("#ten-per"),
    amount: 0.10,
    billAmount : document.querySelector("#bill"),
    people : document.querySelector("#people")
  }
  const fifteenPer = {
    button: document.querySelector("#fifteen-per"),
    amount: 0.15,
    billAmount : document.querySelector("#bill"),
    people : document.querySelector("#people")
  }
  const twentyPer = {
    button: document.querySelector("#twenty-per"),
    amount: 0.20,
    billAmount : document.querySelector("#bill"),
    people : document.querySelector("#people")
  }
  const thirtyPer = {
    button: document.querySelector("#thirty-per"),
    amount: 0.30,
    billAmount : document.querySelector("#bill"),
    people : document.querySelector("#people")
  }
  
  const custom = {
    input: document.querySelector("#custom-per"),
    billAmount : document.querySelector("#bill"),
    people : document.querySelector("#people")
  }
  
  const reset = document.querySelector("#reset")
  const displayTip = document.querySelector("#display-tip");
  const displayTotal = document.querySelector("#display-total");
  
  function calculator (percentBtn){
    const tipAmount = ((percentBtn.billAmount.value*percentBtn.amount)/percentBtn.people.value).toFixed(2);
    const totalPaid = (parseFloat(percentBtn.billAmount.value/percentBtn.people.value)+parseFloat(tipAmount)).toFixed(2);
    displayTip.innerText = `$${tipAmount}`;
    displayTotal.innerText = `$${totalPaid}`;
  }
  
  fivePer.button.addEventListener('click', function(){
    calculator(fivePer)
  })
  tenPer.button.addEventListener('click', function(){
    calculator(tenPer)
  })
  fifteenPer.button.addEventListener('click', function(){
    calculator(fifteenPer)
  })
  twentyPer.button.addEventListener('click', function(){
    calculator(twentyPer)
  })
  thirtyPer.button.addEventListener('click', function(){
    calculator(thirtyPer)
  })
  
  custom.input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
      const tipAmount = ((custom.billAmount.value*(custom.input.value/100))/custom.people.value).toFixed(2);
      const totalPaid = (parseFloat(custom.billAmount.value/custom.people.value)+parseFloat(tipAmount)).toFixed(2);
      displayTip.innerText = `$${tipAmount}`;
      displayTotal.innerText = `$${totalPaid}`;
    }
  })
  
  reset.addEventListener('click', function(){
    for (btn of [fivePer, tenPer,fifteenPer,twentyPer]){
      btn.billAmount.value = ""
      btn.people.value = ""
      displayTip.innerText = "$0.00"
      displayTotal.innerText = "$0.00"
    }
    custom.input.value = ""
  })


