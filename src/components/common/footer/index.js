import React from 'react';
import "./footer.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div>

      <div className='bottom-section'>

        <div className='bottom-heading' >Explore other options for you here</div>

        <div className="sub-headings">Popular cuisines near me</div>
        <p className='bottom-text cur-po'>Bakery food near me • Beverages food near me • Biryani food near me • Burger
          food near me • Chinese food near me • Continental food near me • Desserts food near me • Ice Cream food
          near me • Kebab food near me • Maharashtrian food near me • Mithai food near me • Momos food near me •
          Mughlai food near me • North Indian food near me • Pizza food near me • Rolls food near me •
          Sandwich food near me • Shake food near me • South Indian food near me • Street food near me •
          Popular restaurant types near me</p>

        <div className="sub-headings">Popular restaurant types near me</div>
        <p className='bottom-text cur-po'>Bakeries near meBars near me • Beverage Shops near me • Bhojanalya
          near me • Cafés near me • Casual Dining near me • Dessert Parlors near me • Dhabas near me •
          Fine Dining near me • Food Courts near me • Food Trucks near me • Kiosks near me • Lounges near
          me • near me • Microbreweries near me • Paan Shop near me • Pubs near me • Quick Bites near me •
          Sweet Shops near me</p>

        <div className="sub-headings">Continental Restaurants Near Me</div>
        <p className='bottom-text cur-po'>Continental food refers to dishes made and consumed in the European
          countries. Dishes of French, Spanish and Italian cuisine fall under the category of ‘Continental food’.
          The key specialty of this food is, they concentrate more on ingredients like olive oil, wine,
          herbs and minimal spices.</p>

        <div className="sub-headings">Top Restaurant Chains</div>
        <span className='bottom-text-chains cur-po'> Burger Singh</span>
        <span className='bottom-text-chains cur-po'> KFC</span>
        <span className='bottom-text-chains cur-po'> McDonald's</span>
        <span className='bottom-text-chains cur-po'> Pizza Hut </span>

      </div>


      <div className='footer'>
        <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*'
          alt='zomato-logo' className='header-logo zomato-img' />


        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-col">
              <h4 className='footer-headings'> COMPANY </h4>
              <ul>
                <li> <a className="footer-specs" href='#'> Who We Are </a> </li>
                <li> <a className="footer-specs" href='#'> Blog </a> </li>
                <li> <a className="footer-specs" href='#'> Careers </a> </li>
                <li> <a className="footer-specs" href='#'> Report Fraud </a> </li>
                <li> <a className="footer-specs" href='#'> Contact </a> </li>
                <li> <a className="footer-specs" href='#'> Investor Relations </a> </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className='footer-headings'> FOR FOODIES </h4>
              <ul>
                <li><a className="footer-specs" href='#'> Code of Conduct </a> </li>
                <li><a className="footer-specs" href='#'> Community </a> </li>
                <li><a className="footer-specs" href='#'> Blogger Help </a> </li>
                <li><a className="footer-specs" href='#'> Mobile Apps </a> </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className='footer-headings'> FOR RESTAURANTS </h4>
              <ul>
                <li><a className="footer-specs" href='#'> Add restaurants </a> </li>
              </ul>
              <h4 className='footer-headings'> FOR ENTERPRISES </h4>
              <ul>
                <li><a className="footer-specs" href='#'> Zomato for work </a> </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className='footer-headings'> FOR YOU </h4>
              <ul>
                <li><a className="footer-specs" href='#'> Privacy </a> </li>
                <li><a className="footer-specs" href='#'> Terms </a> </li>
                <li><a className="footer-specs" href='#'> Security </a> </li>
                <li><a className="footer-specs" href='#'> Sitemap </a> </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className='footer-headings'> Social Links </h4>
              <div className='footer-social'>
               <div className='social-icons'> <FacebookRoundedIcon /> </div> 
               <div className='social-icons'> <TwitterIcon /> </div> 
               <div className='social-icons'>  <InstagramIcon /> </div> 
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="footer-text"> By continuing past this page, you agree to My Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of the
          respective Developer Sanket Fulzele. 2022-2023 © Zomato Clone™ Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
