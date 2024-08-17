import { createSnippet } from "svelte-react-snippet";

export const page = createSnippet<[string, string]>((title, content) => (
  <div>
    <header>
      <h1>{title()}</h1>
    </header>
    <p>{content()}</p>

    <button onClick={() => alert('Clicked!\n' + content())}>Click me</button>
  </div>
));
