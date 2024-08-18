import { createRawSnippet } from "svelte";
import type { Snippet } from "svelte";
import type { ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { hydrateRoot } from "react-dom/client";
type Getters<T> = {
  [K in keyof T]: () => T[K];
};

export const createSnippet = <Params extends unknown[]>(
  fn: (...params: Getters<Params>) => ReactNode
): Snippet<Params> => {
  return createRawSnippet((...params) => {
    return {
      render: () =>
        `<div style="display:contents">${renderToString(fn(...params))}</div>`,
      setup(element) {
        let firstEffect = true;
        const root = hydrateRoot(element, fn(...params));
        $effect(() => {
          const node = fn(...params);
          if (firstEffect) firstEffect = false;
          else root.render(node);
        });
        return () => root.unmount();
      },
    };
  });
};
