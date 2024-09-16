let arr=[];
async function getdonor() {
    const res =  fetch("http://localhost:3011/getdonor");
    const data = await (await res).json();
    str=``;
    data.map((dt)=>{
                        str+=`
                        <tr>
                        <td><input type="text" id="name-${dt._id}" name="name" value="${dt.name}" disabled=true placeholder="name" class="input-box"></td>
                        <td><input type="text" id="bgrp-${dt._id}" name="bgrp" value=${dt.bgrp} disabled=true placeholder="bgrp" class="input-box"></td>
                        <td><input type="text" id="address-${dt._id}" name="address" value=${dt.address} disabled=true placeholder="address" class="input-box"></td>
                        <td><input type="text" id="age-${dt._id}" name="age"  value=${dt.age} disabled=true placeholder="age" class="input-box"></td>
                        <td><input type="text" id="phone-${dt._id}" name="phone"  value=${dt.phone} disabled=true placeholder="phone" class="input-box"></td> 
                        <td>
                            <button class="action-btn edit-btn" onclick="handleEdit('${dt._id}')">Edit</button>
                            <button class="action-btn save-btn" onclick="handleSave('${dt._id}')">Save</button>
                            <button class="action-btn delete-btn" onclick="handleDelete('${dt._id}')">Delete</button>
                        </td>
                        </tr>
                        `
        arr.push(dt);
        console.log(dt.name);
        

    })

    
    document.getElementById("main").innerHTML=str;
}
getdonor();
