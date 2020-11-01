<script>
	import NumberSpinner from "./NumberSpinner.svelte"
</script>

<p>
	Diese Zahl ist veränderbar:
	<NumberSpinner value=100 min=0 max=1000 speed=1></NumberSpinner>
</p>

<p>
	Diese auch:
	<NumberSpinner value=4.28 min=-5 max=5 speed=0.01 decimals=2></NumberSpinner>
</p>
