const todo = [{ data: "hello world", id: "1234" }];


const renderData = (data) => {
  const ul = document.getElementById('userDataList');
  ul.innerHTML = ''; // Clear the list before re-rendering

  data.forEach((CurEl) => {
    const listItem = document.createElement('li');
    listItem.classList.add(
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center',
      'border-start-0',
      'border-top-0',
      'border-end-0',
      'border-bottom',
      'rounded-0',
      'mb-2'
    );
    listItem.innerHTML = `
      <div class="d-flex align-items-center">
        ${CurEl.data}
      </div>
      <div>
        <button onclick="deleteData('${CurEl.id}')" class="border-0 bg-transparent" >
            <i class="fas fa-times text-primary"></i>    
        </button>
        <button onclick="modalIdHandler('${CurEl.id}',${updateTodo})"  class="border-0 bg-transparent ms-3" data-toggle='modal' data-target='#updateModal' >
            <i class="fa-solid fa-pen-to-square"></i>     
        </button>
      </div>
    `;

    ul.appendChild(listItem);
  });
};



const addData = () => {
  let inputData = document.getElementById('searchInput').value;
  const id = new Date().getMilliseconds().toString();

  if (inputData !== '') {
    todo.push({ data: inputData, id: id });
    renderData(todo); // Call renderData with the updated todo array
  } else {
    alert('required');
  }

};

document.getElementById('userForm').addEventListener('submit', (e) => {
  e.preventDefault();
  addData();
});

const deleteData = (id) => {
  function removeElement(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }

  for (let i = 0; i < todo.length; i++) {
    if (id === todo[i].id) {
      removeElement(todo, todo[i]);
      renderData(todo); // Call renderData with the updated todo array
      break;
    }
  }
};



const updateTodo = (id) => {

   let inp =  document.getElementById('modal-inp');

    for(let i = 0; i < todo.length; i++ ){

        if(id === todo[i].id){
                todo[i].data = inp.value;
                renderData(todo);
        }}
    }




const modalIdHandler = (Element_id,callback) => {

    const modal =  document.getElementById('modal-save');

    modal.addEventListener('click',(e)=>{
        e.preventDefault();
        callback(Element_id);
        closeModal();
    })


}

function closeModal() {
    $('#updateModal').modal('hide');
  }


// Initial rendering
renderData(todo);
