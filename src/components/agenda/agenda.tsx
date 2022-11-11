import * as React from 'react';
import './agenda.css';
import pfp from "../../assets/pfp.png";
import { Type } from 'react-toastify/dist/utils';
import {
  Container,
  Card,
  CardMedia,
  Divider,
  Typography,
} from  '@mui/material';
import { fontFamily } from '@mui/system';


export default function Agenda() {
  return (
    <Container sx={{mb :"100", mt : "10"}} maxWidth="lg">

      <Typography className={"header"} style={{fontWeight:"600",fontStyle:"normal", fontSize:"48px", lineHeight:"164.02%",textTransform:"uppercase",color:"#FFFFFF"}}>   
            AGENDA
      </Typography>
      <Typography className={"header2"} style={{fontWeight:"700",fontStyle:"normal", fontSize:"16px", lineHeight:"164.02%",textTransform:"uppercase",color:"#7451FF"}}> 
            Lorem ipsum dolor sit amet
      </Typography>    

      <Card className={'card1'} style={{background: "linear-gradient(118.92deg, #0E0C33 0%, #1B0E40 100%)", borderRadius:"15px"}}>
          <Typography style={{ width:"0px",height:"0px",left:"43px",top:"30px",position: "absolute",fontWeight:"600",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"33px",lineHeight:"35px",textTransform:"uppercase",color:"#FFFFFF", }}>
              28 <br/>
            <Typography style={{position: "absolute",fontWeight:"600",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"18px",lineHeight:"35px",textTransform:"uppercase",color:"#FFFFFF",}}>
                Nov
            </Typography>
          </Typography>
          <Typography style={{position: "absolute",width: "",height: "",left: "173px",top: "30px",fontStyle : "normal",fontWeight : "600",fontSize: "28px",lineHeight: "35px",textTransform: "capitalize",color: "#FFFFFF", }}>
            Cloud Computing
          </Typography>
          <Typography style={{ position: "absolute",width: "",height: "",left: "173px",top: "67px",fontStyle: "normal",fontWeight: "500",fontSize: "20px",lineHeight: "35px",textTransform: "capitalize",color: "rgba(255, 255, 255, 0.6)"}}>
            7.00PM - 8.00PM
          </Typography>
          <Typography style={{ position: "absolute",width: "",height: "",left: "376px",top: "67px",fontStyle: "normal",fontWeight: "500",fontSize: "20px",lineHeight: "35px",textTransform: "capitalize",color: "rgba(255, 255, 255, 0.6)"}}>
            WEBINAR
          </Typography>
          <Typography style= {{"position":"absolute","width":"459px","height":"90px","left":"173px","top":"110px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"164.02%","color":"#938FBE"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          <CardMedia>
            <img src={pfp} alt="" style={{"position":"absolute","width":"54px","height":"54px","left":"710px","top":"32px","borderRadius":"14px"}}/>
          </CardMedia>
          <Typography style={{"position":"absolute","width":"210px","height":"46px","left":"710px","top":"90px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"600","fontSize":"28px","lineHeight":"164.02%","textTransform":"capitalize","color":"#FFFFFF"}}>
            Thaanu Perera
          </Typography>
          <Typography style={{"position":"absolute","width":"156px","height":"33px","left":"710px","top":"130px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"20px","lineHeight":"164.02%","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              UI UX Designer
          </Typography>
          <Typography style={{"position":"absolute","width":"118px","height":"35px","left":"710px","top":"158px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"35px","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              Surge Global
          </Typography>
      </Card>
          <Divider style={{ position: "absolute",width: "14px",height: "0px",left: "460px",top: "1806px", border: "1px solid #8566FF",transform:"rotate(90deg)",      }}> </Divider>
          <Divider style={{ position: "absolute",width: "170px",height: "0px",left: "150px",top: "1836px", border: "1px solid #8566FF",transform:"rotate(90deg)",      }}> </Divider>      
          <Divider style={{ position: "absolute",width: "170px",height: "0px",left: "694px",top: "1836px",/* Blue-2 */border: "1px solid #8566FF",transform:"rotate(90deg)",}}></Divider>


      <Card className={'card2'} style={{background: "linear-gradient(118.92deg, #0E0C33 0%, #1B0E40 100%)", borderRadius:"15px"}}>
      <Typography style={{ width:"0px",height:"0px",left:"43px",top:"30px",position: "absolute",fontWeight:"600",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"33px",lineHeight:"35px",textTransform:"uppercase",color:"#FFFFFF", }}>
             29 <br/>
          <Typography style={{position: "absolute",fontWeight:"600",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"18px",lineHeight:"35px",textTransform:"uppercase",color:"#FFFFFF",}}>
              Nov
          </Typography>
      </Typography>
          <Typography style={{position: "absolute",width: "",height: "",left: "173px",top: "30px",fontStyle : "normal",fontWeight : "600",fontSize: "28px",lineHeight: "35px",textTransform: "capitalize",color: "#FFFFFF", }}>
          Blockchain and Cryptocurrency
          </Typography>
          <Typography style={{ position: "absolute",width: "",height: "",left: "173px",top: "67px",fontStyle: "normal",fontWeight: "500",fontSize: "20px",lineHeight: "35px",textTransform: "capitalize",color: "rgba(255, 255, 255, 0.6)"}}>
            7.00PM - 8.00PM
          </Typography>
          <Typography style={{ position: "absolute",width: "",height: "",left: "376px",top: "67px",fontStyle: "normal",fontWeight: "500",fontSize: "20px",lineHeight: "35px",textTransform: "capitalize",color: "rgba(255, 255, 255, 0.6)"}}>
            WEBINAR
          </Typography>
          <Typography style= {{"position":"absolute","width":"459px","height":"90px","left":"173px","top":"110px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"164.02%","color":"#938FBE"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>        
          <Typography>
          <CardMedia>
            <img src={pfp} alt="" style={{"position":"absolute","width":"54px","height":"54px","left":"710px","top":"32px","borderRadius":"14px"}}/>
          </CardMedia>                       
          </Typography>
          <Typography style={{"position":"absolute","width":"210px","height":"46px","left":"710px","top":"90px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"600","fontSize":"28px","lineHeight":"164.02%","textTransform":"capitalize","color":"#FFFFFF"}}>
            Thaanu Perera
          </Typography>
          <Typography style={{"position":"absolute","width":"156px","height":"33px","left":"710px","top":"130px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"20px","lineHeight":"164.02%","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              UI UX Designer
            </Typography>
            <Typography style={{"position":"absolute","width":"118px","height":"35px","left":"710px","top":"158px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"35px","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              Surge Global
          </Typography>
      </Card>    
      <Divider style={{ position: "absolute",width: "14px",height: "0px",left: "736px",top: "2075px", border: "1px solid #8566FF",transform:"rotate(90deg)",      }}> </Divider>
      <Divider style={{ position: "absolute",width: "170px",height: "0px",left: "424px",top: "2105px",/* Blue-2 */border: "1px solid #8566FF",transform:"rotate(90deg)", }}> </Divider>
      <Divider style={{ position: "absolute",width: "170px",height: "0px",left: "973px",top: "2105px",/* Blue-2 */border: "1px solid #8566FF",transform:"rotate(90deg)",}}> </Divider>



      <Card className={'card3'} style={{background: "linear-gradient(118.92deg, #0E0C33 0%, #1B0E40 100%)", borderRadius:"15px"}}>
      <Typography style={{ width:"0px",height:"0px",left:"43px",top:"30px",position: "absolute",fontWeight:"600",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"33px",lineHeight:"35px",textTransform:"uppercase",color:"#FFFFFF", }}>
              30 <br/>
            <Typography style={{position: "absolute",fontWeight:"600",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"18px",lineHeight:"35px",textTransform:"uppercase",color:"#FFFFFF",}}>
                Nov
            </Typography>
          </Typography>
          <Typography style={{position: "absolute",width: "",height: "",left: "173px",top: "30px",fontStyle : "normal",fontWeight : "600",fontSize: "28px",lineHeight: "35px",textTransform: "capitalize",color: "#FFFFFF", }}>
          Edge Computing
          </Typography>
          <Typography style={{ position: "absolute",width: "",height: "",left: "173px",top: "67px",fontStyle: "normal",fontWeight: "500",fontSize: "20px",lineHeight: "35px",textTransform: "capitalize",color: "rgba(255, 255, 255, 0.6)"}}>
            7.00PM - 8.00PM
          </Typography>
          <Typography style={{ position: "absolute",width: "",height: "",left: "376px",top: "67px",fontStyle: "normal",fontWeight: "500",fontSize: "20px",lineHeight: "35px",textTransform: "capitalize",color: "rgba(255, 255, 255, 0.6)"}}>
            WEBINAR
          </Typography>
          <Typography style= {{"position":"absolute","width":"459px","height":"90px","left":"173px","top":"110px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"164.02%","color":"#938FBE"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <CardMedia>
            <img src={pfp} alt="" style={{"position":"absolute","width":"54px","height":"54px","left":"710px","top":"32px","borderRadius":"14px"}}/>
          </CardMedia>
          <Typography style={{"position":"absolute","width":"210px","height":"46px","left":"710px","top":"90px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"600","fontSize":"28px","lineHeight":"164.02%","textTransform":"capitalize","color":"#FFFFFF"}}>
            Thaanu Perera
          </Typography>
          <Typography style={{"position":"absolute","width":"156px","height":"33px","left":"710px","top":"130px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"20px","lineHeight":"164.02%","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              UI UX Designer
            </Typography>
            <Typography style={{"position":"absolute","width":"118px","height":"35px","left":"710px","top":"158px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"35px","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              Surge Global
          </Typography>            
      </Card>  
      <Divider style={{ position: "absolute",width: "14px",height: "0px",left: "460px",top: "2344px", border: "1px solid #8566FF",transform:"rotate(90deg)",      }}> </Divider>    
      <Divider style={{position: "absolute",width: "170px",height: "0px",left: "150px",top: "2370px",/* Blue-2 */border: "1px solid #8566FF",transform:"rotate(90deg)",    }}></Divider>
      <Divider style={{position: "absolute",width: "170px",height: "0px",left: "699px",top: "2370px",/* Blue-2 */border: "1px solid #8566FF",transform:"rotate(90deg)", }}></Divider>

      

      <Card className={'card4'} style={{background: "linear-gradient(118.92deg, #0E0C33 0%, #1B0E40 100%)", borderRadius:"15px"}}>
      <Typography style={{ width:"0px",height:"0px",left:"43px",top:"30px",position: "absolute",fontWeight:"600",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"33px",lineHeight:"35px",textTransform:"uppercase",color:"#FFFFFF", }}>
              01 <br/>
          <Typography style={{position: "absolute",fontWeight:"600",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"18px",lineHeight:"35px",textTransform:"uppercase",color:"#FFFFFF",}}>
              Dec
          </Typography>
          </Typography>
          <Typography style={{position: "absolute",width: "",height: "",left: "173px",top: "30px",fontStyle : "normal",fontWeight : "600",fontSize: "28px",lineHeight: "35px",textTransform: "capitalize",color: "#FFFFFF", }}>
          Big Data
          </Typography>
          <Typography style={{ position: "absolute",width: "",height: "",left: "173px",top: "67px",fontStyle: "normal",fontWeight: "500",fontSize: "20px",lineHeight: "35px",textTransform: "capitalize",color: "rgba(255, 255, 255, 0.6)"}}>
            7.00PM - 8.00PM
          </Typography>
          <Typography style={{ position: "absolute",width: "",height: "",left: "376px",top: "67px",fontStyle: "normal",fontWeight: "500",fontSize: "20px",lineHeight: "35px",textTransform: "capitalize",color: "rgba(255, 255, 255, 0.6)"}}>
            WEBINAR
          </Typography>
          <Typography style= {{"position":"absolute","width":"459px","height":"90px","left":"173px","top":"110px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"164.02%","color":"#938FBE"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <CardMedia>
            <img src={pfp} alt="" style={{"position":"absolute","width":"54px","height":"54px","left":"710px","top":"32px","borderRadius":"14px"}}/>
          </CardMedia>
            <Typography style={{"position":"absolute","width":"210px","height":"46px","left":"710px","top":"90px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"600","fontSize":"28px","lineHeight":"164.02%","textTransform":"capitalize","color":"#FFFFFF"}}>
            Thaanu Perera
            </Typography>
            <Typography style={{"position":"absolute","width":"156px","height":"33px","left":"710px","top":"130px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"20px","lineHeight":"164.02%","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              UI UX Designer
            </Typography>
            <Typography style={{"position":"absolute","width":"118px","height":"35px","left":"710px","top":"158px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"35px","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              Surge Global
          </Typography>
      </Card>
      <Divider style={{ position: "absolute",width: "14px",height: "0px",left: "736px",top: "2610px", border: "1px solid #8566FF",transform:"rotate(90deg)",      }}> </Divider>
      <Divider style={{ position: "absolute",width: "170px",height: "0px",left: "424px",top: "2640px",/* Blue-2 */border: "1px solid #8566FF",transform:"rotate(90deg)",}}> </Divider>
      <Divider style={{ position: "absolute",width: "170px",height: "0px",left: "973px",top: "2640px",/* Blue-2 */border: "1px solid #8566FF",transform:"rotate(90deg)", }}> </Divider>
      
      <Card className={'card5'} style={{background: "linear-gradient(118.92deg, #0E0C33 0%, #1B0E40 100%)", borderRadius:"15px"}}>  </Card>    
      <Typography style={{ width:"0px",height:"0px",left: "152px",top: "2834px",position: "absolute",fontWeight:"600",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"33px",lineHeight:"35px",textTransform:"uppercase",color:"#FFFFFF", }}>
      02 <br/>
        <Typography style={{ position: "absolute",fontWeight:"600",fontFamily:"Montserrat",fontStyle:"normal",fontSize:"18px",lineHeight:"35px",textTransform:"uppercase",color:"#FFFFFF", }}>
        Dec
        </Typography>

      </Typography>

      <Typography style={{position: "absolute",width: "",height: "",left: "289px",top: "2834px",fontStyle : "normal",fontWeight : "600",fontSize: "28px",lineHeight: "35px",textTransform: "capitalize",color: "#FFFFFF", }}>
        IN-PERSON EVENT  
      </Typography>
      <Typography style={{position: "absolute",width: "172px",height: "35px",left: "289px",top: "2710px",fontStyle: "normal",fontWeight: "500",fontSize: "20px",lineHeight: "350px",textTransform  : "capitalize",color : "rgba(255, 255, 255, 0.6)",  }}>
        9.00PM - 4.30PM
      </Typography>
      
      <Typography style={{ position: "absolute",width: "",height: "35px",left: "289px",top: "2926px",fontStyle: "normal",fontWeight: "600",fontSize: "28px",lineHeight: "35px",textTransform: "capitalize",color: "#FFFFFF", }}>
      Artificial Intelligence
      </Typography>
      <Typography style={{ position: "absolute",width: "460px",height: "35px",left: "289px",top: "2980px",fontStyle: "normal",fontWeight: "500",fontSize: "18px",lineHeight: "164.02%",color: "#938FBE", }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
      </Typography>
      <CardMedia> 
        <img src={pfp} alt="" style={{"position":"absolute","width":"54px","height":"54px","left":"818px","top":"2926px","borderRadius":"14px"}}/> 
      </CardMedia>
      <Typography style={{"position":"absolute","width":"210px","height":"46px","left":"818px","top":"3000px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"600","fontSize":"28px","lineHeight":"164.02%","textTransform":"capitalize","color":"#FFFFFF"}}>
            Thaanu Perera
          </Typography>
          <Typography style={{"position":"absolute","width":"156px","height":"33px","left":"818px","top":"3040px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"20px","lineHeight":"164.02%","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              UI UX Designer
          </Typography>
          <Typography style={{"position":"absolute","width":"118px","height":"35px","left":"818px","top":"3068px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"35px","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              Surge Global
      </Typography>


      
      <Typography style={{ position: "absolute",width: "",height: "35px",left: "289px",top: "3126px",fontStyle: "normal",fontWeight: "600",fontSize: "28px",lineHeight: "35px",textTransform: "capitalize",color: "#FFFFFF", }}>
      Cyber Security
      </Typography>
      <Typography style={{ position: "absolute",width: "460px",height: "35px",left: "289px",top: "3180px",fontStyle: "normal",fontWeight: "500",fontSize: "18px",lineHeight: "164.02%",color: "#938FBE", }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
      </Typography>
      <CardMedia> 
        <img src={pfp} alt="" style={{"position":"absolute","width":"54px","height":"54px","left":"818px","top":"3126px","borderRadius":"14px"}}/> 
      </CardMedia>
      <Typography style={{"position":"absolute","width":"210px","height":"46px","left":"818px","top":"3200px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"600","fontSize":"28px","lineHeight":"164.02%","textTransform":"capitalize","color":"#FFFFFF"}}>
            Thaanu Perera
          </Typography>
          <Typography style={{"position":"absolute","width":"156px","height":"33px","left":"818px","top":"3240px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"20px","lineHeight":"164.02%","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              UI UX Designer
          </Typography>
          <Typography style={{"position":"absolute","width":"118px","height":"35px","left":"818px","top":"3268px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"35px","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              Surge Global
       </Typography>


      <Typography style={{ position: "absolute",width: "",height: "35px",left: "289px",top: "3326px",fontStyle: "normal",fontWeight: "600",fontSize: "28px",lineHeight: "35px",textTransform: "capitalize",color: "#FFFFFF", }}>
      Internet of Things
      </Typography>
      <Typography style={{ position: "absolute",width: "460px",height: "35px",left: "289px",top: "3380px",fontStyle: "normal",fontWeight: "500",fontSize: "18px",lineHeight: "164.02%",color: "#938FBE", }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
      </Typography>
      <CardMedia> 
        <img src={pfp} alt="" style={{"position":"absolute","width":"54px","height":"54px","left":"818px","top":"3326px","borderRadius":"14px"}}/> 
      </CardMedia>
      <Typography style={{"position":"absolute","width":"210px","height":"46px","left":"818px","top":"3400px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"600","fontSize":"28px","lineHeight":"164.02%","textTransform":"capitalize","color":"#FFFFFF"}}>
            Thaanu Perera
          </Typography>
          <Typography style={{"position":"absolute","width":"156px","height":"33px","left":"818px","top":"3440px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"20px","lineHeight":"164.02%","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              UI UX Designer
          </Typography>
          <Typography style={{"position":"absolute","width":"118px","height":"35px","left":"818px","top":"3468px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"35px","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              Surge Global
       </Typography>

      
      <Typography style={{ position: "absolute",width: "",height: "35px",left: "289px",top: "3526px",fontStyle: "normal",fontWeight: "600",fontSize: "28px",lineHeight: "35px",textTransform: "capitalize",color: "#FFFFFF", }}>
      Game Development
      </Typography>
      <Typography style={{ position: "absolute",width: "460px",height: "35px",left: "289px",top: "3580px",fontStyle: "normal",fontWeight: "500",fontSize: "18px",lineHeight: "164.02%",color: "#938FBE", }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.
      </Typography>
      <CardMedia> 
        <img src={pfp} alt="" style={{"position":"absolute","width":"54px","height":"54px","left":"818px","top":"3526px","borderRadius":"14px"}}/> 
      </CardMedia>
      <Typography style={{"position":"absolute","width":"210px","height":"46px","left":"818px","top":"3600px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"600","fontSize":"28px","lineHeight":"164.02%","textTransform":"capitalize","color":"#FFFFFF"}}>
            Thaanu Perera
          </Typography>
          <Typography style={{"position":"absolute","width":"156px","height":"33px","left":"818px","top":"3640px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"20px","lineHeight":"164.02%","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              UI UX Designer
          </Typography>
          <Typography style={{"position":"absolute","width":"118px","height":"35px","left":"818px","top":"3668px","fontFamily":"'Montserrat'","fontStyle":"normal","fontWeight":"500","fontSize":"18px","lineHeight":"35px","textTransform":"capitalize","color":"rgba(255, 255, 255, 0.6)"}}>
              Surge Global
      </Typography>


      <Divider style={{position: "absolute",width: "856px",height: "0px",left: "-190px",top: "3260px",/* Blue-2 */border: "1px solid #8566FF",transform:"rotate(90deg)", }}> </Divider>
      <Divider style={{position: "absolute",width: "856px",height: "0px",left: "350px",top: "3260px",/* Blue-2 */border: "1px solid #8566FF",transform:"rotate(90deg)", }}> </Divider>
     
</Container>

  );
}
