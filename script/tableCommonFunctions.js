
//create function for filling data into table
const fillDataIntoTable = (tableId, dataList, displayColumnList, editFunction, deleteFunction, printFunction,
    buttonVisibilty=true ) =>{
//Create variable called employeeTable and assign table element
const tableBody = tableId.children[1];
tableBody.innerHTML='';

dataList.forEach((element,
    index)=>{
    const tr = document.createElement('tr');

    const tdIndex = document.createElement('td');
    tdIndex.innerText=element.id;
    tr.appendChild(tdIndex);

    displayColumnList.forEach(column => {
        const td = document.createElement('td');
        if (column.dataType == 'text'){
            td.innerText = element[column.propertyName];
        }
        if (column.dataType == 'function'){
            td.innerHTML = column.propertyName(element);
        }
        tr.appendChild(td);

    });

    // const tdFullName = document.createElement('td');
    // tdFullName.innerText=element.fullname;
    // tr.appendChild(tdFullName);

    // const tdNic = document.createElement('td');
    // tdNic.innerText=element.nic;
    // tr.appendChild(tdNic);

    // const tdMobile = document.createElement('td')
    // tdMobile.innerText=element.mobile;
    // tr.appendChild(tdMobile);

    // const tdStatus = document.createElement('td');
    // tdStatus.innerText=element.employeeStatus_id.name;
    // tr.appendChild(tdStatus);

    const tdButton = document.createElement('td');
    
    const buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn btn-warning fw-bold mx-1';
    buttonEdit.innerText = 'Edit';
    buttonEdit.onclick = function() {
        editFunction(element,index);
    }
    tdButton.appendChild(buttonEdit);

    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn-danger fw-bold mx-1';
    buttonDelete.innerHTML = '<i class="fa-solid fa-trash fa-beat"></i>';
    buttonDelete.onclick = function() {
        deleteFunction(element,index);
    }
    tdButton.appendChild(buttonDelete);

    const buttonPrint = document.createElement('button');
    buttonPrint.className = 'btn btn-primary fw-bold mx-1';
    buttonPrint.innerHTML = '<i class="fa-solid fa-eye fa-beat"></i> View';
    buttonPrint.onclick = function() {
        printFunction(element,index);
    }
    tdButton.appendChild(buttonPrint);


    if(buttonVisibilty){
        tr.appendChild(tdButton); // append button into table row
    }

    tableBody.appendChild(tr);
    
})
};

//Second function filling data into table
const fillDataIntoTable2 = (tableId, dataList, displayColumnList, editFunction, deleteFunction, printFunction,
    buttonVisibilty=true ) =>{
//Create variable called employeeTable and assign table element
const tableBody = tableId.children[1];
tableBody.innerHTML='';

dataList.forEach((element,
    index)=>{
    const tr = document.createElement('tr');

    const tdIndex = document.createElement('td');
    tdIndex.innerText=element.id;
    tr.appendChild(tdIndex);

    displayColumnList.forEach(column => {
        const td = document.createElement('td');
        if (column.dataType == 'text'){
            td.innerText = element[column.propertyName];
        }
        if (column.dataType == 'function'){
            td.innerHTML = column.propertyName(element);
        }
        tr.appendChild(td);

    });


    //create table column form add button
    const tdButton = document.createElement('td');

    const divDropDown = document.createElement('div');
    divDropDown.className='dropdown';

    const dropdownI = document.createElement('i');
    dropdownI.className ='btn fa-solid fa-ellipsis-vertical';
    dropdownI.setAttribute('data-bs-toggle','dropdown');
    dropdownI.setAttribute('aria-expanded','false');

    const dropdownUL = document.createElement('ul');
    dropdownUL.className = 'dropdown-menu';

    const dropdownLiEdit = document.createElement('li');
    dropdownLiEdit.className = 'dropdown-item';

    const dropdownLiDelete = document.createElement('li');
    dropdownLiDelete.className = 'dropdown-item';
    
    const dropdownLiPrint = document.createElement('li');
    dropdownLiPrint.className = 'dropdown-item'

    

    const buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn btn-warning fw-bold mx-1';
    buttonEdit.innerHTML = '<i class="fa-solid fa-pen"></i>Edit';
    buttonEdit.onclick = function() {
        editFunction(element,index);
    }
    //add edit button to table column
    //tdButton.appendChild(buttonEdit);

    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn-danger fw-bold mx-1';
    buttonDelete.innerHTML = '<i class="fa-solid fa-trash fa-beat"></i>Delete';
    buttonDelete.onclick = function() {
        deleteFunction(element,index);
    }
    //tdButton.appendChild(buttonDelete);

    const buttonPrint = document.createElement('button');
    buttonPrint.className = 'btn btn-primary fw-bold mx-1';
    buttonPrint.innerHTML = '<i class="fa-solid fa-eye fa-beat"></i> View';
    buttonPrint.onclick = function() {
        printFunction(element,index);
    }
    //tdButton.appendChild(buttonPrint);

    dropdownLiDelete.appendChild(buttonDelete);
    dropdownLiEdit.appendChild(buttonEdit);
    dropdownLiPrint.appendChild(buttonPrint);

    
    dropdownUL.appendChild(dropdownLiDelete);
    dropdownUL.appendChild(dropdownLiEdit);
    dropdownUL.appendChild(dropdownLiPrint);

    divDropDown.appendChild(dropdownI);
    divDropDown.appendChild(dropdownUL);
    
    tdButton.appendChild(divDropDown);


    if(buttonVisibilty){
        tr.appendChild(tdButton); // append button into table row
    }

    tableBody.appendChild(tr);
    
})
};

