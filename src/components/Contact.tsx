import emailjs  from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [ form,setForm ] = useState({
          name: '',
          email: '',
          message: ''
    })
    const [ loading,setLoading ] = useState(false);
    const [ response, setResponse] = useState('');
    const [ display,setDisplay] = useState(false);

    const handleChange =(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const { name, value } = e.target;
        setForm({...form, [name]: value})
    };
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        setResponse('');
        setDisplay(false);
        setLoading(true);
        emailjs.send(
            'portfolio',
            'template_fqw9m2o',
            {
                from_name: form.name,
                to_name: 'Felix',
                from_email: form.email,
                to_email: 'owolabifelix78@gmail.com',
                message: form.message,
            },
            'k1GNETitHr4y-KBIK'
            ).then(()=>{
                setLoading(false)
                setResponse('Thank You!. I would get back to you as soon as possible.')
                setDisplay(true)
                setForm({
                    name: '',
                    email: '', 
                    message: ''
                })
            },(error)=>{
                setLoading(false)
                console.log(error)
                setResponse('Oops!. Looks like something went wrong!')
                setDisplay(true)
            })
    };


    return ( 
          <>
            <div id='contact' className="container">
            <div className="myForm" >
                <span>Get In Touch</span>
                 <h1>Contact.</h1>
                 <form 
                  ref={formRef}
                   onSubmit={handleSubmit}
                  >
                    <label htmlFor="name">Your Name: </label> <br />
                      <input type="text" name="name" 
                      value={form.name} onChange={handleChange}
                      placeholder="What is your Name ?" required
                      /> <br />
                    <label htmlFor="email">Your Email:
                    </label><br />

                      <input type="email" name="email" 
                      value={form.email} onChange={handleChange}
                      placeholder="e.g,someone@gmail.com" required
                      /> <br />
                    <label htmlFor="message">Your Message:
                    </label> <br />
                      <textarea name="message" rows={6} 
                      value={form.message} onChange={handleChange}
                      placeholder="Kindly leave me a message....." required
                      ></textarea> <br />
                  { display && <h6 className="form__response">{response}</h6>}
                    <button type="submit">
                        { loading ? (  <div className="item"><div className="loader-pulse"></div>
                                        </div>) : 'Send'}
                    </button>
                 </form>
            </div>
              <div className="contact__image">
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" id="message">
              <g transform="translate(0 -1016.362)">
            <rect width="36" height="36" y="1016.362" fill="#f8b84e" rx="6" ry="6"></rect>
            <path fillRule="evenodd" d="M17 1021.362 3 1030.7l14 9.336 14-9.336-14-9.338z" opacity=".15"></path>
            <path fill="#f05542" fillRule="evenodd" d="M18 1021.362 4 1030.7l14 9.336 14-9.336-14-9.338z"></path>
            <path d="M-329 1335.77v16.592l28.525-.31.464-16.359-.464-.302-14.525 9.645-14-9.336z" color="#000" opacity=".15" overflow="visible" style={{ isolation: "auto", mixBlendMode: "normal" }} transform="translate(332 -305)"></path>
            <path d="M-324 1325.362v13.672l9 6.002 9-6.002v-9.672l-4-4h-14z" color="#000" opacity=".15" overflow="visible" style={{ isolation: "auto", mixBlendMode: "normal" }} transform="translate(332 -305)"></path>
            <path fill="#e9eded" style={{ isolation: "auto", mixBlendMode: "normal" }} d="M-323 1325.362v13.672l9 6.002 9-6.002v-9.672l-4-4h-14z" color="#000" overflow="visible" transform="translate(332 -305)"></path>
            <path fillRule="evenodd" d="M22 1020.362v4h4" opacity=".15"></path>
            <path fill="#f17f53" style={{ isolation: "auto", mixBlendMode: "normal" }} d="M-328 1335.77v16.592h28V1335.7l-14 9.336-14-9.336z" color="#000" overflow="visible" transform="translate(332 -305)"></path>
            <path fill="#34485c" fillRule="evenodd" d="M23 1020.362v4h4"></path>
            <path d="M-315.293 1329.366a5.506 5.506 0 0 0-5.637 6.373 5.505 5.505 0 0 0 5.43 4.623.5.5 0 1 0 0-1 4.493 4.493 0 0 1-4.441-3.783 4.493 4.493 0 0 1 3.025-4.988 4.496 4.496 0 0 1 5.408 2.193 4.484 4.484 0 0 1-1.146 5.547.479.479 0 0 1-.346-.469v-.191a.5.5 0 0 0 0-.31v-.735a.5.5 0 0 0-.002-.051v-3.303a.5.5 0 0 0 0-.148v-.762a.5.5 0 0 0-.506-.508.5.5 0 0 0-.494.508v.105a3.025 3.025 0 0 0-1.275-.059 3 3 0 0 0-1.782 1.024 3.003 3.003 0 0 0 0 3.86c.772.917 2.001 1.26 3.116.949.156.583.654 1.029 1.265 1.103a.5.5 0 0 0 .418-.041.5.5 0 0 0 .02-.012.5.5 0 0 0 .023-.014.5.5 0 0 0 .004 0 .5.5 0 0 0 .107-.096.5.5 0 0 0 .002 0 5.5 5.5 0 0 0 1.483-6.855 5.507 5.507 0 0 0-4.672-2.956zm.531 3.992a2 2 0 0 1 .76.155v3.699a2.002 2.002 0 0 1-2.291-.563 1.992 1.992 0 0 1 0-2.572 2.007 2.007 0 0 1 1.531-.719z" color="#000" font-family="sans-serif" fontWeight="400" opacity=".15" overflow="visible" style={{ lineHeight: 0, textIndent: 0, textAlign: "start", textDecorationLine: "none", textDecorationStyle: "solid", textDecorationColor: "#000", textTransform: "none", isolation: "auto", mixBlendMode: "normal" }} transform="translate(332 -305)"></path>
            <path fill="none" stroke="#2b4255" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="34.178" style={{ isolation: "auto", mixBlendMode: "normal" }} d="M-311.5 1338.862c-.554 0-1-.446-1-1v-1.236" color="#000" overflow="visible" transform="translate(332 -305)"></path>
            <path fill="none" stroke="#2b4255" strokeDashoffset="1.3" strokeLinecap="round" strokeLinejoin="round" d="M-314.5 1339.862a5 5 0 0 1-4.936-4.203 5 5 0 0 1 3.363-5.544 5 5 0 0 1 6.009 2.437 5 5 0 0 1-1.448 6.32" color="#000" overflow="visible" style={{ isolation: "auto", mixBlendMode: "normal" }} transform="translate(332 -305)"></path>
            <path fill="none" stroke="#2b4255" strokeDashoffset="1.3" strokeLinecap="round" strokeLinejoin="round" d="M-312.501 1337.528a2.507 2.501 0 0 1-3.175-.558 2.507 2.501 0 0 1 0-3.216 2.507 2.501 0 0 1 3.175-.558" color="#000" overflow="visible" style={{ isolation: "auto", mixBlendMode: "normal" }} transform="translate(332 -305)"></path>
            <path fill="none" stroke="#2b4255" strokeLinecap="round" strokeLinejoin="round" d="M19.499 1032.47v-5.11"></path>
        </g>
        </svg>

              </div>
            </div>
          
          </>
     );
}
 
export default Contact;