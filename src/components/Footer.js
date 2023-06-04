import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';
import { AiFillInstagram,AiFillGithub,AiFillFacebook,AiFillLinkedin,AiFillTwitterCircle } from "react-icons/ai";

const Footer = ()=>{

    return(
        <div className="footer" style={{backgroundColor: '#000'}} id="contact">
        <footer className="text-center text-white" >
      
          <div className="container">
      
            <section className="mt-5">
         
              <div className="row text-center d-flex justify-content-center pt-5">
           
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#home" className="text-white">Home</a>
                  </h6>
                </div>
               
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#features" className="text-white">Features</a>
                  </h6>
                </div>
           
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#pricing" className="text-white">Pricing</a>
                  </h6>
                </div>
               
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#feedback" className="text-white">Feedback</a>
                  </h6>
                </div>
            
                <div className="col-md-2">
                  <h6 className="text-uppercase font-weight-bold">
                    <a href="#contact" className="text-white">Contact</a>
                  </h6>
                </div>
           
              </div>
          
            </section>
        
      
            <hr className="my-5" />
      
            <section className="mb-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <p>
                  Your Search For The Perfect Vehicle Ends With Us! Get In Touch With Us Now.  BikeAdda works with top vendors at your locations and provides you with the best and most affordable rates.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="text-center mb-5">
            
              <a href="https://www.linkedin.com/in/prashant-bhalla-0627a2204/" className="text-white me-4">
                 <AiFillLinkedin style={{fontSize:'2rem'}}/>
              </a>
              <a href="https://github.com/Prashantbhalla1" className="text-white me-4">
                <AiFillGithub style={{fontSize:'2rem'}}/>
              </a>
            </section>
    
          </div>
          
          <div className="text-center p-3" style={{backgroundcolor: 'rgba(0, 0, 0, 0.2)'}}>
            © 2022 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">BikeAdda by Prashant </a>
          </div>
         
        </footer>
 
      </div>
    );
}

export default Footer;