import { border } from "@chakra-ui/react"

function Signup({setLogin}) {

    const overlay = {
        position:'fixed',
        top:0,
        left:0,
        right:0,
        bottom:0,
        height:'100vh',
        width:'100vw',
        background:'rgba(0,0,0,0.25)',
      zIndex:1000,
      display:'grid',
      placeItems:'center'
    }

  return (
    <div style={overlay}>
      <div style={{height:'15rem',width:'25rem', background:"white", position:"relative",borderRadius:'3px',padding:"2rem"}}>
        <span onClick={(e) => setLogin(false)} style={{position:'absolute', right:"1rem",top:"1rem" }}>X</span>
        <h1 style={{color:'tomato', textAlign:'left',fontSize:'28px',marginTop:"-10px"}}>Sign Up</h1>
        <input style={{display:'block',paddingBottom:"0.7rem", border:"none", outline:"none", borderBottom:'1px solid gray', width:'100%'}} type="text" placeholder="Enter your full name" /> <br />
        <input style={{display:'block',paddingBottom:"0.7rem", border:"none", outline:"none", borderBottom:'1px solid gray', width:'100%'}} type="text" placeholder="Enter your Phone number" /> <br />
        <input style={{display:'block',paddingBottom:"0.7rem", border:"none", outline:"none", borderBottom:'1px solid gray', width:'100%'}} type="text" placeholder="Enter your Email id (Optional)" /> <br />
        <button style={{display:'block', width:'100%', marginTop:"1.5rem",height:"2.5rem", background:"tomato", color:"white", border:"none"}}>Sign Up</button>
        <hr style={{position:"relative", top:"11.5%",zIndex:0 }} />
        
        <div style={{display:"flex",justifyContent:"center", gap:"1rem"}}>
        

        </div>
      </div>
    </div>
  )
}

export default Signup
