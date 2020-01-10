/* add new task */
$('#add-task').on('click', function () {
    let addTask = $('#input').val()
    let editButton = '<span class="edit-btn">Edit</span>'
    let deleteButton = '<span class="delete">Delete</span>'
    let saveUploads = '<span class="saveChanges">Save here</span>'
    let doneTask = '<a href="#" class="done-btn">Done</a>'
    if (addTask.length === 0) {
      alert('Need some text')
      return false
    } else {
      $('#to-do-list').append('<li>' + '<strong>' + addTask + '</strong>' + editButton + deleteButton + saveUploads + doneTask + '</li>')
      localStorage.setItem('#add-task', JSON.stringify(addTask))
    }

    /* done task */
    $('.done-btn').on('click', function() {
      $(this).parent('li').addClass('done')
      $(this).prev().prev().prev().remove()
      $(this).remove()
    })

    /* clean input after typing */
    $('#input').val('')

    /* delete task */
    $('li').on('click', '.delete', function() {
      $(this).parent().remove()
      $('#toogle').hide(this)
    })

    /* edit task */
    $('#to-do-list li').on('click', '.edit-btn', function() {
      let updateTaskValue =  $(this).prev('strong').text()
      let newTaskValue = $('#inputEdit').val(updateTaskValue).focus()
      $('#toogle').show(this)
      $('.saveChanges').show()
      $('li').on('click', '.saveChanges', function () {
        $(this).prev().prev().prev().text(newTaskValue.val())
        $('#toogle').hide(this)
        $('.saveChanges').hide(this)
      })
    })
  })