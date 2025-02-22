import React, { useState, useEffect } from 'react';
import '../styles/Menu.css';

function Menu() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="menu-section">
        <h2>Signature Biryani Varieties</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src={require('../images/chicken-biryani.jpg')} alt="Chicken Biryani" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Chicken Biryani</h3>
                <p>$40</p>
              </div>
              <div className="menu-card-details">
                <p>Delicious chicken biryani with aromatic spices and tender chicken pieces.</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <img src={require('../images/shahi-mutton-biryani.jpg')} alt="Shahi Mutton Biryani" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Shahi Mutton Biryani</h3>
                <p>$50</p>
              </div>
              <div className="menu-card-details">
                <p>Rich and flavorful mutton biryani with a royal touch of spices.</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <img src={require('../images/prawn-biryani.jpg')} alt="Prawn Biryani" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Prawn Biryani</h3>
                <p>$65</p>
              </div>
              <div className="menu-card-details">
                <p>Succulent prawns cooked with fragrant basmati rice and spices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-section">
        <h2>Meat Delicacies</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src={require('../images/chicken-tikka-kabab.jpg')} alt="Chicken Tikka Kabab" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Chicken Tikka Kabab</h3>
                <p>$30</p>
              </div>
              <div className="menu-card-details">
                <p>Juicy chicken tikka kababs marinated in a blend of spices.</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <img src={require('../images/murgh-malai-kebab.jpg')} alt="Murgh Malai Kebab" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Murgh Malai Kebab</h3>
                <p>$40</p>
              </div>
              <div className="menu-card-details">
                <p>Creamy and tender murgh malai kebabs with a hint of spices.</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <img src={require('../images/beef-kabab.jpg')} alt="Beef Kabab" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Beef Kabab</h3>
                <p>$25</p>
              </div>
              <div className="menu-card-details">
                <p>Spicy and flavorful beef kababs grilled to perfection.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-section">
        <h2>Royal Curries</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src={require('../images/marag.jpg')} alt="Marag" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Marag</h3>
                <p>$50</p>
              </div>
              <div className="menu-card-details">
                <p>Rich and creamy mutton soup with a blend of spices.</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <img src={require('../images/mutton-khorma.jpg')} alt="Mutton Khorma" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Mutton Khorma</h3>
                <p>$60</p>
              </div>
              <div className="menu-card-details">
                <p>Succulent mutton cooked in a rich and flavorful gravy.</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <img src={require('../images/nihari.jpg')} alt="Nihari" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Nihari</h3>
                <p>$70</p>
              </div>
              <div className="menu-card-details">
                <p>Slow-cooked beef stew with aromatic spices.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-section">
        <h2>Vegetarian Treasures</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src={require('../images/khatti-daal.jpg')} alt="Khatti Daal" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Khatti Daal</h3>
                <p>$25</p>
              </div>
              <div className="menu-card-details">
                <p>Tangy and spicy lentil soup.</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <img src={require('../images/vegetable-biryani.jpg')} alt="Vegetable Biryani" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Vegetable Biryani</h3>
                <p>$35</p>
              </div>
              <div className="menu-card-details">
                <p>Fragrant basmati rice cooked with mixed vegetables and spices.</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <img src={require('../images/mirchi-ka-salan.jpg')} alt="Mirchi Ka Salan" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Mirchi Ka Salan</h3>
                <p>$30</p>
              </div>
              <div className="menu-card-details">
                <p>Spicy and tangy curry made with green chilies and peanuts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-section">
        <h2>Royal Desserts</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src={require('../images/qubani-ka-meetha.jpg')} alt="Qubani Ka Meetha" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Qubani Ka Meetha</h3>
                <p>$20</p>
              </div>
              <div className="menu-card-details">
                <p>Sweet and tangy apricot dessert.</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <img src={require('../images/shahi-tukda.jpg')} alt="Shahi Tukda" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Shahi Tukda</h3>
                <p>$25</p>
              </div>
              <div className="menu-card-details">
                <p>Rich bread pudding with saffron and nuts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-section">
        <h2>Royal Beverages</h2>
        <div className="menu-row">
          <div className="menu-card">
            <img src={require('../images/badam-milk.jpg')} alt="Badam Milk" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Badam Milk</h3>
                <p>$30</p>
              </div>
              <div className="menu-card-details">
                <p>Refreshing almond milk with saffron and cardamom.</p>
              </div>
            </div>
          </div>
          <div className="menu-card">
            <img src={require('../images/gulab-ka-sharbat.jpg')} alt="Gulab Ka Sharbat" />
            <div className="menu-card-content">
              <div className="menu-card-header">
                <h3>Gulab Ka Sharbat</h3>
                <p>$25</p>
              </div>
              <div className="menu-card-details">
                <p>Refreshing rose-flavored drink.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
}

export default Menu;