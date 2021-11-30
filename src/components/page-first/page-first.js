import React from 'react';

const textFragment = 
`Компонент Link используется вместо тега <a> для перехода по ссылкам (для переключения страниц).
Если оставить тег <a>, то браузер будет перезагружать страницы как обычно. 

Поскольку в SPA страницы в действительности не перезагружаются, компонент Link использует history API браузера, чтобы обновить адрес в строке, но при этом не обновлять страницу и не перезагружать приложение.

Внутри этого компонента находится тот же href, только он дополнительно обрабатывается так, чтобы страница браузера не перезагружалась.
`;

const codeFragment =
`import { Link } from 'react-router-dom';

<header className='header'>

  <Link to='/'>Главная</Link>
  <Link to='/first'>Первая</Link>
  <Link to='/second'>Вторая</Link>

</header>
`;

const PageFirst = () => {
  return (
    <div className='page'>
      <div className='container'>

        <h1 className='page__title'>Первая страница</h1>
        
        <div className='code-container'>
          <pre className='code'>
            {`путь: /first`}
          </pre>
        </div>

        <div className='page__text'>
          {textFragment}
        </div>

        <div className='code-container'>
          <pre className='code'>
            {codeFragment}
          </pre>
        </div>

      </div>
    </div>
  );
};

export default PageFirst;