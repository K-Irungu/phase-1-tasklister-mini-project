document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    createToDo(e.target.newtaskdescription.value);
    form.reset();
  });

});

function createToDo(todo) {
  console.log(todo);
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent = 'x';
  p.textContent = `${todo}  `;
  p.appendChild(btn);
  document.querySelector('#list').appendChild(p);

}

function handleDelete (e) {
  e.target.parentNode.remove();
}