//Third function filling data into table
const fillDataIntoTable3 = (tableId, dataList, displayColumnList,buttonVisibilty=true ) =>{
//Create variable called employeeTable and assign table element
const tableBody = tableId.children[1];
tableBody.innerHTML='';

dataList.forEach((element,
    index)=>{
    const tr = document.createElement('tr');

    const tdIndex = document.createElement('td');
    tdIndex.innerText=element.id;
    tr.appendChild(tdIndex);

    displayColumnList.forEach(column => {
        const td = document.createElement('td');
        if (column.dataType == 'text'){
            td.innerText = element[column.propertyName];
        }
        if (column.dataType == 'function'){
            td.innerHTML = column.propertyName(element);
        }
        tr.appendChild(td);

    });


    //create table column form add button
    const tdButton = document.createElement('td');
    tdButton.className = 'text-center';

    const inputRadio = document.createElement('input');
    inputRadio.name='modify';
    inputRadio.type='radio';
    inputRadio.className='form-check-input-mt-3';
     
    inputRadio.onchange = () => {
        divModify.className = '';
        window['editOb']= element;
        window['editRow']= index;
    }

    tdButton.appendChild(inputRadio);

    

    const buttonEdit = document.createElement('button');
    buttonEdit.className = 'btn btn-warning fw-bold mx-1';
    buttonEdit.innerHTML = '<i class="fa-solid fa-pen"></i>Edit';
    buttonEdit.onclick = function() {
        editFunction(element,index);
    }
    //tdButton.appendChild(buttonEdit);

    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn-danger fw-bold mx-1';
    buttonDelete.innerHTML = '<i class="fa-solid fa-trash fa-beat"></i>Delete';
    buttonDelete.onclick = function() {
        deleteFunction(element,index);
    }
    //tdButton.appendChild(buttonDelete);

    const buttonPrint = document.createElement('button');
    buttonPrint.className = 'btn btn-primary fw-bold mx-1';
    buttonPrint.innerHTML = '<i class="fa-solid fa-eye fa-beat"></i> View';
    buttonPrint.onclick = function() {
        printFunction(element,index);
    }
    //tdButton.appendChild(buttonPrint);


    


    tdButton.appendChild(inputRadio)


    if(buttonVisibilty){
        tr.appendChild(tdButton); // append button into table row
    }

    tableBody.appendChild(tr);
    
})
};

//Fourth function filling data into table
const fillDataIntoTable4 = (tableId, dataList, displayColumnList,buttonVisibilty=true ) =>{
    //Create variable called employeeTable and assign table element
    const tableBody = tableId.children[1];
    tableBody.innerHTML='';
    
    dataList.forEach((element,
        index)=>{
        const tr = document.createElement('tr');
    
        const tdIndex = document.createElement('td');
        tdIndex.innerText=element.id;
        tr.appendChild(tdIndex);
    
        displayColumnList.forEach(column => {
            const td = document.createElement('td');
            if (column.dataType == 'text'){
                td.innerText = element[column.propertyName];
            }
            if (column.dataType == 'function'){
                td.innerHTML = column.propertyName(element);
            }
            tr.appendChild(td);
    
        });

        if(buttonVisibilty){
            tr.onclick = () => {
                divModify.className = '';
                window['editOb']= element;
                window['editRow']= index;
            }
             // append button into table row
        }

        // //create table column form add button
        // const tdButton = document.createElement('td');
        // tdButton.className = 'text-center';
    
        // const inputRadio = document.createElement('input');
        // inputRadio.name='modify';
        // inputRadio.type='radio';
        // inputRadio.className='form-check-input-mt-3';
         
        // tr.onchange = () => {
        //     divModify.className = '';
        //     window['editOb']= element;
        //     window['editRow']= index;
        // }
    
        // tdButton.appendChild(inputRadio);

        tableBody.appendChild(tr);
        
    })
    };

//Fourth function filling data into table
const fillDataIntoTable5 = (tableId, dataList, displayColumnList,editFunction,buttonVisibilty=true ) =>{
    //Create variable called employeeTable and assign table element
    const tableBody = tableId.children[1];
    tableBody.innerHTML='';
    
    dataList.forEach((element,
        index)=>{
        const tr = document.createElement('tr');
    
        const tdIndex = document.createElement('td');
        tdIndex.innerText=element.id;
        tr.appendChild(tdIndex);
    
        displayColumnList.forEach(column => {
            const td = document.createElement('td');
            if (column.dataType == 'text'){
                td.innerText = element[column.propertyName];
            }
            if (column.dataType == 'function'){
                td.innerHTML = column.propertyName(element);
            }
            tr.appendChild(td);
    
        });

        if(buttonVisibilty){
            tr.onclick = () => {
                editFunction(element,index);
                divModify.className = '';
                window['editOb']= element;
                window['editRow']= index;
            }
             // append button into table row
        }

        // //create table column form add button
        // const tdButton = document.createElement('td');
        // tdButton.className = 'text-center';
    
        // const inputRadio = document.createElement('input');
        // inputRadio.name='modify';
        // inputRadio.type='radio';
        // inputRadio.className='form-check-input-mt-3';
         
        // tr.onchange = () => {
        //     divModify.className = '';
        //     window['editOb']= element;
        //     window['editRow']= index;
        // }
    
        // tdButton.appendChild(inputRadio);

        tableBody.appendChild(tr);
        
    })
    };

   