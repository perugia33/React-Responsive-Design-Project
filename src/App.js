import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        
        <div className= "box-left">
          <div className= "font-link">
                  <h1>Learn to code </h1>
                  <h1>by watching others</h1> 
                  <p> See how experienced developers solve problems in real-time. </p>
                  <p>Watching scripted tutorials is great, but understanding 
                  how developers think is invaluable.</p>
         </div>       
       </div>
              <div className= "box-right">
                  <header id= "title">Try it free for 7 days, then $20/mo. thereafter.</header>
                    <form>
                      <fieldset>
                        <div>
                        <input type="text" placeholder="First Name" id="fname" name="fname"/>
                        </div>
                        <input type="text"  placeholder="Last Name" id="lname" name="lname"/>
                        <input type="email"   placeholder="Email Address"id="email" name="email"/>
                        <input type="password"  placeholder="Password" id="password" name="password"/>
                        <input type="button" id = "button" value="CLAIM YOUR FREE TRIAL"/> 
                        <h2 id= "consent">By clicking the button you are agreeing to our <a href="url" >Terms and Services</a> </h2>
                      </fieldset>
                    </form>
              </div> 
          </main>  
    
    </div>
  );
}

export default App;
