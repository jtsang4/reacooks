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
  const [buttonConfig, toggleButtonConfig] = useToggleValue(
    { text: 'Spread', handler: () => { /* handle spread */ } },
    { text: 'Fold', handler: () => { /* handle fold */ } },
  );
  // Now `buttonConfig` is { text: 'Spread', handler: () => { /* handle spread */ } }
  // After calling toggleButtonConfig() the value would toggle.

  return <button onClick={buttonConfig.handler}>{buttonConfig.text}</button>;
};
```
