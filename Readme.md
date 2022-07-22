# Alten react delayed input

This component provides a simple, unstyled input component that can be used like any other.
The only difference is that a delay can be specified for triggering the ``onChange`` function.

## Examples

In this example we are adding a DelayedInput. The onChange function is triggered after 1000ms (1 second).
Please note that the ``newValue`` in the onChange function is a string.

```tsx
function App() {

  const [value, setValue] = useState<string>("Test");

  return (
    <div>
        <DelayedInput 
            value={value}
            onChange={(newValue: string) => setValue(newValue)}
            delay={1000} 
        />
    </div>
  );
}

export default App;
```
