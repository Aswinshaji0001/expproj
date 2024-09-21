async function getDonors() {
    const res=await fetch("http://localhost:3000/api/getDonors");
    const donors=await res.json();
    console.log(donors);
    str=``;
    donors.map((donor)=>{
        str+=`
        <tr>
                    <td>${donor.name}</td>
                    <td>${donor.age}</td>
                    <td>${donor.dob}</td>
                    <td>${donor.place}</td>
                    <td>${donor.phone}</td>
                    <td>${donor.blood_group}ve</td>
                    <td>Eligibe</td>
                    <td class="actions">
                        <a href="./pages/edit.html?id=${donor._id}"><button>Edit</button></a>
                        <button onclick="handleDelete('${donor._id}')">Delete</button>
                    </td>
        </tr>
        `
    });
    document.getElementById("tbody").innerHTML=str;
}
getDonors();

async function handleDelete(id){

    fetch(`http://localhost:3000/api/deletedonor/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"}
    })
    .then((res)=>{
        console.log(res);
        if(res.status == 201) {
            alert("success");
             window.location.href="../index.html"
        }
        else{
            alert("error");
        }
    });
}


document.getElementById("search").addEventListener('keyup',async(e)=>{
        console.log(e.target.value);
        try{
            const res=await fetch("http://localhost:3000/api/getDonors");
    const donors=await res.json();
    console.log(donors);
    str=``;
    donors.filter((i)=>i.name.toLowerCase().includes(e.target.value.toLowerCase())).map((donor)=>{
        str+=`
        <tr>
                    <td>${donor.name}</td>
                    <td>${donor.age}</td>
                    <td>${donor.dob}</td>
                    <td>${donor.place}</td>
                    <td>${donor.phone}</td>
                    <td>${donor.blood_group}ve</td>
                    <td>Eligibe</td>
                    <td class="actions">
                        <a href="./pages/edit.html?id=${donor._id}"><button>Edit</button></a>
                        <button onclick="handleDelete('${donor._id}')">Delete</button>
                    </td>
        </tr>
        `
    });
    document.getElementById("tbody").innerHTML=str;
}
    catch(error)
    {
        console.log(error);
    }
});

