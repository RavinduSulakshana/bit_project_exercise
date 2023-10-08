//call employee table refresh function
window.addEventListener('load',()=>{
    refreshEmployeeTable();
    employee = new Object();
});


//create function table refresh
const refreshEmployeeTable = () =>{
    employees = [
        {id:1, fullname:'Sadeesha', nic:'992923776V', mobile:'0718714658', email:'sadeeshamanujaya99@gmail.com', employeeStatus_id: {id:2,name:'Working'},hashUserAccount: true , designation_id:{id:1,name:'Manager'}},
        {id:2, fullname:'Manujaya', nic:'993323776V', mobile:'0718714658', email:'sadeeshamanujaya99@gmail.com', employeeStatus_id: {id:1,name:'Resign'},hashUserAccount: true , designation_id:{id:2,name:'Accountant'}},
        {id:3, fullname:'Thilakarathne', nic:'992456876V', mobile:'0718714658', email:'sadeeshamanujaya99@gmail.com', employeeStatus_id: {id:2,name:'Delete'},hashUserAccount: false , designation_id:{id:1,name:'Operator'}},
        {id:4, fullname:'Indusha', nic:'992576276V', mobile:'0718714658', email:'sadeeshamanujaya99@gmail.com', employeeStatus_id: {id:1,name:'Working'},hashUserAccount: true , designation_id:{id:1,name:'Manager'}},
    ];

    //text--> String, number, date
    //function--> object, array, boolean
    const displayPropertyList = [
        {dataType:'text', propertyName:'fullname'},
        {dataType:'text', propertyName:'nic'},
        {dataType:'function', propertyName:getHasUserAccount},
        {dataType:'text', propertyName:'mobile'},
        {dataType:'function', propertyName:getDesignation},
        {dataType:'function', propertyName:getEmployeeStatus},
    ]
    //call filldataintotable function
    //(tableId,dataList)
    fillDataIntoTable(tableEmployee,employees,displayPropertyList,employeeFormRefill,true);
    divModify.className = 'd-none';
}

const getEmployeeStatus = (ob)=>{
    //return 'SS';
    if (ob.employeeStatus_id.name == 'Working'){
        return '<p style="border-radius:10px" class="bg-success p-2 text-center fw-bold">'+ob.employeeStatus_id.name+'</p>'
    }
    if (ob.employeeStatus_id.name == 'Resign'){
        return '<p style="border-radius:10px" class="bg-warning p-2 text-center fw-bold">'+ob.employeeStatus_id.name+'</p>'
    }
    if (ob.employeeStatus_id.name == 'Delete'){
        return '<p style="border-radius:10px;" class="bg-danger p-2 text-center fw-bold">'+ob.employeeStatus_id.name+'</p>'
    }
}
const getDesignation = (ob)=>{
    return ob.designation_id.name;
}
const getHasUserAccount = (ob)=>{
    if (ob.hashUserAccount){
        //return 'Has User Account
        return '<i class="fa-solid fa-circle-check fa-2x text-success"></i>';
    }else{
        //return 'Has No User Account'
        return '<i class="fa-solid fa-circle-xmark fa-2x text-danger"></i>';
    }
}

//Create function for refill employee form
 const employeeFormRefill = (ob, rowIndex)=>{
    inputFullName.value = ob.fullname;
 }
 //Create function for delete employee record
 const deleteEmployee = (ob, rowIndex)=>{
    //get user confirmation
    const userConfirm = confirm('Are you sure to delete following employee..? \n'
                                + '\n Full Name is : '+ob.fullname
                                + '\n Full Name is : '+ob.employeeStatus_id.name
                                + '\n Full Name is : '+ob.nic );
    if (userConfirm){
        const deleteSeverResponse = 'OK';
        if (deleteSeverResponse == 'OK'){
            alert('Delete Successfully..!');
            refreshEmployeeTable();
        }else{
            alert('Delete not completed, You have following error\n'+deleteSeverResponse)
        }
    }

 }
 //Create function for view employee record
 const printEmployee = (ob, rowIndex)=>{

 }

 //define function for submit employee
const submitEmployee = ()=>{
    console.log("Submit");
    console.log(employee);
}

//define function email validator
const textEmailValidator = (fieldID) =>{
    const pattern = "^[A-Za-z0-9\\-\\_]{6,20}[@][a-z]{5,10}[.][a-z]{2,3}$";
    const regPattern = new RegExp(pattern);
    if (regPattern.test(fieldID.value)){
        console.log('Valid');
        fieldID.style.backgroundColor='green';
    }else{
        console.log('Invalid')
        fieldID.style.backgroundColor='red';
    }
}
//define function email validator
const textMobileValidator = (fieldID) =>{
    const pattern = "^[A-Za-z0-9\\-\\_]{6,20}[@][a-z]{5,10}[.][a-z]{2,3}$";
    const regPattern = new RegExp(pattern);
    if (regPattern.test(fieldID.value)){
        console.log('Valid');
        fieldID.style.backgroundColor='green';
    }else{
        console.log('Invalid')
        fieldID.style.backgroundColor='red';
    }
}