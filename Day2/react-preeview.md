====== Short Answer =====

1. What is state? - some kind of object

2. What is `setState()` and what does it do? - `setState()` is a function that updates the state

3. What happens when i call `setState()`? - `render()` gets called, which results in a change in UI if
   there is a difference between the current and previous state

4. How do the values inside the state get rendered? - `componentDidUpdate()`

5. Why does the lifecycle matter? - in the future, is to ensure our code runs more efficiently

6. Why do we have to use `className` instead of `class`? - class is a reserved word in JSX `class NameOfTheApp extends React.Component{render(){return()}}`

====== Long Answer =====

1.  What is state?
    An object
    that contains information that controls the output of render, i.e., state influences how does the UI look
2.  What is setState() and what does it do?
    setState() is a function that updates the state
3.  What happens when I call setState()?
    render() gets called, which results in a change in UI if there is a difference between the current and previous state
4.  How do the values inside the state get rendered?
    The value gets passed into the JSX elements like so,
    <div> { this.state.value } </div>
5.  Why does the lifecycle matter?
    We want to control what happens when each component renders, updates, re-renders and disappears.

         Lifecycle:

         Creation (birth of an element)
         Mounting (displaying of the element)
         Updating (change in the state of the element)
         Unmounting (removal of the element)
         To learn more about the various lifecycle methods available, see here: https://programmingwithmosh.com/javascript/react-lifecycle-methods/

6.  Why do we have to use className instead of class and backgroundColor instead of background-color?
    Because JSX is still Javascript, so we need to use camelCase
    HOWEVER, our components should use PascalCase, i.e., the first letter of each word should start be capitalised
