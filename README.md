## Chakra UI

##### Installation

In your Vite React project, install Chakra UI by running either of the following:

```
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

##### Provider Setup

After installing Chakra UI, you need to set up the ChakraProvider at the root of your application.
Go to the src directory and inside main.jsx or main.tsx, wrap ChakraProvider around App:

```javascript
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    `<ChakraProvider>`
      `<App />`
    `</ChakraProvider>`
  </React.StrictMode>,
)
```

> Boom! You're good to go with steps 1 and 2 🚀🚀🚀 However, if you'd love to take it a step further, check out step 3.


---

## Zustand

```
npm install zustand # or yarn add zustand or pnpm add zustand
```

Your store is a hook! You can put anything in it: primitives, objects, functions. State has to be updated immutably and the `set` function [merges state](https://github.com/pmndrs/zustand/blob/main/docs/guides/immutable-state-and-merging.md) to help it.

##### First create a store

```js
import { create } from 'zustand'

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))
```

##### Then bind your components, and that's it!

Use the hook anywhere, no providers are needed. Select your state and the component will re-render on changes.

```js
function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```
