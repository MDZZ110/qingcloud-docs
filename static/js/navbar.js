$(function(){
	$('.select-field').find('select').change(function(){
		window.location.href=$(this).val();
	})
	
	//autocomplete
	$('#search-bar').autocomplete({
		serviceUrl: '/search.php?cate=all&auto=true&size_flag=false',
		paramName:'q',
		minChars: 2,
		onSelect: function (suggestion) {
			$('form').submit();
		}
	});
})
