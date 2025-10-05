import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import * as images from './../../utilities/images';


const FooterData = [
  [
    {
      title: "Products",
      items: [
        // { title: "All Products", link: "#" },
        { title: "Whole Life Insurance", link: "/product/whole-life" },
        { title: "Indexed Universal Life", link: "/product/iul" },
        { title: "Term Life Insurance", link: "/product/term" },
      ],
    },
    {
      title: "Learn",
      items: [
        { title: "Calculator", link: "/calculator" },
        { title: "FAQ", link: "/faq" },
        // { title: "Glossary", link: "#" },
      ],
    },
    {
      title: "Contact",
      items: [
        { title: "support@globeintegrity.com", link: "mailto:support@globeintegrity.com" },
        { title: "+1-844-787-4652", link: "tel:+18447874652" },
        
      ],
    },
  ],
  [
    {
      title: "Legal",
      items: [
        { title: "Privacy Policy", link: "/privacy-policy" },
        { title: "Terms & Conditions", link: "/terms-and-conditions" },
      ],
    },
    {
      title: "Social",
      type: "social",
    },
  ],
];


const Footer = () => {
  return (
    <section className='footer'>
      <div className='container-fluid'>
        <div className='row'>
          {FooterData.map((column, columnIndex) => (
            <div className='col-lg-6' key={columnIndex}>
              <div className='row'>
                {column.map((section, sectionIndex) => (
                  <div className='col-lg-4' key={sectionIndex}>
                    {section.type === 'social' ? (
                      <>
                        <Link href='#' className='mb-3 d-block'>
                          <Image
                            src={images.logoWhite}
                            alt='logo'
                            className='footerLogo img-fluid'
                            width={241}
                            height={63}
                          />
                        </Link>
                        <ul className='social'>
                          <li><Link href='https://www.facebook.com/GlobeIntegrity/about/'><Image src={images.facebookIcon} alt='Facebook' className='img-fluid' /></Link></li>
                          {/* <li><Link href='#'><Image src={images.instaIcon} alt='Instagram' className='img-fluid' /></Link></li>
                          <li><Link href='#'><Image src={images.pIcon} alt='Pinterest' className='img-fluid' /></Link></li> */}
                        </ul>
                      </>
                    ) : (
                      <>
                        <h6 className='sub16 text-uppercase'>{section.title}</h6>
                        <ul className='ps-0'>
                          {section.items.map((item, idx) => (
                            <li key={idx}>
                              <Link href={item.link} className='sub16 text-break'>{item.title}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
