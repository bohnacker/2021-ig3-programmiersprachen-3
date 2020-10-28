<script>
	export let value = 234;
	export let min = 0;
	export let max = 100;
	export let speed = 1;
	export let decimals = 0;

	let speedFactor = 1;
	let dragging = false;
	let clickX, clickY;
	let preciseValue;

	function mousedownHandler(e) {
		clickX = e.clientX;
	  clickY = e.clientY;
		dragging = true;
		preciseValue = parseFloat(value);
		//console.log(e.clientX, e.clientY);
	}
	
	function mousemoveHandler(e) {
    let actX = e.clientX;
    let actY = e.clientY;

		let distX = actX - clickX;

      
    if (actY < clickY - 20) {
    	speedFactor = 10;

    } else if (actY > clickY + 20) {
    	speedFactor = 0.1;
    
    } 
    preciseValue = preciseValue + distX * speed * speedFactor;

    preciseValue = Math.min(preciseValue, max);
    preciseValue = Math.max(preciseValue, min);

		value = preciseValue.toFixed(decimals);

    clickX = actX;
	}
	
	function mouseupHandler(e) {
		dragging = false;
		speedFactor = 1;
	}
	
</script>


<style>
	span {
		font-variant-numeric: tabular-nums;
		border: 1px solid #0004;
		padding: 5px;
		border-radius: 5px;
		background-color: white;
		user-select: none;
		color: black;
	}

	.fast {
		color: tomato;
	}
	.slow {
		color: green;
	}
</style>


<svelte:window on:mousemove={dragging ? mousemoveHandler : ''} 
							 on:mouseup={dragging ? mouseupHandler : ''}
							 />

<span on:mousedown={mousedownHandler} 
		  class:fast={speedFactor > 1 ? 'fast' : ''}
		  class:slow={speedFactor < 1 ? 'slow' : ''}
		  >
	{value}
</span>





