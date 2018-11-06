var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '3430',
  'X-Auth-Token': '76f623062146b6dc263835ac371636b4'
};
	$.ajaxSetup({
	headers: myHeaders
	});

	$.ajax({
	    url: baseUrl + '/board',
	    method: 'GET',
	    success: function(response) {
	      setupColumns(response.columns);
	    }
	});

function setupColumns(columns) {
columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
    board.createColumn(col);
    setupCards(col, column.cards);
});
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
    	col.createCard(cardObj);
  	})
}