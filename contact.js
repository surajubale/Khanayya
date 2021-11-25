const divStyle ={
    background:'yellow',
    padding:'10px',
    marginBottom:'25px',
    width:'250px'
}


let Contact = props =>
    <div style ={divStyle}>
        
         <p>
              <span style ={{color:'RED',fontSize:'25px'}}>
              {props.name}
            </span>
            <span style={{padding:'10px', color:'blue'}}>
             {props.mobile}
            </span>
             </p>
        </div>
    


export default Contact;