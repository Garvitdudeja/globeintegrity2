import React from 'react'
import Image from 'next/image'
import * as images from './../../utilities/images'
import { Linefont } from 'next/font/google'
import Link from 'next/link'
const Product = () => {
    return (
        <>
            <section className="universe">
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className="col-lg-6">
                            <h1 className='heading54'>Indexed Universal Life Insurance</h1>
                            <p className='sub24 mb-4'>A vehicle that helps you build predictable, safe, tax-efficient wealth for the rest of your life.</p>
                            <button type='button' className='commonBtnBig'>GET AN ESTIMATE</button>
                        </div>
                        <div className="col-lg-6">
                            <div className='productImgOuter text-end'>
                                <Image src={images.child} alt='image' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="benifit">
                <div className='container-fluid'>
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
                                <Image src={images.benifit1} alt='image' className='img-fluid' />
                                <h3 className='heading28'>Safe & Steady</h3>
                                <p className='sub18'>Never risk losing your principal from market losses yet still access steady growth within a set range every year, with a cap (typically 9%) and a floor (typically 0%) based on the returns of an index like the S&P 500.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="benifitCard text-center">
                                <Image src={images.benifit2} alt='image' className='img-fluid' />
                                <h3 className='heading28'>Protective</h3>
                                <p className='sub18'>Get lifelong coverage with the option to protect you and your loved ones in a variety of scenarios.</p>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className="benifitCard text-center">
                                <Image src={images.benifit3} alt='image' className='img-fluid' />
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
                <div className='container-fluid'>
                    <div className='row align-items-center'>
                        <div className='col-lg-8'>
                            <h1 className='heading54'>Steady returns and long-<br />lasting protection</h1>
                            <p className='sub24 mb-4'>Want some extra cash but don't want to sell your stocks or take out money from your retirement or your house? We offer IUL policies that offer a predictable growth trajectory for a portion of your premiums to use for retirement while offering protection that lasts a lifetime.</p>
                            <button type='button' className='commonBtnBig'>GET AN ESTIMATE</button>
                        </div>
                        <div className='col-lg-4'>
                            <div className='stedyCard'>
                                <Image src={images.benifit2} alt='image' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='prouctFaq'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2 className='heading54 mb-5'>FAQ</h2>
                            <div className="accordion mb-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            What Is Universal Life Insurance?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Universal Life Insurance is a type of Permanent Life Insurance that provides flexible premiums and the ability to adjust the death benefit. It combines the features of Term Life Insurance, which provides protection for a specific period of time, with the savings element of Permanent Life Insurance, which builds cash value over time. There are several types of Universal Life Insurance, a couple of which we can dive deeper on are:
                                            <ul className='faqList'>
                                                <li>
                                                    <Link href="">Indexed Universal Life Insurance</Link>
                                                </li>
                                                <li>
                                                    <Link href="">Variable Universal Life Insurance</Link>
                                                </li>
                                            </ul>
                                            See the individual FAQs for each type to learn more.

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What is Variable Universal Life (VUL) Insurance?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A type of Permanent Life Insurance that provides both a death benefit and a savings or investment component. It is similar to Indexed Universal Life Insurance but with the added feature of allowing policyholders to allocate their cash value into different investment options, such as mutual funds. One of the main advantages of VUL insurance is that it allows policyholders to participate in the potential growth of the stock market or other securities, and also allows them to have more control over the investment options of their cash value.

                                            Visit our VUL product page to learn more.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                            What are the advantages of Universal Life Insurance?
                                        </button>
                                    </h2>
                                    <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Universal Life Insurance offers several advantages over Term Life Insurance, including:
                                            <ul className='faqList'>
                                                <li>
                                                    <strong>Flexible</strong> <Link href="">Premiums</Link>: Unlike other types of life insurance, Universal Life Insurance allows policyholders to adjust the premium amount and payment frequency based on their changing financial situation.
                                                </li>
                                                <li>
                                                    <Link href="">Cash Value</Link> <strong>Accumulation</strong> : Universal Life Insurance policies have a cash value component that grows over time, based on interest rates and investment returns.
                                                </li>
                                                <li>
                                                    <strong>Tax Benefits</strong>: The cash value of a Universal Life Insurance policy grows tax-deferred, meaning that policyholders do not pay taxes on the earnings until they withdraw them.
                                                </li>
                                                <li>
                                                    <strong>Permanent Coverage</strong>: Universal Life Insurance provides coverage for the insured's entire lifetime*, as long as premiums are paid.
                                                </li>
                                                <li>
                                                    <strong>Customizable Death Benefit</strong>: Universal Life Insurance policies typically allow policyholders to adjust the death benefit amount over time. This can be useful for those who want to increase or decrease their coverage based on changes in their financial situation.
                                                </li>
                                            </ul>
                                            *Policies typically mature, meaning they pay out the benefit amount, if the policyholder lives to be 120 or 121 years old (could be shorter, depending on the policy). <br />
                                            Learn more about how Universal Life Insurance compares to other insurance and wealth building vehicles in our Guide to Life Insurance.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                            When should I consider Universal Life Insurance as part of my insurance plan?
                                        </button>
                                    </h2>
                                    <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            There are several factors that can help determine whether Universal Life Insurance is right for you at this stage of your life, but here are the high-level criteria to help you determine if this tool is right for you:
                                            <ul className='faqList'>
                                                <li>
                                                    <strong>Are you looking for a</strong>: <Link href=""> death benefit? </Link> First and foremost, Amplify only recommends Universal Life Insurance to those looking for some form of coverage in the event of their death. If you’re only considering Universal Life for its cash value savings component then it’s probably not the best option for you.
                                                </li>
                                                <li>
                                                    <strong>Do you have sufficient free-cash flow?</strong>  Because Universal Life Insurance has higher <Link href="">premiums</Link>  than <Link href="">Term Life Insurance</Link>, Amplify typically only recommends Universal Life Insurance to those who can afford the higher monthly payments. If money is tight, or your income is highly variable then there are other ways to get coverage that might work better for you.
                                                </li>
                                                <li>
                                                    <strong>Does it make sense for you at this stage of life?</strong>: There are several tax-advantaged accounts that are great tools for building wealth. Your life situation typically determines which of these accounts you can leverage. For example, if you are able to contribute to a 401k through your employer, Amplify typically recommends you contribute to that account first, especially if your employer offers some kind of matching. Ultimately, which tax-advantaged vehicles you leverage as part of your holistic financial plan really depends on your goals, risk tolerance, stage of life, and several other factors.
                                                </li>
                                            </ul>
                                            Ultimately, we’ve seen Universal Life Insurance work well for clients of all different types. If you’re unsure whether Universal Life is right for you, check out our website or give us a call. We can offer personalized recommendations that are right for you.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                            Why save funds with life insurance? Why bundle protection and growth?
                                        </button>
                                    </h2>
                                    <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Cash value is a powerful savings and investment tool offered within a Permanent Life Insurance policy that can help you achieve your financial goals. Cash value life insurance can be used to generate tax-efficient growth, save for retirement, generate income, and provide liquidity for future needs. Additionally, cash value policies are an important aspect of succession planning and offer protection against creditors and legal cases in most states. With its many benefits, cash value life insurance is an excellent choice for those seeking long-term financial security.<br />

                                            Learn more about building wealth with life insurance in our Guide to Life Insurance.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='commonBtnBig'>FAQS</button>
                        </div>
                        <div className='col-lg-6'>
                            <div className='stedyCard text-end'>
                                <Image src={images.faq} alt='image' className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='moreQueSection'>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8'>
                            <div className='row align-items-center'>
                                <div className='col-lg-6'>
                                    <div className='moreQue'>
                                        <Image src={images.moreQue} className='img-fluid' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <h1 className='heading54'>
                                        More questions?
                                        We have answers.</h1>
                                    <p className='sub24 mb-4'>Life insurance can be complicated. Luckily, we're always here to help.</p>
                                    <button type='button' className='commonBtnBig'>FAQS</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product