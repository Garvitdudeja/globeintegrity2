import React from 'react'
import Image from 'next/image'
import * as images from './../../utilities/images'
import Link from 'next/link'
const Header = () => {
  return (
    <>
    <section className='header'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12'>
            <header>
                <nav>
                  <div className="logo">
                     <Link href=""><Image src={images.logo} alt='logo' width={231} height={60}/></Link>
                  </div>
                  <div className='btnToggleOuter'>
                  <button type='button' className='commonBtn'><Image src={images.telIcon} alt='phone' width={20} height={20} className='me-1 mb-1'/>855-496-9338</button>
                  <input type="checkbox" id="menu-toggle"/>
                  <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
                  <ul className="menu">
                    <li><Link href="#" className='text-uppercase'>Call to Request a certified advisor </Link></li>
                    {/* <li><a href="#">Learn</a></li>
                    <li><a href="#">Sign In</a></li> */}
                  </ul>
                  </div>
                </nav>
              </header>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Header