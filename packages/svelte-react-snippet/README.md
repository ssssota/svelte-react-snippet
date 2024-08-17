# svelte-react-snippet

You can create svelte snippets with JSX syntax based on react.
This means you can use react components in svelte as snippets.

## Usage

```sh
npm i svelte-react-snippet react
```

tsconfig.json

```jsonc
{
  "compilerOptions": {
    // ...
    "jsx": "react-jsx",
    "jsxImportSource": "react"
  }
}
```

snippet.tsx

```tsx
export const snippet = createSnippet<[string, string]>((title, content) => (
  <div>
    <header>
      <h1>{title()}</h1>
    </header>
    <p>{content()}</p>

    <button onClick={() => alert('Clicked!\n' + content())}>Click me</button>
  </div>
));
```

App.svelte

```svelte
<script lang="ts">
  import {page} from '$lib';
  let name = $state('react');
</script>
{@render page('svelte-react-snippet', `Hello ${name}!`)}
<input type="text" bind:value={name} />
```

→ **[Demo](https://ssssota.github.io/svelte-react-snippet/)**

## License

MIT
