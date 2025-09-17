"use client";

import React, { useEffect } from "react";
import Link from "next/link";

const ThankYou = () => {
  useEffect(() => {
    // ✅ Inject GTM Script (runs only on this page)
    const script = document.createElement("script");
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-TFGCS5C');`;
    document.head.appendChild(script);

    // ✅ Optional: Add noscript fallback
    const noscript = document.createElement("noscript");
    noscript.innerHTML = `
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TFGCS5C"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
    document.body.appendChild(noscript);
  }, []);

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
                      <span className="me-2 ski fw-bold">✓</span>
                      A qualified financial advisor will review your information
                    </li>
                    <li className="d-flex align-items-start mb-2">
                      <span className="me-2 ski fw-bold">✓</span>
                      You'll receive a personalized consultation call
                    </li>
                    <li className="d-flex align-items-start mb-2">
                      <span className="me-2 ski fw-bold">✓</span>
                      Get your custom tax-free wealth building strategy
                    </li>
                  </ul>
                  <Link href="/">
                    <button type="button" className="commonBtn me-2">Go to</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
