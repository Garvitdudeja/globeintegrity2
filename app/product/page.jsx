import React from 'react'
import Image from 'next/image'
import * as images from './../../utilities/images'
const Product = () => {
  return (
    <>
   <section className="universe">
    <div className='container'>
        <div className='row align-items-center'>
            <div className="col-lg-6">
                <h1 className='heading54'>Indexed Universal Life Insurance</h1>
                <p className='sub24 mb-4'>A vehicle that helps you build predictable, safe, tax-efficient wealth for the rest of your life.</p>
                <button type='button' className='commonBtnBig'>GET AN ESTIMATE</button>
            </div>
            <div className="col-lg-6">
                <div className='productImgOuter'>
                    <Image src={images.child} alt='image' className='img-fluid'/>
                </div>
            </div>
        </div>
    </div>
   </section>
    <section className="benifit">
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='heading54 text-center'>
                       Key Benefits
                    </h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className="benifitCard text-center">
                        <Image src={images.benifit1} alt='image' className='img-fluid'/>
                        <h3 className='heading28'>Safe & Steady</h3>
                        <p className='sub18'>Never risk losing your principal from market losses yet still access steady growth within a set range every year, with a cap (typically 9%) and a floor (typically 0%) based on the returns of an index like the S&P 500.</p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="benifitCard text-center">
                        <Image src={images.benifit2} alt='image' className='img-fluid'/>
                        <h3 className='heading28'>Protective</h3>
                        <p className='sub18'>Get lifelong coverage with the option to protect you and your loved ones in a variety of scenarios.</p>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className="benifitCard text-center">
                        <Image src={images.benifit3} alt='image' className='img-fluid'/>
                        <h3 className='heading28'>Tax-Efficient Growth</h3>
                        <p className='sub18'>Have the potential to grow tax-efficient wealth by allocating a portion of your premiums to accumulate based on returns of an index like the S&P 500.</p>
                    </div>
                </div>
                <div className='col-12 text-center my-5'>
                    <button className='commonBtnBig text-uppercase'>get an estimate</button>
                </div>
            </div>
        </div>
    </section>
    <section className='stedy'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8'>
                    <h1 className='heading54'>Steady returns and long-<br/>lasting protection</h1>
                    <p className='sub24 mb-4'>Want some extra cash but don't want to sell your stocks or take out money from your retirement or your house? We offer IUL policies that offer a predictable growth trajectory for a portion of your premiums to use for retirement while offering protection that lasts a lifetime.</p>
                    <button type='button' className='commonBtnBig'>GET AN ESTIMATE</button>
                </div>
                <div className='col-lg-4'>
                    <div className='stedyCard'>
                        <Image src={images.benifit2} alt='image' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
  )
}

export default Product