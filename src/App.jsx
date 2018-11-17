import React from 'react';
import { Link } from 'react-router-dom';

const App = (props) => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>

      {/*
        接着用 `this.props.children` 替换 `<Child>`
        router 会帮我们找到这个 children
      */}
      {props.children}
    </div>
  )
}

export default App;
