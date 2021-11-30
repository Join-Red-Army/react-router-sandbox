import React from 'react';

const textFragment = 
`В предыдущих версиях react-router проверял, содержится ли в адресной строке совпадение с каким-либо path и рендерил все компоненты, чей path входил в состав адреса в браузере.

Так, при переходе по адресу /first/second одновременно отображались компоненты первой и сторой страницы.

Чтобы такого не происходило, для Route надо было указывать атрибут exact.
Но в новых версиях такой необходимости нет.`

const codeFragment = `<Route path='/' component={<Main/>} exact`;

const PageSecond = () => {
  return (
    <div className='page'>
      <div className='container'>

        <h1 className='page__title'>Вторая страница</h1>
        
        <div className='code-container'>
          <pre className='code'>
            {`путь: /first/second`}
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

export default PageSecond;