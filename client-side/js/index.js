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
                        <button>Delete</button>
                    </td>
        </tr>
        `
    });
    document.getElementById("tbody").innerHTML=str;
}
getDonors();