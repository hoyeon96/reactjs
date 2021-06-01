// import logo from './logo.svg';
import './App.css';
import Hello from './hello';
import Wrapper from './Wrapper';
import Counter from './counter';

function App() {
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontsize : 24,
    padding : '1rem'
  }
  return (
    // <div>
    //   {/* 안녕하세용 */}
    //   {// 안녕하세용 
    //   }


    //   <Hello name = '일번이'/>
    //   <Hello name = '이번이' color='pink'/>
    //   <Hello name = '삼번이'/>
    //   <Hello name = 'react' color='red'/>
    //   <div style = {style}>{name}</div>
    //   <div className = {'gray-box'}>{name}</div>
    //   <Hello />
    //   <Hello />
    //   <Hello />
    //   <Hello />
    // </div>

    // <Wrapper>
    //   <Hello name = '일번이' color = 'red' isSpecial = {true} />
    //   <Hello color = 'blue' isSpecial/>
    //   {/* 기본 = true 조건부렌더링*/}
    // </Wrapper>

    // <Counter></Counter>
    <div>
    {/* // 클래스의 캡슐화.. 개별적으로 카운터가 달라짐 */}
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>


  );
}


export default App;
