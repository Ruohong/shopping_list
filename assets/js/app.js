/* Submit the form on the same page */

$(document).ready(function(){
	$('.csubmit').on('click', function(){

		var items = $('.edititem').val();
		var prices = $('.editprice').val();
		var quantities = $('.editquantity').val();
		var total =$('<li><div class="list-wrap"><div class="action-image"><a href="#" class="delete"><img src="assets/img/delete.png" /></a><a href="#" class="check"><img src="assets/img/check.png" /></a></div> <div class="item-data"><span class="a-item-description">' + items + '</span></div><div class="price-data"><span class="a-price"> $' + prices + '</span></div><div class="quantity-data"><span class="a-quantity">' + quantities + '</span></div></div></li>');
		
		if (items ==="") {
			$('#error').fadeIn(1000);
		}

		else {
			$('#list').prepend(total);
			total.hide().slideDown(600);
		};



		var dprice = +prices;
		var dquantity = +quantities;
		var sum = dprice*dquantity;
		var previous = parseFloat(".sum");
		$(".sum").text(sum+previous);
	});

	$('#list').on('click', '.check', function(event){
		$(this).closest('.list-wrap').css({
                transition: 'background-color 1s ease-in-out',
                "background-color": "rgba(0,0,220,0.2)"
            });
		return false;
	});

	$('#list').on('click', '.delete', function(event){
		$(this).closest('li').fadeOut(300, function(){
			$$(this).closest('li').remove();
		});
		return false;
	});
});