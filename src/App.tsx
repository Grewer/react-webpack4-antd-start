import * as React from 'react';
import './App.css';
import {Button} from 'antd';
import logo from './logo.svg'; // 有问题
import styles from './AppTest.less'

import fetch from "gfetch"


class App extends React.Component {
  public async componentDidMount() {
    console.log(fetch)
    fetch.get('qwe', {qwe: 123}).then(res => {
      console.log(res)
    })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button type={"primary"}>测试 antd 按钮</Button>
        <div className={styles.Grewer}>
          测试 less + css modeules
          <span>
            子标签
          </span>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
