//import logo from './logo.svg';


import Whiskerson from '../src/assets/images/mr-whiskerson.png'
import Fluffykins from '../src/assets/images/fluffykins.png'
import Felix from '../src/assets/images/felix.png'
import Pumpkin from '../src/assets/images/pumpkin.png'
//import Contact from './components/Contact'
import { Contact } from "./components/Contact"
import './App.css';

function App() {
  return (
        <div className="contacts">
            <Contact 
                img={Whiskerson} 
                alt='Photo of Mr. Whiskerson'
                name='Mr. Whiskerson'
                phone='(212) 555-1234'
                email='mr.whiskaz@catnap.meow'
            />
            <Contact 
                img={Fluffykins} 
                name='Fluffykins'
                alt='Photo of Fluffykins'
                phone='(212) 555-2345'         
                email='fluff@me.com'
       
            />
            <Contact 
                img={Felix} 
                name='Felix'
                alt='Photo of Felix'
                phone='(212) 555-4567'             
                email='thecat@hotmail.com'
   
            />
            <Contact 
                img={Pumpkin} 
                name='Pumpkin'
                alt='Photo of Pumpkin'
                phone='(0800) CAT KING'             
                email='pumpkin@scrimba.com'
   
            />
        </div>

    /*

    
            <article className="contact-card">
                <img 
                    src={Fluffykins}
                    alt="Photo of Fluffykins"
                />
                <h3>Fluffykins</h3>
                <div className="info-group">
                    <img 
                        src={PhoneIcon}
                        alt="phone icon" 
                    />
                    <p>(212) 555-2345</p>
                </div>
                <div className="info-group">
                    <img 
                        src={MailIcon}
                        alt="mail icon"
                    />
                    <p>fluff@me.com</p>
                </div>
            </article>
            
            <article className="contact-card">
                <img 
                    src={Felix}
                    alt="Photo of Felix"
                />
                <h3>Felix</h3>
                <div className="info-group">
                    <img 
                        src={PhoneIcon}
                        alt="phone icon" 
                    />
                    <p>(212) 555-4567</p>
                </div>
                <div className="info-group">
                    <img 
                        src={MailIcon}
                        alt="mail icon"
                    />
                    <p>thecat@hotmail.com</p>
                </div>
            </article>
            
            <article className="contact-card">
                <img 
                    src={Pumpkin}
                    alt="Photo of Pumpkin"
                />
                <h3>Pumpkin</h3>
                <div className="info-group">
                    <img 
                        src={PhoneIcon}
                        alt="phone icon" 
                    />
                    <p>(0800) CAT KING</p>
                </div>
                <div className="info-group">
                    <img 
                        src={MailIcon}
                        alt="mail icon"
                    />
                    <p>pumpkin@scrimba.com</p>
                </div>
            </article>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
