This solution uses a wrapper component to ensure the component using `useNavigation` is always mounted, resolving the `navigation` object being undefined issue.

```javascript
// Solution: Use a wrapper component

function MyComponent({ showComponent }) {
  const navigation = useNavigation();

  return (
    <View>
      {showComponent && (
        <View>
          <Button title="Navigate" onPress={() => navigation.navigate('Screen')} />
        </View>
      )}
    </View>
  );
}
```