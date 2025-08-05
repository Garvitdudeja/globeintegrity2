'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const WholeLifeGraph = () => {
    const [premium, setPremium] = useState(200); // Starting premium
    const years = 40;

    // Dynamic calculations based on premium input
    const totalPremiums = premium * 12 * years;
    const wholeLifeValue = totalPremiums * 2.5; // Sample multiplier for whole life growth
    const taxableAccountValue = totalPremiums * 1.5; // Sample taxable account value
    const wholeLifeIRR = 4.5; // Typical IRR range for Whole Life
    const taxableIRR = 3.0; // Taxable account IRR example

    // Sample graph data
    const data = Array.from({ length: years + 1 }, (_, i) => ({
        year: i,
        WholeLife: Math.round(premium * 12 * i * 0.06), // Assuming 6% growth annually
        Taxable: Math.round(premium * 12 * i * 0.04), // Assuming 4% growth annually
    }));

    return (
        <section className='premiumGraph'>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-xl-10'>
                        <h2 className='heading54 text-center text-white mb-4'>Whole Life Policy Example</h2>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <h3 className='sub18 text-white text-uppercase'>MONTHLY PREMIUM</h3>
                                <div className="slider-wrapper mb-5">
                                    <div
                                        className="slider-label-box"
                                        style={{ left: `calc(${((premium - 50) / (1000 - 50)) * 100}%)` }}
                                    >
                                        ${premium}
                                        <div className="slider-label-pointer"></div>
                                    </div>
                                    <input
                                        type="range"
                                        min="50"
                                        max="1000"
                                        step="10"
                                        value={premium}
                                        onChange={(e) => setPremium(Number(e.target.value))}
                                        className="custom-range"
                                    />
                                </div>

                                <h3 className='sub18 text-white'>TOTAL PREMIUMS</h3>
                                <p className='sub24 text-white fw-bold mb-2'>${totalPremiums.toLocaleString()}</p>
                                <p className='sub20 text-white mb-4'>Over {years} years</p>

                                <h3 className='sub18 text-white'>WHOLE LIFE CASH VALUE</h3>
                                <p className='sub24 text-white fw-bold'>${wholeLifeValue.toLocaleString()}</p>
                                {/* <p className='sub20 text-white mb-4'>{wholeLifeIRR}% IRR for {years} years</p> */}

                                {/* <p className='sub20 text-white'>S&P 500 TAXABLE ACCOUNT*</p>
                                <p className='sub24 text-white fw-bold'>${taxableAccountValue.toLocaleString()}</p>
                                <h3 className='sub18 text-white mb-4'>{taxableIRR}% IRR for {years} years</h3> */}

                                <h3 className='sub18 text-white'>DEATH BENEFIT</h3>
                                <p className='sub18 text-white mb-5'>A guaranteed death benefit will be provided, which can grow over time depending on policy dividends.</p>

                                <Link href={"https://quotes.globeintegrity.com/"}><button className='commonBtnBig w-100 mw-100 mb-4'>GET AN ESTIMATE</button></Link>
                            </div>

                            <div className='col-lg-8'>
                                <ResponsiveContainer width="100%" height={400}>
                                    <AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 80 }}>
                                        <CartesianGrid stroke="#ffffff" strokeWidth={1} vertical={false} />
                                        <XAxis dataKey="year" stroke="#ccc" ticks={[10, 20, 30, 40]} width={130} />
                                        <YAxis
                                            width={10}
                                            tick={{ dx: -3 }}
                                            tickFormatter={(v) => `$${v.toLocaleString()}`}
                                            stroke="#ccc"
                                            tickCount={9}
                                            tickLine={false}
                                        />
                                        <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                                        <Area type="monotone" dataKey="WholeLife" stroke="#FFD369" fill="#FFD369" fillOpacity={0.6} />
                                        <Area type="monotone" dataKey="Taxable" stroke="#32E6A9" fill="#32E6A9" fillOpacity={0.6} />
                                    </AreaChart>
                                </ResponsiveContainer>

                                <div className='uldata mb-4'>
                                    <div><div className='ulBox'></div></div>
                                    Example of a Whole Life policy with guaranteed growth, tax-deferred cash value, and dividend potential.
                                </div>
                                <div className='cddata'>
                                    <div><div className='cdBox'></div></div>
                                    Bank Savings CD account averages 1.71% annual return with taxable interest payments at 35%*
                                </div>
                            </div>
                        </div>

                        <p className='sub16 text-white fw-lighter'>*Tables and charts are for illustrative purposes only and are not based on any specific policy example. Please reference your specific policy for additional details. All guarantees and contractual obligations are based solely on the claims-paying ability of the issuing life insurance company.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WholeLifeGraph;
