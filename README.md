# Expo Navigation Bug in Conditionally Rendered Component

This repository demonstrates a bug encountered when using the Expo `useNavigation` hook within a conditionally rendered component. The `navigation` object is undefined when the component is initially unmounted, leading to errors when attempting navigation.

## Bug Description

The issue arises when a component using `useNavigation` is rendered conditionally. If the condition initially evaluates to `false`, `useNavigation` returns undefined causing navigation actions to fail when the condition later changes to `true`.

## Solution

The solution involves ensuring the component containing `useNavigation` is always mounted, even if it's visually hidden. This can be achieved by using a wrapper component that conditionally renders the visible content within.

## How to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe the error when toggling the conditional rendering.