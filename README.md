# Solution Technical Assesment - Xactly Corp

This is a solution to the Challenge of building a reusable component based on a problem description. With the making of this project I have been able to practice my React skill, how to display information Recursively as well as to how to write a JSON file and Display its information as a Tree Node. Overall pretty exciting and fun challenge.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [How to Launch](#How-to-Launch)
  - [Screenshot](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

The challenge consisted in creating a reusable chart component that was able to display an organization hierarchy on a Dashboard. Some of the requierements go as follow:

- Each node in the Hierarchy contains attributes that describes their status as 'critical', 'warning' or 'normal' this status is associated with Sales performance. [COMPLETED]

- The display will be used in a Large screen on the office, UI is not interactive. [COMPLETE]

- Display is refreshed every 30 minutes to show latest status of heirarchy. [INCOMPLETE]

- Entire Hierarchy must be visible in screen along with status of the nodes. [COMPLETE]

### How to Launch

In order to Launch this project use the following script inside the folder directory:

### `npm start`

It will launch the app in a Localhost Enviroment.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.




### Screenshots

![](/screenshot/screenshot1.png)
![](/screenshot/screenshot2.png)


### Links

- Solution URL: [Solution URL](https://github.com/ibendiburg/react-org-chart-component)
- Live Site URL: [Live site URL](https://front-end-mentor-challenge2-solution.vercel.app/) [MUST COMPLETE]

## My process

### Built with

- React.JS
- JSX

### What I learned

This has been a great opportunity to put some of my React skills that I have been learning to work, the first challenge in this was to display a nested JSON File with multiple levels as Children of the other cards within the chart.

We have acomplished this by making the component Reuse itself while passing the actual data. then as we start mapping the data, we check to see if the instance has a children and if it does ti goes ahead and insert another card:

```js
{item.children?.length && <Card data={item.children}/>} //Checks if instance has Children
```
Another skill that I have been struggling with a lot is the Pseudo operators Before and After in CSS, we have been able to acomplish the connections using simple CSS. Using this Code we are able to add Borders to each cards that connects over to their children components.

```css
.org-tree li, ul {
    width: 100%;
}

.org-tree ul {
    padding: 0;
    display: flex;
    list-style-type: none;
    padding-top: 3vh;
    position: relative;
    justify-content: center;
}
.org-tree ul::before{
    content: "";
    top: 0vh;
    left: 50%;
    height: 3vh;
    position: absolute;
    border: solid 1px var(--Soft-violet);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: -1;
}
.org-tree ul:first-child::before {
    display: none;
}

.org-tree ul li {
    display: flex;
    padding-top: 3vh;
    position: relative;
    align-items: center;
    flex-direction: column;
    text-align: center;

    padding-left: 10px;
    padding-right: 10px;
}
.org-tree li::before {
    content: "";
    top: 0;
    left: 50%;
    height: 3vh;
    position: absolute;
    border: solid 1px var(--Soft-violet);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: -1;
}
.org-tree ul li::after {
    content: "";
    top: 0;
    width: 100%;
    position: absolute;
    border-top: solid 1px var(--Soft-violet);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: -1;
}
.org-tree ul li:only-child::after{
    display: none;
}
.org-tree ul li:first-of-type::after{
    width: 50%;
    right: 0;
}
.org-tree li:last-of-type::after{
    width: 50%;
    left: 0;
}
.org-tree li:only-child {
    padding-top: 0;
}
.org-tree li:only-child::before{
    display: none;
}
}
```

### Useful resources
- [Font Awesome React](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react) - Very simpole to use to introduce Icons in a React app.
- [REACT Documentation](https://reactjs.org/docs/getting-started.html) - Lots of very usefull resources for React.
- [Nice Border Shadows CSS](https://getcssscan.com/css-box-shadow-examples) - Very nice website that has multiple border shadows.
- [Reference tool for sizes](https://www.pureref.com/) - This is a fantastic tool that has helped me a lot get accurate measurements from the original design to my work.


## Author
- Github - [Github Account](https://github.com/ibendiburg)
- CodeWarrs - [Code Wars Account](https://www.codewars.com/users/ibendiburg)

