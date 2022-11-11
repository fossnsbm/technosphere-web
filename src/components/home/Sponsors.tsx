import "./sponsor.scss";
import ifonix from '../../assets/ifonix.svg'
import codezilla from '../../assets/codezilla.png'

import ball from '../../assets/ball.svg'

const Sponsors = () => {
  return (
    <section className="sponsors">
      <div className="heading">
        <h4>Sponsors</h4>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="sponsor_cards">
        <div className="card_top-section">
          <SponsorCard text="Platinum Sponsor" logo={ifonix}/>
          <SponsorCard text="Gold Sponsor" logo={ifonix}/>
          <SponsorCard  text="Silver Sponsor" logo={codezilla}/>
        </div>
        <div className="card_bottom-section">
            <div className="co_sponsor sponsor_bottom">
                <p>Co sponsor</p>
                <div className="logo"></div>
            </div>
            <div className="other_sponsors">
            <div className=" sponsor_bottom b-none">
                <p>Learning Partner</p>
                <div className="logo"></div>
            </div>
            <div className=" sponsor_bottom b-none">
                <p>Digital Media Partner</p>
                <div className="logo"></div>
            </div>
            </div>
        </div>
      </div>
      <img src={ball} alt="" className="ball"/>
    </section>
  );
};

export default Sponsors;

interface CardProps{
 text : string,
 logo : string
}
const SponsorCard = ({logo , text} : CardProps) => {
  return (
    <div className="sponsor_card_container">
      <p>{text}</p>
      <div className="sponsor_card"><img src={logo} alt="" /></div>
    </div>
  );
};
