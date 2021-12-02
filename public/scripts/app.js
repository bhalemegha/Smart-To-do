// Client facing scripts here

$(document).ready(function() {

  console.log('READY');

  const renderCards = function(data) {
    const $shows = $('#to_watch').attr('id');
    const $book = $('#to_read').attr('id');
    const $restaurant = $('#to_eat').attr('id');
    const $product = $('#to_buy').attr('id');

    for (const title in data) {
      const $label = $('<label>').text(data[title].task_name);
      const $icon = $('<i>').addClass('far fa-trash-alt').attr('id', 'delete');
      const $card = $('<li>').addClass('card');
      $card.append($label, $icon);

      if ($shows === data[title].category_name) {
           $('#to_watch').append($card)
      }
      if ($book === data[title].category_name) {
        $('#to_read').append($card)
      }
      if ($restaurant === data[title].category_name) {
        $('#to_eat').append($card)
      }
      if ($product === data[title].category_name) {
        $('#to_buy').append($card)
      }
    }


  }

  const loadCards = function() {
    $.ajax({
      type: 'GET',
      url: '/tasks/',
      dataType: 'JSON'
    })
      .done(data => {
        renderCards(data);
      })
  }

  loadCards();

  $('#to_eat, #to_read, #to_watch, #to_buy').sortable({
    connectWith: '.category'
  }).disableSelection();

});
