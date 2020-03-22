<script>
	import TextInput from '../../../app-components/global/TextInput.svelte'

	let userName
	let password
</script>

<div class="uk-card-body">
	<div class="uk-card uk-card-default">
		<div class="uk-card-header">
			<h4>
				Welcome to Brenda's Kitchen
			</h4>
		</div>
		<div class="uk-flex uk-flex-column uk-card-body uk-form-stacked" uk-grid>
			<div>
				<label class="uk-form-label">Username:</label>
				<TextInput bind:value={userName}/>
			</div>
			<div>
				<label class="uk-form-label">Password:</label>
				<TextInput bind:value={password}/>
			</div>
		</div>
		<div class="uk-card-footer">
			<p>footer</p>
		</div>
	</div>
</div>