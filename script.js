

var getul = document.getElementById('ul')

    function foo() {
      a = document.getElementById('inp')
      var li = document.createElement('li')
      var liText = document.createTextNode(a.value)
      li.appendChild(liText)
      getul.appendChild(li)
      a.value = ''

      // Delete button
      var deletbtn = document.createElement('button')
      deletbtn.innerHTML = 'Delete'
      deletbtn.classList.add('btn', 'btn-danger', 'm-2', 'delete-btn') // Bootstrap classes for delete button
      deletbtn.setAttribute('onclick', 'del(this)')
      li.appendChild(deletbtn)

      // Edit button
      var editbtn = document.createElement('button')
      editbtn.innerHTML = 'Edit'
      editbtn.classList.add('btn', 'btn-info', 'edit-btn') // Bootstrap classes for edit button
      editbtn.setAttribute('onclick', 'edit(this)')
      li.appendChild(editbtn)

      console.log(li)
    }

    
  function del(e) {
    if (e) {
      e.parentNode.remove(); // Delete only the clicked item
    } else {
      var ul = document.getElementById('ul');
      ul.innerHTML = ''; // Delete all items
    }
  }


    function edit(e) {
      var a = prompt('Enter edit value', e.parentNode.firstChild.nodeValue)
      e.parentNode.firstChild.nodeValue = a
    }










