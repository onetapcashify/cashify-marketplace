import React from 'react';
import {Link} from 'react-router-dom';
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ShieldCheck,
  MapPin
} from 'lucide-react';

const groups={
  Services:[
    ['Sell Phone','/sell/phone'],
    ['Sell Laptop','/sell/laptop'],
    ['Repair Phone','/repair/phone'],
    ['Repair Laptop','/repair/laptop'],
    ['Buy Refurbished','/buy/all'],
    ['Find Stores','/stores']
  ],

  Company:[
    ['About Us','/about'],
    ['Articles','/articles'],
    ['Stores','/stores'],
    ['Contact','/contact']
  ],

  'Sell Device':[
    ['Mobile Phone','/sell/phone'],
    ['Laptop','/sell/laptop'],
    ['Tablet','/sell/tablet'],
    ['Gaming Consoles','/sell/gaming']
  ],

  'Help & Support':[
    ['FAQ','/faq'],
    ['Support Centre','/support'],
    ['Track Order','/track-order'],
    ['My Orders','/orders'],
    ['Warranty','/warranty']
  ],

  'More Info':[
    ['Terms & Conditions','/terms'],
    ['Privacy Policy','/privacy'],
    ['Returns & Replacement','/returns']
  ]
};

export default function Footer(){
  return (
    <footer className="footer">

      <div className="container footer-top">

        <div className="footer-intro">

          <Link
            to="/"
            className="brand footer-brand footer-logo"
          >
            <img
              src="/assets/cashify-logo.svg"
              alt="Cashify"
            />
          </Link>

          <p>
            Sell, buy and repair devices with transparent pricing and quality checks.
          </p>

          <b className="follow">
            Follow us on
          </b>

          <div className="socials">

            <a href="#" aria-label="Instagram">
              <Instagram/>
            </a>

            <a href="#" aria-label="Facebook">
              <Facebook/>
            </a>

            <a href="#" aria-label="YouTube">
              <Youtube/>
            </a>

            <a href="#" aria-label="LinkedIn">
              <Linkedin/>
            </a>

          </div>

        </div>

        {Object.entries(groups).map(([g,links])=>(
          <div
            className="footer-col"
            key={g}
          >

            <h4>{g}</h4>

            {links.map(([x,to])=>(
              <Link
                key={x}
                to={to}
              >
                {x}
              </Link>
            ))}

          </div>
        ))}

      </div>

      <div className="container footer-contact">
        <span>
          <MapPin size={17}/> India
        </span>
      </div>

      <div className="container legal">

        <div>

          <p>
            <b>Registered Office:</b>
          </p>

          <p>
            Device Marketplace Pvt. Ltd. — company and legal information can be managed from the admin panel. Product names, logos and brands belong to their respective owners.
          </p>

        </div>

        <div className="trust-box">

          <ShieldCheck/>

          <div>

            <b>
              Deep Data Cleaning Guarantee
            </b>

            <span>
              Certified data sanitization process for refurbished devices.
            </span>

          </div>

        </div>

      </div>

      <div className="container copyright">
        No Copyright Reserved.
      </div>

    </footer>
  );
}