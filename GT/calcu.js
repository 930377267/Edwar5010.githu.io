let Value1 = 0;
let Valaue2 = 0;
let Operation = "Suma";// por defecto, la operacion es suma

function setValue(variable,Value){
    if(variable ===1){
        Value1 = Value;
        document.getElementById("SelectedValue1|").textContent = Value1;///
    }else if(variable ===2){
        Valaue2 =Value; //
        document.getElementById("selectedValue2").textContent = Valaue2;
    }
}

function setOperation(Op){
    Operation = Op 
    document.getElementById("selectOperation").textContent = 
    (Operation === 'sum')? 'Suma' : 'Restar'
}

function calculateResult(){
    let result;
    if (Operation === 'Suma'){
        result = Value1 + Valaue2;
    } else if (Operation === 'subtract'){ ///
        result = Value1 - Valaue2;
    }

    document.getElementById('Result').textContent = result;
}