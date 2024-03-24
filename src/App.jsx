import './App.css'

function App() {
  const isActive= true;
  

  return (
    <>
    <div>
      <h1 style={{backgroundColor:`${isActive?"purple":"red"}`}}>Akıllı Şehir Bursa'nın Tramvay Durakları</h1>
      <br />
      <img width="897" src="https://www.arkitera.com/wp-content/uploads/2014/10/yenilogo.jpg.jpeg"/>
      <br></br>
      <hr />
      <div className="bg-green"><h2>Bursa'nın akıllı şehircilik kapsamında, siz sevgili vatandaşların ve dışarıdan gelen misafirlerin tramvay durakları hakkında bilgi edinmesi için yapılan bu web programı hala geliştirme aşamasındadır.</h2></div>
      <br></br>
      <h2><a href="https://www.burulas.com.tr/rayli-sistemler/tramvay/hat-guzergahi/">Burulaş</a></h2>
      <br></br>
      <br></br>
      <img width="765" src="https://www.innova.com.tr/medias/burulas-electronik-bilet-sistemi-ve-satis-kiosk-projesi.png"/>
      <hr />
      <h2><a href="Tramvay.jsx">Bursa Tramvay Durakları</a></h2>
      <br></br>
      <br></br>
      <img width="1358" src="https://www.burulas.com.tr/wp-content/uploads/Revizet1-guzergah-rayli-sistemler-tramvay.jpg"/>
    </div>
    </>
  )
}

export default App
