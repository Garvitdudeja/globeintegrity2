import React from 'react'
import Image from 'next/image'
import * as images from './../../utilities/images'
import Link from 'next/link'
import { MdKeyboardArrowDown } from "react-icons/md";
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
                    <li><Link href="#" className=''>Products </Link><MdKeyboardArrowDown className='downArrow_'/>
                    <div className='subMenuDiv'>
                     <div className='subMenuInner'>
                      <div className='subMenuImg'>
                        <Image src={images.productMenu} alt='icon'/>
                      </div>
                      <div className='subMenuTxt'>
                        <h4>Compare Our Products</h4>
                        <p>Explore and compare our life insurance policies</p>
                      </div>
                     </div>
                     <div className='subMenuInner'>
                      <div className='subMenuImg'>
                        <Image src={images.veriable} alt='icon'/>
                      </div>
                      <div className='subMenuTxt'>
                        <h4>Variable Universal Life</h4>
                        <p>Highest level of tax advantaged growth with low fees</p>
                      </div>
                     </div>
                     <div className='subMenuInner'>
                      <div className='subMenuImg'>
                        <Image src={images.universal} alt='icon'/>
                      </div>
                      <div className='subMenuTxt'>
                        <h4>Indexed Universal Life</h4>
                        <p>Tax advantaged, moderate growth with downside protection</p>
                      </div>
                     </div>
                     <div className='subMenuInner'>
                      <div className='subMenuImg'>
                        <Image src={images.life} alt='icon'/>
                      </div>
                      <div className='subMenuTxt'>
                        <h4>Term Life</h4>
                        <p>Fast and affordable term policies</p>
                      </div>
                     </div>
                     <div className='subMenuInner'>
                      <div className='subMenuImg'>
                        <Image src={images.combinationLife} alt='icon'/>
                      </div>
                      <div className='subMenuTxt'>
                        <h4>Combination Life</h4>
                        <p>Custom insurance plans to meet protection needs and access tax-advantaged growth</p>
                      </div>
                     </div>
                    </div>
                    </li>
                    <li><Link href="#">Learn </Link><MdKeyboardArrowDown className='downArrow_'/>
                    <div className='subMenuDiv'>
                     <div className='subMenuInner'>
                      <div className='subMenuImg'>
                        <Image src={images.guide} alt='icon'/>
                      </div>
                      <div className='subMenuTxt'>
                        <h4>Guide to Life Insurance</h4>
                        <p>A quick yet comprehensive overview of life insurance</p>
                      </div>
                     </div>
                     <div className='subMenuInner'>
                      <div className='subMenuImg'>
                        <Image src={images.lifeCal} alt='icon'/>
                      </div>
                      <div className='subMenuTxt'>
                        <h4>Life Insurance Calculator</h4>
                        <p>Determine your coverage need and ideal product fit in a few quick steps</p>
                      </div>
                     </div>
                     <div className='subMenuInner'>
                      <div className='subMenuImg'>
                        <Image src={images.faqs} alt='icon'/>
                      </div>
                      <div className='subMenuTxt'>
                        <h4>FAQs</h4>
                        <p>Expert answers to your top questions</p>
                      </div>
                     </div>
                     <div className='subMenuInner'>
                      <div className='subMenuImg'>
                        <Image src={images.life} alt='icon'/>
                      </div>
                      <div className='subMenuTxt'>
                        <h4>Education</h4>
                        <p>Knowledge articles and resources from our blog</p>
                      </div>
                     </div>
                     <div className='subMenuInner'>
                      <div className='subMenuImg'>
                        <Image src={images.combinationLife} alt='icon'/>
                      </div>
                      <div className='subMenuTxt'>
                        <h4>Combination Life</h4>
                        <p>Custom insurance plans to meet protection needs and access tax-advantaged growth</p>
                      </div>
                     </div>
                    </div>
                    </li>
                    <li><Link href="#">Sign In</Link></li>
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