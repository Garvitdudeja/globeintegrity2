import Link from 'next/link'
import React from 'react'

const ThankYou = () => {
    return (
        <section className="banner">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="bannerInner bannerInner1">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2 className="heading54">Thank<span className="sky"> You!</span></h2>
                                    <p className="sub16">What will happen next.</p>
                                    <ul className="list-unstyled mt-3 ps-3">
                                        <li className="d-flex align-items-start mb-2">
                                            <span className="me-2 ski  fw-bold">✓</span>
                                            A qualified financial advisor will review your information
                                        </li>
                                        <li className="d-flex align-items-start mb-2">
                                            <span className="me-2 ski fw-bold">✓</span>
                                            You'll receive a personalized consultation call
                                        </li>
                                        <li className="d-flex align-items-start mb-2">
                                            <span className="me-2 ski  fw-bold">✓</span>
                                            Get your custom tax-free wealth building strategy
                                        </li>
                                    </ul>
                                    <Link href={"/"}><button type="button" className="commonBtn me-2">Go to</button></Link>
                                    {/* <button type="button" className="blueBtn">Watch Video <Image src={images.videoIcon} alt="icon" className="ms-1 mb-1" /></button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThankYou