<script lang="ts">
  import {page} from '$lib';
  let name = $state('react');
</script>

<pre>↓↓react based snippet↓↓</pre>
{@render page('svelte-react-snippet', `Hello ${name}!`)}
<pre>↑↑react based snippet↑↑</pre>

<input type="text" bind:value={name} />
