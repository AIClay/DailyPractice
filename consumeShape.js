<!DOCTYPE html>
	<head>	
		<meta charset='UTF-8'>
		<title>Testing Local</title>
		<style type='text/css'>
		div.circle
			{
				position:absolute;
				float:left;
				background-color:transparent;
			}				
				
				
		</style>
		<script type='text/javascript' src="shapes.js"></script>
		<script type='text/javascript'>
			var arShapes=[];
			function gen_cir()
			{
			
				var strRet = new Circle();
				arShapes.push(strRet);
				console.log(arShapes);		
			}
			function gen_square()
			{
			
				var strSQ = new Rectangle();
				arShapes.push(strSQ);
				console.log(arShapes);
			}
			
			function reset()
			{
				var tgt_em = document.getElementById("target");
				tgt_em.innerHTML = "";
				arShapes=[];
			}
			
			function draw(shapes)
			{
				var tgt_elem = document.getElementById('target');
				
				for (i = 0;i<arShapes.length;i++)
				{
					tgt_elem.innerHTML += arShapes[i].svg_elem_desc;
				}
			}
			
			
		</script>
		
	</head>
	<body>
	<input type='button' value='&#9675;' onclick=gen_cir(); />
	<input type='button' value='&#9632;' onclick=gen_square(); />
	<input type='button' value='[DRAW]' onclick=draw(arShapes); />
	<input type='button' value='[RESET]' onclick=reset(); />
	<hr />
	<div id='target'>
		
		
		</div>
	
	</body>
	
