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
      <div className="bg-yellow">
      <h3>HEYKEL</h3>
      <h3>DEMİRTAŞPAŞA</h3>
      <h3>SGK</h3>
      <h3>ULUYOL</h3>
      <h3>GAZCILAR</h3>
      <h3>ÇARŞAMBA/MERİNOS</h3>
      <h3>MESLEK YÜKSEK OKULU</h3>
      <h3>BEŞYOL</h3>
      <h3>KENT MEYDANI</h3>
      <h3>OTOKOP-ORMAN BÖLGE</h3>
      <h3>FATİH-ALTINOVA</h3>
      <h3>KAYHAN</h3>
      <h3>ULUCAMİ</h3>
      <h3>BÖLGE ADLİYE-MÜFTÜLÜK</h3>
      <h3>BUTTİM</h3>
      <h3>YENİCEABAT</h3>
      <h3>PANAYIR</h3>
      <h3>GENÇ OSMAN</h3>
      <h3>ALTIPARMAK</h3>
      <h3>ADLİYE</h3>
      <h3>OSMANGAZİ</h3>
      <h3>TERMİNAL</h3></div>
      <img width="1358" src="https://www.burulas.com.tr/wp-content/uploads/Revizet1-guzergah-rayli-sistemler-tramvay.jpg"/>
    </div>
    </>
  )
}

export default App
