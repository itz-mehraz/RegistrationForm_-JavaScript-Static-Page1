document.getElementById("add-button").addEventListener("click", function() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;

    if (fname && lname && email && phone && age && gender) {
        var newRow = document.getElementById('show').insertRow();
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = email;
        cell4.innerHTML = phone;
        cell5.innerHTML = age;
        cell6.innerHTML = gender;


        var data = {
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            age: age,
            gender: gender
        };
        var registrationData = JSON.parse(localStorage.getItem("registrationData")) || [];
        registrationData.push(data);
        localStorage.setItem("registrationData", JSON.stringify(registrationData));

        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("age").value = "";
        document.getElementById("gender").value = "";

        alert("Data added successfully!");

        window.location.href = "data.html";
    } else {
        alert("Please fill in all fields.");
    }
});
