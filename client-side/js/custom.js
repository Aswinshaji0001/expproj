
document.getElementById("frm").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const dob = document.getElementById("dob").value;
    const place = document.getElementById("place").value;
    const phone = parseInt(document.getElementById("phone").value);
    const blood_group = document.getElementById("blood_group").value;
    console.log(name,age,dob,place,phone,blood_group);
    fetch("http://localhost:3000/api/adddonor",{
        method:"POST",
        headers:{"Content-Type" : "application/json"},
        body: JSON.stringify({
            name:name,
            age:age,
            dob:dob,
            place:place,
            phone:phone,
            blood_group:blood_group,

        }),
    })
    .then((res)=>{
        console.log(res);
        if(res.status == 201) {
            alert("success");
            window.location.href="../index.html"

        }
        else if(res.status==400){
            alert("phone number already exists")
        }
        else{
            alert("error");
        }
    }).catch((error)=>{
        console.log(error);
        
    })

});