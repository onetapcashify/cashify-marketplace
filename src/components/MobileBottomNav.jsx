import React from 'react';

import {
  House,
  ShoppingBag,
  Tags,
  Wrench,
  UserRound
} from 'lucide-react';

import {
  NavLink
} from 'react-router-dom';

export default function MobileBottomNav(){

  const items=[
    {
      label:'Home',
      to:'/',
      Icon:House
    },
    {
      label:'Buy',
      to:'/buy/all',
      Icon:ShoppingBag
    },
    {
      label:'Sell',
      to:'/sell',
      Icon:Tags
    },
    {
      label:'Repair',
      to:'/repair',
      Icon:Wrench
    },
    {
      label:'Profile',
      to:'/account',
      Icon:UserRound
    }
  ];

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="Mobile navigation"
    >

      {items.map(
        ({label,to,Icon})=>(

          <NavLink
            to={to}
            key={label}
            end={to==='/'}
            className={({isActive})=>
              `mobile-bottom-item ${
                isActive?'active':''
              }`
            }
          >

            <Icon size={22}/>

            <span>
              {label}
            </span>

          </NavLink>

        )
      )}

    </nav>
  );
}