$("#minus").click(function(){
		quantity=$("#quantity").val();
		if (quantity>1)
		{
			quantity=parseInt(quantity)-1;
		}
		$("#quantity").val(quantity);
	})
	$("#plus").click(function(){
		quantity=$("#quantity").val();		
		quantity=parseInt(quantity)+1;	
		$("#quantity").val(quantity);
	})
	$("#addcart").click(function(){
		quantity=$("#quantity").val();
		id=$("#addcart").attr("data-id");
		console.log(id);
		$('#addcart').attr("href",`/gio-hang/add/${id}/${quantity}`); 
	})