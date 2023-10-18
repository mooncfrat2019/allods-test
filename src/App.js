import './App.scss';

function App() {
    const cases = [
        { id: 1, image: './img/clock.png', title: 'Игровое время', free_server: '-', sub_server: '30 дней' },
        { id: 2, image: './img/toolbox.png', title: 'Запечатанный набор инструментов', free_server: '1', sub_server: '1' },
        { id: 3, image: './img/xr.png', title: 'Хрупкая чистая руна \n10-й ступени', free_server: '1', sub_server: '-' },
        { id: 4, image: './img/symbol.png', title: 'Большой символ \nизобилия творца', free_server: '10', sub_server: '-' },
        { id: 5, image: './img/mana.png', title: 'Мана-батарея', free_server: '-', sub_server: '20' },
        { id: 6, image: './img/module.png', title: 'Модуль памяти', free_server: '-', sub_server: '10' },
        { id: 7, image: './img/vito.png', title: 'Помощник Вито ', free_server: '1', sub_server: '1' },
    ]

  return (
    <div className="App">
      <div className='background_top'>
          <div className='logo'/>
          <div className='boxes'/>
          <div className='glow'/>
          <div className='glowBottom'/>
          <div className='leftPerson'/>
          <h1 className='header'>
              КОЛЛЕКЦИОННЫЕ ИЗДАНИЯ
          </h1>
          <h3 className='subheader'>
              Побеждайте легко, побеждайте стильно с новыми коллекционными изданиями «Аллодов Онлайн»!
          </h3>
          <div className='rightPerson'/>
          <div className='rightShadow'/>
          <div className='leftShadow'/>
      </div>
        <div className='background_bottom'>
            <div className='bottom_left'>
                <div className='ellipse'/>
                <div className='vito'/>
            </div>
            <div className='bottom_right'>
                <h2 className='case_header'>
                    НАБОР «ПОСЫЛКА С КОНТРАБАНДОЙ»
                </h2>
                <div className='table_nest'>
                    <div className='table_top_nest'>
                        <div>Бесплатные сервера</div>
                        <div>Подписочный сервер</div>
                    </div>
                    <table className='table'>
                        <tbody className='table_body'>
                        {cases.map((item) => {
                            return <tr key={item.id}>
                                <th className='table_img_cell'><div className='table_img' style={{ backgroundImage: `url(${item.image})` }}/></th>
                                <th className='table_img_title'><div>{item.title}</div></th>
                                <th className='table_img_server'>{item.free_server}</th>
                                <th>{item.sub_server}</th>
                            </tr>
                        })}

                        </tbody>
                    </table>
                </div>
                <div className='buy_nest'>
                    <div className='box_button_nest'>
                       <div className='price'>399 ₽</div>
                        <div className='buy_button'><p>ПРИОБРЕСТИ</p></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
