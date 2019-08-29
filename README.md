# Reacooks

React Hooks for making developing React application easier.

## Installation

```bash
npm install reacooks --save
```

## Hooks list

### `useToggleValue(truthyValue, falsyValue, truthy)`

Toggle value between `truthyValue` and `falsyValue`. The third parameter `truthy` is optional, default: `true`.

```jsx
import { useToggleValue } from 'reacooks';

const App = () => {
  const [button, toggleButton] = useToggleValue(
    { showAll: false, text: 'Spread', handler: () => { /* handle spread */ } },
    { showAll: true, text: 'Fold', handler: () => { /* handle fold */ } },
  );
  // Now `button` is { showAll: false, text: 'Spread', handler: () => { /* handle spread */ } }
  // After calling toggleButton() the value would toggle.

  return <button onClick={button.handler}>{button.text}</button>;
};
```
