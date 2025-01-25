This bug occurs when using the Expo `useNavigation` hook within a functional component that's conditionally rendered.  If the component isn't initially rendered (e.g., behind a conditional rendering gate), calling `navigation.navigate` might result in a runtime error because `navigation` is `undefined`.

```javascript
// Bug: navigation.navigate fails when conditionally rendered

function MyComponent({ showComponent }) {
  const navigation = useNavigation();

  if (showComponent) {
    return (
      <View>
        <Button title="Navigate" onPress={() => navigation.navigate('Screen')} />
      </View>
    );
  } else {
    return null; 
  }
}
```