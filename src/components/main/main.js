import React from 'react';
import '../../index.css';

const TextFragment = () => {
  return (
  <React.Fragment> 
    <p>Роутинг – это переключение между «виртуальными страницами» UI приложения.</p>
    <p>В обычных приложениях переход между страницами влечёт их полную перезагрузку. В SPA, при переходе по внутренним ссылкам, переход на новые страницы не происходит: страница остаётся прежней, но компоненты этой страницы отображаются выборочно в зависимости от URL.</p>
    <p>Такой подход называется Роутинг. Роутинг в контексте SPA – это функционал, который позволяет «переключать» страницы. Роутер – компонент, который, зная id страницы, отображает соответствуйющий компонент на экране.</p>
    <p>Таким образом, в контексте роутинга понятие страниц и переходов – это «виртуальные» понятия. На самом деле, происходит сокрытие одних компонентов и показ других в рамках одной и той же страницы браузера.</p>
    <p>Библиотека React Router делает 2 вещи:<br/>
    - читает url и выбирает, какие компоненты нужно отобразить пользователю;<br/>
    - обновляет url, когда пользователь переходит на новую страницу.<br/></p>
  </React.Fragment>
  );
};


const CommandsFragment = () => {
  return (
    <React.Fragment>
      <span className='code --comment'>установка пакета</span> <br/>
      npm install react-router-dom
      <br/>
      <br/>

      <span className='code --comment'>импорт в компонент</span><br/>
      {`import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'`}
      <br/>
      <br/>

      <span className='code --comment'>использование</span><br/>
      <span className='code --comment'>компонент Router оборачивает весть App</span><br/>
{`<Router>
  <div className='app'> ...
</Router>`}
      <br/>
      <br/>

      <span className='code --comment'>компонент Routes оборачивает компоненты для скрытия и показа</span><br/>
      <span className='code --comment'>компонент Routes оборачивает компоненты для скрытия и показа</span><br/>
{`<Routes>
  <Route path="/" element={<Main />} />
  <Route path="/first" element={<PageFirst />} />
  <Route path='/first/second' element={<PageSecond />} />
</Routes>`}

    </React.Fragment>
  );
};

const Main = () => {

  return (
    <div className='page'>
      <div className='container'>

        <h1 className='page__title'>Главная страница</h1>
        
        <div className='code-container'>
          <pre className='code'>
            {`путь: /`}
          </pre>
        </div>

        <div className='page__text'>
          {<TextFragment />}
        </div>

        <div className='code-container'>
          <pre className='code'>
            {<CommandsFragment />}
          </pre>
        </div>

      </div>
    </div>
  );
};

export default Main;