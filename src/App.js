import React from 'react';
import './App.css';

function App() {
  // var ball = document.getElementById('ball');

  function moveAt(e) {
    var left = e.clientX + 'px';
    var top = e.clientY + 'px';
    // console.log('clientX', e.clientX);
    // console.log('clientY', e.clientY);
    document.getElementById("ball").style.position = 'relative'
    document.getElementById("ball").style.left = left + 'px';
    document.getElementById("ball").style.top = top + 'px';
  }

  // 4. отследить окончание переноса
  function dragEnd(e) {
    console.log('clientY', e.clientY);
    if (e.clientX < 117) document.getElementById("ball").style.left = '0px';
    else
      document.getElementById("ball").style.left = e.clientX - 117 + 'px';
    if (e.clientX > 736)
      document.getElementById("ball").style.left = '736px';
    else
      document.getElementById("ball").style.right = e.clienty + 'px';

    if (e.clientY < 70) document.getElementById("ball").style.top = '0px';
    else
      document.getElementById("ball").style.top = e.clientY - 70 + 'px';
    if (e.clientY > 545)
      document.getElementById("ball").style.top = '545px';
    else
      document.getElementById("ball").style.top = e.clienty + 'px';
  }

  return (
    <div>
      <div className="App">
        <div className='App-header' >
          Drag'n'Drop
        </div>
      </div>
      <div className='Responsive-div'>
        <img src="https://js.cx/clipart/ball.svg" id='ball'
          onDrag={e => moveAt(e)} onDragEnd={e => dragEnd(e)}
          style={{ position: 'relative', cursor: 'pointer', padding: '2px', left: '0px', top: '0px' }}
          width="40" height="40" alt='ball'>
        </img>
      </div>
    </div>
  );
}

export default App;
