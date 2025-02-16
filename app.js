
function addExpense() {
    var name = document.getElementById("name").value;
    var amount = document.getElementById("amount").value;

    if (name && amount) {
        var li = document.createElement("li");
        li.textContent = name + " - " + amount;
        document.getElementById("expenseList").appendChild(li);

        document.getElementById("name").value = "";
        document.getElementById("amount").value = "";
    }      else {
        alert("Please enter all details");
    }
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);
      
}
