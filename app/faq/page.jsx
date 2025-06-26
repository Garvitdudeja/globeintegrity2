"use client";
import { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "../bootstrap-client";
export default function Faq() {
  useEffect(() => {
    // Optional: Re-initialize scrollspy after mount
    import("bootstrap/dist/js/bootstrap.bundle.min.js").then(({ ScrollSpy }) => {
      const el = document.querySelector('[data-bs-spy="scroll"]');
      if (el && ScrollSpy) {
        new ScrollSpy(el, {
          target: '#navbar-example',
          offset: 100,
        });
      }
    });
  }, []);


  const FaqData = [
    {
      title: "Get Started",
      items: [{
        question: "What Is Universal Life Insurance?",
        answer: (<>Life insurance protects your loved ones when you pass away. A life insurance policy is a private contract between you and an insurance company. In the policy agreement, you agree to make premium payments in exchange for a coverage amount to be paid out if you die while the policy is active. The policy is legally binding and regulated by the Departments of Insurance in all 50 states to ensure the insurance company will be in a position to pay out your coverage amount.
          <br />
          Learn more by visiting our <Link href={"#"}>Guide to Life Insurance</Link> .
        </>)
      },
      {
        question: "Do I Need Life Insurance?",
        answer: (<>At a foundational level, life insurance offers you and your loved ones protection in the event of your passing. If someone relies on you for financial support or would need financial resources if you weren't there, then purchasing life insurance is probably a smart decision.</>)
      },
      {
        question: "What type of life insurance do I need?",
        answer: <>The answer to this question depends on several factors. If you’re looking for lifetime coverage that offers you the chance to build tax-efficient wealth, then permanent life insurance (specifically Indexed Universal Life or Variable Universal Life insurance) is likely the right type for you. If you are looking for a more affordable option that provides short-term coverage, then Term Life Insurance may be better for you. Additionally, if you want protection in the event of chronic, critical, or terminal illness, or you need long term care support, then it’s wise to consider which life insurance type will provide the appropriate riders for your needs.</>
      },
      {question: "I have life insurance through work. Is it enough?",
        answer: <>No, it is highly likely your employer-sponsored coverage is not enough. The coverage only lasts while you are employed and doesn’t provide additional protections. We recommend purchasing a policy you own as your primary coverage.</>
      },
      {question: "What is the \"coverage\" amount?",
        answer: <>The coverage amount of a life insurance policy is the amount of money the policy will pay out to the designated beneficiary (or beneficiaries) if the policyholder dies while the policy is active. This amount is typically determined by the policyholder. Higher coverage amounts will cost the policyholder more in premiums, so it’s important to be thoughtful about determining the appropriate coverage amount when buying a life insurance policy.</>
      },
      {
        question: "How much life insurance coverage do I need?",
        answer: <>Financial advisors recommend that you have enough savings and life insurance coverage to equal at least <strong>five to ten times your annual salary.</strong> That is the recommended minimum amount. If you have already built up enough savings to provide that safety net on your own - then great work! However, the vast majority of people are busy building a life and don't reach that point until they are in their retirement years. Life insurance is the foundation of proper financial planning and can help you protect your family’s future.</>
      },
      {
        question: "What is covered by life insurance?",
        answer: <>The short answer is, most things. Included below are some common questions we get that are covered:
          <ul className="faqList">
            <li>
              <strong>Accidents:</strong> Yes, accidents (such as car crashes, freak accidents) are covered.
            </li>
            <li>
              <strong>Natural Illnesses:</strong> Yes, cancer, heart attack, stroke, rare diseases, etc. are all covered by life insurance. You don’t get penalized for getting sick. This is why you purchase insurance.
            </li>
            <li>
              <strong>Pandemics:</strong> Yes, they’re covered. Pandemics are not among the very limited exclusions (reason a claim would not be paid) for the policies and carriers we work with.
            </li>
          </ul></>
      },
      {
        question: "What is not covered by life insurance?",
        answer: <>You can check your policy for the exact list of exclusions, however, below are cases where policy proceeds to your beneficiary would not be paid:
          <ul className="faqList">
            <li>
              Suicide within 2 years (unless state law requires that period to be shorter)
            </li>
            <li>
              False Statements by Applicant
            </li>
            <li>Insurance Fraud</li>
            <li>Special Limitations (carrier specific)</li>
          </ul>
          That last bucket can contain various items that may be handled by a special add-on to a policy called a “rider”.</>
      },
      {
        question: "When is the best time to buy life insurance?",
        answer: <>Here are some common life events when it’s a good idea to review your life insurance coverage and start shopping:
          <ul className="faqList">
            <li>You start your career (if you have significant private student debt with co-signers)</li>
            <li>You get married</li>
            <li>You buy a home (with a mortgage)</li>
            <li>You have a new baby on the way</li>
            <li>You start a business</li>
          </ul>
          Life insurance gets more expensive the older you get. The younger and healthier you are when you get started, the easier it is to qualify for coverage and decrease the risk of a higher rate or not qualifying due to unforeseen health issues.






        </>
      },
        ,
      {
        question: "What is a beneficiary?",
        answer: <>A person or entity designated to receive the death benefit from a life insurance policy. The policyholder chooses the beneficiary when they purchase the policy. The beneficiary can be changed at any time by the policyholder. Upon the death of the insured, the death benefit is paid to the designated beneficiary. This can be a single person, multiple people, or an organization.</>
      },
        ,
      {
        question: "What is a death benefit?",
        answer: <>The death benefit of a life insurance policy is the payment made by a life insurance carrier to the designated beneficiary or beneficiaries upon the death of the insured person. Death benefits are not taxed so the full amount goes to the designated beneficiaries according to the policyholder’s desired allocation plan.</>
      },
        ,
      {
        question: "How long do I need life insurance?",
        answer: <>That depends on how long you want to ensure your loved ones will receive financial support if you pass away. Most people typically plan to have some form of life insurance coverage at least until they retire. One reason we at Amplify usually recommend Indexed Universal Life or Variable Universal Life insurance is they are types of permanent life insurance, meaning the coverage lasts the entire lifetime of the policyholder. With these types of policies your beneficiaries will be taken care of no matter when you pass.</>
      },
        ,
      {
        question: "How much does life insurance cost?",
        answer: <>
          The cost of your policy will depend primarily on the type of policy you purchase, your age, health, and your desired coverage amount. It’s difficult to say how much it will cost for you without knowing more about you. However, lower coverage amounts will generally result in lower premiums. The amount you pay in premiums may or may not change over time depending on the type of policy you choose (e.g Term policy premiums don’t change whereas IUL or VUL premiums can be flexible).</>
      }
      ]
    }
  ]


  return (
    <>
      <BootstrapClient />
      <section className="faqPage">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 text-center">
              <div className="faqHead">
                <h3 className="heading28">You Have Questions</h3>
                <p>We've got the answers you need to make a plan</p>
                <div className="faqSerch">
                  <button className="searchBtn">
                    <CiSearch style={{ width: "30px", height: "30px" }} />
                  </button>
                  <input
                    type="search"
                    placeholder="Search frequently asked question"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Sticky Navbar */}
      <nav id="navbar-example2" className="navbar px-3 mb-3 mainFaqPageNav">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              Get Started
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Compare Products
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading3">
              Why Globe Integrity
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading4">
              Why Bundle
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading5">
              Apply
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading6">
              Manage Policy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading7">
              Grow Wealth
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading8">
              Access Funds
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading9">
              Leverage Protection
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading10">
              Expand Protection
            </a>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <div className="container prouctFaq mainFaqPage py-0">
        <div
          className="container prouctFaq mainFaqPage py-0"
          data-bs-spy="scroll"
          data-bs-target="#navbar-example2"
          data-bs-offset="100"
          tabIndex="0"

        >
          <div id="scrollspyHeading1" className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">Get Started</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-5" id="accordionExample">
                      {FaqData[0].items.map((item, index) => <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#collapse" + index}
                            aria-expanded="false"
                            aria-controls={"collapse" + index}
                          >
                            {item.question}
                          </button>
                        </h2>
                        <div
                          id={"collapse" + index}
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            {item.answer}
                          </div>
                        </div>
                      </div>)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scrollspyHeading2" className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">Compare Products</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-5" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What Is Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance is a type of Permanent Life
                            Insurance that provides flexible premiums and the
                            ability to adjust the death benefit. It combines the
                            features of Term Life Insurance, which provides
                            protection for a specific period of time, with the
                            savings element of Permanent Life Insurance, which
                            builds cash value over time. There are several types
                            of Universal Life Insurance, a couple of which we can
                            dive deeper on are:
                            <ul className="faqList">
                              <li>
                                <Link href="">
                                  Indexed Universal Life Insurance
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  Variable Universal Life Insurance
                                </Link>
                              </li>
                            </ul>
                            See the individual FAQs for each type to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is Variable Universal Life (VUL) Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            A type of Permanent Life Insurance that provides both
                            a death benefit and a savings or investment component.
                            It is similar to Indexed Universal Life Insurance but
                            with the added feature of allowing policyholders to
                            allocate their cash value into different investment
                            options, such as mutual funds. One of the main
                            advantages of VUL insurance is that it allows
                            policyholders to participate in the potential growth
                            of the stock market or other securities, and also
                            allows them to have more control over the investment
                            options of their cash value. Visit our VUL product
                            page to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            What are the advantages of Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance offers several advantages
                            over Term Life Insurance, including:
                            <ul className="faqList">
                              <li>
                                <strong>Flexible</strong>{" "}
                                <Link href="">Premiums</Link>: Unlike other types
                                of life insurance, Universal Life Insurance allows
                                policyholders to adjust the premium amount and
                                payment frequency based on their changing
                                financial situation.
                              </li>
                              <li>
                                <Link href="">Cash Value</Link>{" "}
                                <strong>Accumulation</strong> : Universal Life
                                Insurance policies have a cash value component
                                that grows over time, based on interest rates and
                                investment returns.
                              </li>
                              <li>
                                <strong>Tax Benefits</strong>: The cash value of a
                                Universal Life Insurance policy grows
                                tax-deferred, meaning that policyholders do not
                                pay taxes on the earnings until they withdraw
                                them.
                              </li>
                              <li>
                                <strong>Permanent Coverage</strong>: Universal
                                Life Insurance provides coverage for the insured's
                                entire lifetime*, as long as premiums are paid.
                              </li>
                              <li>
                                <strong>Customizable Death Benefit</strong>:
                                Universal Life Insurance policies typically allow
                                policyholders to adjust the death benefit amount
                                over time. This can be useful for those who want
                                to increase or decrease their coverage based on
                                changes in their financial situation.
                              </li>
                            </ul>
                            *Policies typically mature, meaning they pay out the
                            benefit amount, if the policyholder lives to be 120 or
                            121 years old (could be shorter, depending on the
                            policy). <br />
                            Learn more about how Universal Life Insurance compares
                            to other insurance and wealth building vehicles in our
                            Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            When should I consider Universal Life Insurance as
                            part of my insurance plan?
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are several factors that can help determine
                            whether Universal Life Insurance is right for you at
                            this stage of your life, but here are the high-level
                            criteria to help you determine if this tool is right
                            for you:
                            <ul className="faqList">
                              <li>
                                <strong>Are you looking for a</strong>:{" "}
                                <Link href=""> death benefit? </Link> First and
                                foremost, Globe Integrity only recommends Universal Life
                                Insurance to those looking for some form of
                                coverage in the event of their death. If you’re
                                only considering Universal Life for its cash value
                                savings component then it’s probably not the best
                                option for you.
                              </li>
                              <li>
                                <strong>
                                  Do you have sufficient free-cash flow?
                                </strong>{" "}
                                Because Universal Life Insurance has higher{" "}
                                <Link href="">premiums</Link> than{" "}
                                <Link href="">Term Life Insurance</Link>, Globe Integrity
                                typically only recommends Universal Life Insurance
                                to those who can afford the higher monthly
                                payments. If money is tight, or your income is
                                highly variable then there are other ways to get
                                coverage that might work better for you.
                              </li>
                              <li>
                                <strong>
                                  Does it make sense for you at this stage of
                                  life?
                                </strong>
                                : There are several tax-advantaged accounts that
                                are great tools for building wealth. Your life
                                situation typically determines which of these
                                accounts you can leverage. For example, if you are
                                able to contribute to a 401k through your
                                employer, Globe Integrity typically recommends you
                                contribute to that account first, especially if
                                your employer offers some kind of matching.
                                Ultimately, which tax-advantaged vehicles you
                                leverage as part of your holistic financial plan
                                really depends on your goals, risk tolerance,
                                stage of life, and several other factors.
                              </li>
                            </ul>
                            Ultimately, we’ve seen Universal Life Insurance work
                            well for clients of all different types. If you’re
                            unsure whether Universal Life is right for you, check
                            out our website or give us a call. We can offer
                            personalized recommendations that are right for you.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            Why save funds with life insurance? Why bundle
                            protection and growth?
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Cash value is a powerful savings and investment tool
                            offered within a Permanent Life Insurance policy that
                            can help you achieve your financial goals. Cash value
                            life insurance can be used to generate tax-efficient
                            growth, save for retirement, generate income, and
                            provide liquidity for future needs. Additionally, cash
                            value policies are an important aspect of succession
                            planning and offer protection against creditors and
                            legal cases in most states. With its many benefits,
                            cash value life insurance is an excellent choice for
                            those seeking long-term financial security.
                            <br />
                            Learn more about building wealth with life insurance
                            in our Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scrollspyHeading3" className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">Why Globe Integrity</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-5" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What Is Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance is a type of Permanent Life
                            Insurance that provides flexible premiums and the
                            ability to adjust the death benefit. It combines the
                            features of Term Life Insurance, which provides
                            protection for a specific period of time, with the
                            savings element of Permanent Life Insurance, which
                            builds cash value over time. There are several types
                            of Universal Life Insurance, a couple of which we can
                            dive deeper on are:
                            <ul className="faqList">
                              <li>
                                <Link href="">
                                  Indexed Universal Life Insurance
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  Variable Universal Life Insurance
                                </Link>
                              </li>
                            </ul>
                            See the individual FAQs for each type to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is Variable Universal Life (VUL) Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            A type of Permanent Life Insurance that provides both
                            a death benefit and a savings or investment component.
                            It is similar to Indexed Universal Life Insurance but
                            with the added feature of allowing policyholders to
                            allocate their cash value into different investment
                            options, such as mutual funds. One of the main
                            advantages of VUL insurance is that it allows
                            policyholders to participate in the potential growth
                            of the stock market or other securities, and also
                            allows them to have more control over the investment
                            options of their cash value. Visit our VUL product
                            page to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            What are the advantages of Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance offers several advantages
                            over Term Life Insurance, including:
                            <ul className="faqList">
                              <li>
                                <strong>Flexible</strong>{" "}
                                <Link href="">Premiums</Link>: Unlike other types
                                of life insurance, Universal Life Insurance allows
                                policyholders to adjust the premium amount and
                                payment frequency based on their changing
                                financial situation.
                              </li>
                              <li>
                                <Link href="">Cash Value</Link>{" "}
                                <strong>Accumulation</strong> : Universal Life
                                Insurance policies have a cash value component
                                that grows over time, based on interest rates and
                                investment returns.
                              </li>
                              <li>
                                <strong>Tax Benefits</strong>: The cash value of a
                                Universal Life Insurance policy grows
                                tax-deferred, meaning that policyholders do not
                                pay taxes on the earnings until they withdraw
                                them.
                              </li>
                              <li>
                                <strong>Permanent Coverage</strong>: Universal
                                Life Insurance provides coverage for the insured's
                                entire lifetime*, as long as premiums are paid.
                              </li>
                              <li>
                                <strong>Customizable Death Benefit</strong>:
                                Universal Life Insurance policies typically allow
                                policyholders to adjust the death benefit amount
                                over time. This can be useful for those who want
                                to increase or decrease their coverage based on
                                changes in their financial situation.
                              </li>
                            </ul>
                            *Policies typically mature, meaning they pay out the
                            benefit amount, if the policyholder lives to be 120 or
                            121 years old (could be shorter, depending on the
                            policy). <br />
                            Learn more about how Universal Life Insurance compares
                            to other insurance and wealth building vehicles in our
                            Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            When should I consider Universal Life Insurance as
                            part of my insurance plan?
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are several factors that can help determine
                            whether Universal Life Insurance is right for you at
                            this stage of your life, but here are the high-level
                            criteria to help you determine if this tool is right
                            for you:
                            <ul className="faqList">
                              <li>
                                <strong>Are you looking for a</strong>:{" "}
                                <Link href=""> death benefit? </Link> First and
                                foremost, Globe Integrity only recommends Universal Life
                                Insurance to those looking for some form of
                                coverage in the event of their death. If you’re
                                only considering Universal Life for its cash value
                                savings component then it’s probably not the best
                                option for you.
                              </li>
                              <li>
                                <strong>
                                  Do you have sufficient free-cash flow?
                                </strong>{" "}
                                Because Universal Life Insurance has higher{" "}
                                <Link href="">premiums</Link> than{" "}
                                <Link href="">Term Life Insurance</Link>, Globe Integrity
                                typically only recommends Universal Life Insurance
                                to those who can afford the higher monthly
                                payments. If money is tight, or your income is
                                highly variable then there are other ways to get
                                coverage that might work better for you.
                              </li>
                              <li>
                                <strong>
                                  Does it make sense for you at this stage of
                                  life?
                                </strong>
                                : There are several tax-advantaged accounts that
                                are great tools for building wealth. Your life
                                situation typically determines which of these
                                accounts you can leverage. For example, if you are
                                able to contribute to a 401k through your
                                employer, Globe Integrity typically recommends you
                                contribute to that account first, especially if
                                your employer offers some kind of matching.
                                Ultimately, which tax-advantaged vehicles you
                                leverage as part of your holistic financial plan
                                really depends on your goals, risk tolerance,
                                stage of life, and several other factors.
                              </li>
                            </ul>
                            Ultimately, we’ve seen Universal Life Insurance work
                            well for clients of all different types. If you’re
                            unsure whether Universal Life is right for you, check
                            out our website or give us a call. We can offer
                            personalized recommendations that are right for you.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            Why save funds with life insurance? Why bundle
                            protection and growth?
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Cash value is a powerful savings and investment tool
                            offered within a Permanent Life Insurance policy that
                            can help you achieve your financial goals. Cash value
                            life insurance can be used to generate tax-efficient
                            growth, save for retirement, generate income, and
                            provide liquidity for future needs. Additionally, cash
                            value policies are an important aspect of succession
                            planning and offer protection against creditors and
                            legal cases in most states. With its many benefits,
                            cash value life insurance is an excellent choice for
                            those seeking long-term financial security.
                            <br />
                            Learn more about building wealth with life insurance
                            in our Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scrollspyHeading4" className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">Why Bundle</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-5" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What Is Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance is a type of Permanent Life
                            Insurance that provides flexible premiums and the
                            ability to adjust the death benefit. It combines the
                            features of Term Life Insurance, which provides
                            protection for a specific period of time, with the
                            savings element of Permanent Life Insurance, which
                            builds cash value over time. There are several types
                            of Universal Life Insurance, a couple of which we can
                            dive deeper on are:
                            <ul className="faqList">
                              <li>
                                <Link href="">
                                  Indexed Universal Life Insurance
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  Variable Universal Life Insurance
                                </Link>
                              </li>
                            </ul>
                            See the individual FAQs for each type to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is Variable Universal Life (VUL) Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            A type of Permanent Life Insurance that provides both
                            a death benefit and a savings or investment component.
                            It is similar to Indexed Universal Life Insurance but
                            with the added feature of allowing policyholders to
                            allocate their cash value into different investment
                            options, such as mutual funds. One of the main
                            advantages of VUL insurance is that it allows
                            policyholders to participate in the potential growth
                            of the stock market or other securities, and also
                            allows them to have more control over the investment
                            options of their cash value. Visit our VUL product
                            page to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            What are the advantages of Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance offers several advantages
                            over Term Life Insurance, including:
                            <ul className="faqList">
                              <li>
                                <strong>Flexible</strong>{" "}
                                <Link href="">Premiums</Link>: Unlike other types
                                of life insurance, Universal Life Insurance allows
                                policyholders to adjust the premium amount and
                                payment frequency based on their changing
                                financial situation.
                              </li>
                              <li>
                                <Link href="">Cash Value</Link>{" "}
                                <strong>Accumulation</strong> : Universal Life
                                Insurance policies have a cash value component
                                that grows over time, based on interest rates and
                                investment returns.
                              </li>
                              <li>
                                <strong>Tax Benefits</strong>: The cash value of a
                                Universal Life Insurance policy grows
                                tax-deferred, meaning that policyholders do not
                                pay taxes on the earnings until they withdraw
                                them.
                              </li>
                              <li>
                                <strong>Permanent Coverage</strong>: Universal
                                Life Insurance provides coverage for the insured's
                                entire lifetime*, as long as premiums are paid.
                              </li>
                              <li>
                                <strong>Customizable Death Benefit</strong>:
                                Universal Life Insurance policies typically allow
                                policyholders to adjust the death benefit amount
                                over time. This can be useful for those who want
                                to increase or decrease their coverage based on
                                changes in their financial situation.
                              </li>
                            </ul>
                            *Policies typically mature, meaning they pay out the
                            benefit amount, if the policyholder lives to be 120 or
                            121 years old (could be shorter, depending on the
                            policy). <br />
                            Learn more about how Universal Life Insurance compares
                            to other insurance and wealth building vehicles in our
                            Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            When should I consider Universal Life Insurance as
                            part of my insurance plan?
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are several factors that can help determine
                            whether Universal Life Insurance is right for you at
                            this stage of your life, but here are the high-level
                            criteria to help you determine if this tool is right
                            for you:
                            <ul className="faqList">
                              <li>
                                <strong>Are you looking for a</strong>:{" "}
                                <Link href=""> death benefit? </Link> First and
                                foremost, Globe Integrity only recommends Universal Life
                                Insurance to those looking for some form of
                                coverage in the event of their death. If you’re
                                only considering Universal Life for its cash value
                                savings component then it’s probably not the best
                                option for you.
                              </li>
                              <li>
                                <strong>
                                  Do you have sufficient free-cash flow?
                                </strong>{" "}
                                Because Universal Life Insurance has higher{" "}
                                <Link href="">premiums</Link> than{" "}
                                <Link href="">Term Life Insurance</Link>, Globe Integrity
                                typically only recommends Universal Life Insurance
                                to those who can afford the higher monthly
                                payments. If money is tight, or your income is
                                highly variable then there are other ways to get
                                coverage that might work better for you.
                              </li>
                              <li>
                                <strong>
                                  Does it make sense for you at this stage of
                                  life?
                                </strong>
                                : There are several tax-advantaged accounts that
                                are great tools for building wealth. Your life
                                situation typically determines which of these
                                accounts you can leverage. For example, if you are
                                able to contribute to a 401k through your
                                employer, Globe Integrity typically recommends you
                                contribute to that account first, especially if
                                your employer offers some kind of matching.
                                Ultimately, which tax-advantaged vehicles you
                                leverage as part of your holistic financial plan
                                really depends on your goals, risk tolerance,
                                stage of life, and several other factors.
                              </li>
                            </ul>
                            Ultimately, we’ve seen Universal Life Insurance work
                            well for clients of all different types. If you’re
                            unsure whether Universal Life is right for you, check
                            out our website or give us a call. We can offer
                            personalized recommendations that are right for you.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            Why save funds with life insurance? Why bundle
                            protection and growth?
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Cash value is a powerful savings and investment tool
                            offered within a Permanent Life Insurance policy that
                            can help you achieve your financial goals. Cash value
                            life insurance can be used to generate tax-efficient
                            growth, save for retirement, generate income, and
                            provide liquidity for future needs. Additionally, cash
                            value policies are an important aspect of succession
                            planning and offer protection against creditors and
                            legal cases in most states. With its many benefits,
                            cash value life insurance is an excellent choice for
                            those seeking long-term financial security.
                            <br />
                            Learn more about building wealth with life insurance
                            in our Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scrollspyHeading5" className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">Apply</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-5" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What Is Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance is a type of Permanent Life
                            Insurance that provides flexible premiums and the
                            ability to adjust the death benefit. It combines the
                            features of Term Life Insurance, which provides
                            protection for a specific period of time, with the
                            savings element of Permanent Life Insurance, which
                            builds cash value over time. There are several types
                            of Universal Life Insurance, a couple of which we can
                            dive deeper on are:
                            <ul className="faqList">
                              <li>
                                <Link href="">
                                  Indexed Universal Life Insurance
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  Variable Universal Life Insurance
                                </Link>
                              </li>
                            </ul>
                            See the individual FAQs for each type to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is Variable Universal Life (VUL) Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            A type of Permanent Life Insurance that provides both
                            a death benefit and a savings or investment component.
                            It is similar to Indexed Universal Life Insurance but
                            with the added feature of allowing policyholders to
                            allocate their cash value into different investment
                            options, such as mutual funds. One of the main
                            advantages of VUL insurance is that it allows
                            policyholders to participate in the potential growth
                            of the stock market or other securities, and also
                            allows them to have more control over the investment
                            options of their cash value. Visit our VUL product
                            page to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            What are the advantages of Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance offers several advantages
                            over Term Life Insurance, including:
                            <ul className="faqList">
                              <li>
                                <strong>Flexible</strong>{" "}
                                <Link href="">Premiums</Link>: Unlike other types
                                of life insurance, Universal Life Insurance allows
                                policyholders to adjust the premium amount and
                                payment frequency based on their changing
                                financial situation.
                              </li>
                              <li>
                                <Link href="">Cash Value</Link>{" "}
                                <strong>Accumulation</strong> : Universal Life
                                Insurance policies have a cash value component
                                that grows over time, based on interest rates and
                                investment returns.
                              </li>
                              <li>
                                <strong>Tax Benefits</strong>: The cash value of a
                                Universal Life Insurance policy grows
                                tax-deferred, meaning that policyholders do not
                                pay taxes on the earnings until they withdraw
                                them.
                              </li>
                              <li>
                                <strong>Permanent Coverage</strong>: Universal
                                Life Insurance provides coverage for the insured's
                                entire lifetime*, as long as premiums are paid.
                              </li>
                              <li>
                                <strong>Customizable Death Benefit</strong>:
                                Universal Life Insurance policies typically allow
                                policyholders to adjust the death benefit amount
                                over time. This can be useful for those who want
                                to increase or decrease their coverage based on
                                changes in their financial situation.
                              </li>
                            </ul>
                            *Policies typically mature, meaning they pay out the
                            benefit amount, if the policyholder lives to be 120 or
                            121 years old (could be shorter, depending on the
                            policy). <br />
                            Learn more about how Universal Life Insurance compares
                            to other insurance and wealth building vehicles in our
                            Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            When should I consider Universal Life Insurance as
                            part of my insurance plan?
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are several factors that can help determine
                            whether Universal Life Insurance is right for you at
                            this stage of your life, but here are the high-level
                            criteria to help you determine if this tool is right
                            for you:
                            <ul className="faqList">
                              <li>
                                <strong>Are you looking for a</strong>:{" "}
                                <Link href=""> death benefit? </Link> First and
                                foremost, Globe Integrity only recommends Universal Life
                                Insurance to those looking for some form of
                                coverage in the event of their death. If you’re
                                only considering Universal Life for its cash value
                                savings component then it’s probably not the best
                                option for you.
                              </li>
                              <li>
                                <strong>
                                  Do you have sufficient free-cash flow?
                                </strong>{" "}
                                Because Universal Life Insurance has higher{" "}
                                <Link href="">premiums</Link> than{" "}
                                <Link href="">Term Life Insurance</Link>, Globe Integrity
                                typically only recommends Universal Life Insurance
                                to those who can afford the higher monthly
                                payments. If money is tight, or your income is
                                highly variable then there are other ways to get
                                coverage that might work better for you.
                              </li>
                              <li>
                                <strong>
                                  Does it make sense for you at this stage of
                                  life?
                                </strong>
                                : There are several tax-advantaged accounts that
                                are great tools for building wealth. Your life
                                situation typically determines which of these
                                accounts you can leverage. For example, if you are
                                able to contribute to a 401k through your
                                employer, Globe Integrity typically recommends you
                                contribute to that account first, especially if
                                your employer offers some kind of matching.
                                Ultimately, which tax-advantaged vehicles you
                                leverage as part of your holistic financial plan
                                really depends on your goals, risk tolerance,
                                stage of life, and several other factors.
                              </li>
                            </ul>
                            Ultimately, we’ve seen Universal Life Insurance work
                            well for clients of all different types. If you’re
                            unsure whether Universal Life is right for you, check
                            out our website or give us a call. We can offer
                            personalized recommendations that are right for you.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            Why save funds with life insurance? Why bundle
                            protection and growth?
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Cash value is a powerful savings and investment tool
                            offered within a Permanent Life Insurance policy that
                            can help you achieve your financial goals. Cash value
                            life insurance can be used to generate tax-efficient
                            growth, save for retirement, generate income, and
                            provide liquidity for future needs. Additionally, cash
                            value policies are an important aspect of succession
                            planning and offer protection against creditors and
                            legal cases in most states. With its many benefits,
                            cash value life insurance is an excellent choice for
                            those seeking long-term financial security.
                            <br />
                            Learn more about building wealth with life insurance
                            in our Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scrollspyHeading6" className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">Manage Policy</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-5" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What Is Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance is a type of Permanent Life
                            Insurance that provides flexible premiums and the
                            ability to adjust the death benefit. It combines the
                            features of Term Life Insurance, which provides
                            protection for a specific period of time, with the
                            savings element of Permanent Life Insurance, which
                            builds cash value over time. There are several types
                            of Universal Life Insurance, a couple of which we can
                            dive deeper on are:
                            <ul className="faqList">
                              <li>
                                <Link href="">
                                  Indexed Universal Life Insurance
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  Variable Universal Life Insurance
                                </Link>
                              </li>
                            </ul>
                            See the individual FAQs for each type to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is Variable Universal Life (VUL) Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            A type of Permanent Life Insurance that provides both
                            a death benefit and a savings or investment component.
                            It is similar to Indexed Universal Life Insurance but
                            with the added feature of allowing policyholders to
                            allocate their cash value into different investment
                            options, such as mutual funds. One of the main
                            advantages of VUL insurance is that it allows
                            policyholders to participate in the potential growth
                            of the stock market or other securities, and also
                            allows them to have more control over the investment
                            options of their cash value. Visit our VUL product
                            page to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            What are the advantages of Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance offers several advantages
                            over Term Life Insurance, including:
                            <ul className="faqList">
                              <li>
                                <strong>Flexible</strong>{" "}
                                <Link href="">Premiums</Link>: Unlike other types
                                of life insurance, Universal Life Insurance allows
                                policyholders to adjust the premium amount and
                                payment frequency based on their changing
                                financial situation.
                              </li>
                              <li>
                                <Link href="">Cash Value</Link>{" "}
                                <strong>Accumulation</strong> : Universal Life
                                Insurance policies have a cash value component
                                that grows over time, based on interest rates and
                                investment returns.
                              </li>
                              <li>
                                <strong>Tax Benefits</strong>: The cash value of a
                                Universal Life Insurance policy grows
                                tax-deferred, meaning that policyholders do not
                                pay taxes on the earnings until they withdraw
                                them.
                              </li>
                              <li>
                                <strong>Permanent Coverage</strong>: Universal
                                Life Insurance provides coverage for the insured's
                                entire lifetime*, as long as premiums are paid.
                              </li>
                              <li>
                                <strong>Customizable Death Benefit</strong>:
                                Universal Life Insurance policies typically allow
                                policyholders to adjust the death benefit amount
                                over time. This can be useful for those who want
                                to increase or decrease their coverage based on
                                changes in their financial situation.
                              </li>
                            </ul>
                            *Policies typically mature, meaning they pay out the
                            benefit amount, if the policyholder lives to be 120 or
                            121 years old (could be shorter, depending on the
                            policy). <br />
                            Learn more about how Universal Life Insurance compares
                            to other insurance and wealth building vehicles in our
                            Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            When should I consider Universal Life Insurance as
                            part of my insurance plan?
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are several factors that can help determine
                            whether Universal Life Insurance is right for you at
                            this stage of your life, but here are the high-level
                            criteria to help you determine if this tool is right
                            for you:
                            <ul className="faqList">
                              <li>
                                <strong>Are you looking for a</strong>:{" "}
                                <Link href=""> death benefit? </Link> First and
                                foremost, Globe Integrity only recommends Universal Life
                                Insurance to those looking for some form of
                                coverage in the event of their death. If you’re
                                only considering Universal Life for its cash value
                                savings component then it’s probably not the best
                                option for you.
                              </li>
                              <li>
                                <strong>
                                  Do you have sufficient free-cash flow?
                                </strong>{" "}
                                Because Universal Life Insurance has higher{" "}
                                <Link href="">premiums</Link> than{" "}
                                <Link href="">Term Life Insurance</Link>, Globe Integrity
                                typically only recommends Universal Life Insurance
                                to those who can afford the higher monthly
                                payments. If money is tight, or your income is
                                highly variable then there are other ways to get
                                coverage that might work better for you.
                              </li>
                              <li>
                                <strong>
                                  Does it make sense for you at this stage of
                                  life?
                                </strong>
                                : There are several tax-advantaged accounts that
                                are great tools for building wealth. Your life
                                situation typically determines which of these
                                accounts you can leverage. For example, if you are
                                able to contribute to a 401k through your
                                employer, Globe Integrity typically recommends you
                                contribute to that account first, especially if
                                your employer offers some kind of matching.
                                Ultimately, which tax-advantaged vehicles you
                                leverage as part of your holistic financial plan
                                really depends on your goals, risk tolerance,
                                stage of life, and several other factors.
                              </li>
                            </ul>
                            Ultimately, we’ve seen Universal Life Insurance work
                            well for clients of all different types. If you’re
                            unsure whether Universal Life is right for you, check
                            out our website or give us a call. We can offer
                            personalized recommendations that are right for you.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            Why save funds with life insurance? Why bundle
                            protection and growth?
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Cash value is a powerful savings and investment tool
                            offered within a Permanent Life Insurance policy that
                            can help you achieve your financial goals. Cash value
                            life insurance can be used to generate tax-efficient
                            growth, save for retirement, generate income, and
                            provide liquidity for future needs. Additionally, cash
                            value policies are an important aspect of succession
                            planning and offer protection against creditors and
                            legal cases in most states. With its many benefits,
                            cash value life insurance is an excellent choice for
                            those seeking long-term financial security.
                            <br />
                            Learn more about building wealth with life insurance
                            in our Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scrollspyHeading7" className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">Grow Wealth</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-5" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What Is Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance is a type of Permanent Life
                            Insurance that provides flexible premiums and the
                            ability to adjust the death benefit. It combines the
                            features of Term Life Insurance, which provides
                            protection for a specific period of time, with the
                            savings element of Permanent Life Insurance, which
                            builds cash value over time. There are several types
                            of Universal Life Insurance, a couple of which we can
                            dive deeper on are:
                            <ul className="faqList">
                              <li>
                                <Link href="">
                                  Indexed Universal Life Insurance
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  Variable Universal Life Insurance
                                </Link>
                              </li>
                            </ul>
                            See the individual FAQs for each type to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is Variable Universal Life (VUL) Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            A type of Permanent Life Insurance that provides both
                            a death benefit and a savings or investment component.
                            It is similar to Indexed Universal Life Insurance but
                            with the added feature of allowing policyholders to
                            allocate their cash value into different investment
                            options, such as mutual funds. One of the main
                            advantages of VUL insurance is that it allows
                            policyholders to participate in the potential growth
                            of the stock market or other securities, and also
                            allows them to have more control over the investment
                            options of their cash value. Visit our VUL product
                            page to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            What are the advantages of Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance offers several advantages
                            over Term Life Insurance, including:
                            <ul className="faqList">
                              <li>
                                <strong>Flexible</strong>{" "}
                                <Link href="">Premiums</Link>: Unlike other types
                                of life insurance, Universal Life Insurance allows
                                policyholders to adjust the premium amount and
                                payment frequency based on their changing
                                financial situation.
                              </li>
                              <li>
                                <Link href="">Cash Value</Link>{" "}
                                <strong>Accumulation</strong> : Universal Life
                                Insurance policies have a cash value component
                                that grows over time, based on interest rates and
                                investment returns.
                              </li>
                              <li>
                                <strong>Tax Benefits</strong>: The cash value of a
                                Universal Life Insurance policy grows
                                tax-deferred, meaning that policyholders do not
                                pay taxes on the earnings until they withdraw
                                them.
                              </li>
                              <li>
                                <strong>Permanent Coverage</strong>: Universal
                                Life Insurance provides coverage for the insured's
                                entire lifetime*, as long as premiums are paid.
                              </li>
                              <li>
                                <strong>Customizable Death Benefit</strong>:
                                Universal Life Insurance policies typically allow
                                policyholders to adjust the death benefit amount
                                over time. This can be useful for those who want
                                to increase or decrease their coverage based on
                                changes in their financial situation.
                              </li>
                            </ul>
                            *Policies typically mature, meaning they pay out the
                            benefit amount, if the policyholder lives to be 120 or
                            121 years old (could be shorter, depending on the
                            policy). <br />
                            Learn more about how Universal Life Insurance compares
                            to other insurance and wealth building vehicles in our
                            Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            When should I consider Universal Life Insurance as
                            part of my insurance plan?
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are several factors that can help determine
                            whether Universal Life Insurance is right for you at
                            this stage of your life, but here are the high-level
                            criteria to help you determine if this tool is right
                            for you:
                            <ul className="faqList">
                              <li>
                                <strong>Are you looking for a</strong>:{" "}
                                <Link href=""> death benefit? </Link> First and
                                foremost, Globe Integrity only recommends Universal Life
                                Insurance to those looking for some form of
                                coverage in the event of their death. If you’re
                                only considering Universal Life for its cash value
                                savings component then it’s probably not the best
                                option for you.
                              </li>
                              <li>
                                <strong>
                                  Do you have sufficient free-cash flow?
                                </strong>{" "}
                                Because Universal Life Insurance has higher{" "}
                                <Link href="">premiums</Link> than{" "}
                                <Link href="">Term Life Insurance</Link>, Globe Integrity
                                typically only recommends Universal Life Insurance
                                to those who can afford the higher monthly
                                payments. If money is tight, or your income is
                                highly variable then there are other ways to get
                                coverage that might work better for you.
                              </li>
                              <li>
                                <strong>
                                  Does it make sense for you at this stage of
                                  life?
                                </strong>
                                : There are several tax-advantaged accounts that
                                are great tools for building wealth. Your life
                                situation typically determines which of these
                                accounts you can leverage. For example, if you are
                                able to contribute to a 401k through your
                                employer, Globe Integrity typically recommends you
                                contribute to that account first, especially if
                                your employer offers some kind of matching.
                                Ultimately, which tax-advantaged vehicles you
                                leverage as part of your holistic financial plan
                                really depends on your goals, risk tolerance,
                                stage of life, and several other factors.
                              </li>
                            </ul>
                            Ultimately, we’ve seen Universal Life Insurance work
                            well for clients of all different types. If you’re
                            unsure whether Universal Life is right for you, check
                            out our website or give us a call. We can offer
                            personalized recommendations that are right for you.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            Why save funds with life insurance? Why bundle
                            protection and growth?
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Cash value is a powerful savings and investment tool
                            offered within a Permanent Life Insurance policy that
                            can help you achieve your financial goals. Cash value
                            life insurance can be used to generate tax-efficient
                            growth, save for retirement, generate income, and
                            provide liquidity for future needs. Additionally, cash
                            value policies are an important aspect of succession
                            planning and offer protection against creditors and
                            legal cases in most states. With its many benefits,
                            cash value life insurance is an excellent choice for
                            those seeking long-term financial security.
                            <br />
                            Learn more about building wealth with life insurance
                            in our Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scrollspyHeading8" className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">Access Funds</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-5" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What Is Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance is a type of Permanent Life
                            Insurance that provides flexible premiums and the
                            ability to adjust the death benefit. It combines the
                            features of Term Life Insurance, which provides
                            protection for a specific period of time, with the
                            savings element of Permanent Life Insurance, which
                            builds cash value over time. There are several types
                            of Universal Life Insurance, a couple of which we can
                            dive deeper on are:
                            <ul className="faqList">
                              <li>
                                <Link href="">
                                  Indexed Universal Life Insurance
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  Variable Universal Life Insurance
                                </Link>
                              </li>
                            </ul>
                            See the individual FAQs for each type to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is Variable Universal Life (VUL) Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            A type of Permanent Life Insurance that provides both
                            a death benefit and a savings or investment component.
                            It is similar to Indexed Universal Life Insurance but
                            with the added feature of allowing policyholders to
                            allocate their cash value into different investment
                            options, such as mutual funds. One of the main
                            advantages of VUL insurance is that it allows
                            policyholders to participate in the potential growth
                            of the stock market or other securities, and also
                            allows them to have more control over the investment
                            options of their cash value. Visit our VUL product
                            page to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            What are the advantages of Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance offers several advantages
                            over Term Life Insurance, including:
                            <ul className="faqList">
                              <li>
                                <strong>Flexible</strong>{" "}
                                <Link href="">Premiums</Link>: Unlike other types
                                of life insurance, Universal Life Insurance allows
                                policyholders to adjust the premium amount and
                                payment frequency based on their changing
                                financial situation.
                              </li>
                              <li>
                                <Link href="">Cash Value</Link>{" "}
                                <strong>Accumulation</strong> : Universal Life
                                Insurance policies have a cash value component
                                that grows over time, based on interest rates and
                                investment returns.
                              </li>
                              <li>
                                <strong>Tax Benefits</strong>: The cash value of a
                                Universal Life Insurance policy grows
                                tax-deferred, meaning that policyholders do not
                                pay taxes on the earnings until they withdraw
                                them.
                              </li>
                              <li>
                                <strong>Permanent Coverage</strong>: Universal
                                Life Insurance provides coverage for the insured's
                                entire lifetime*, as long as premiums are paid.
                              </li>
                              <li>
                                <strong>Customizable Death Benefit</strong>:
                                Universal Life Insurance policies typically allow
                                policyholders to adjust the death benefit amount
                                over time. This can be useful for those who want
                                to increase or decrease their coverage based on
                                changes in their financial situation.
                              </li>
                            </ul>
                            *Policies typically mature, meaning they pay out the
                            benefit amount, if the policyholder lives to be 120 or
                            121 years old (could be shorter, depending on the
                            policy). <br />
                            Learn more about how Universal Life Insurance compares
                            to other insurance and wealth building vehicles in our
                            Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            When should I consider Universal Life Insurance as
                            part of my insurance plan?
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are several factors that can help determine
                            whether Universal Life Insurance is right for you at
                            this stage of your life, but here are the high-level
                            criteria to help you determine if this tool is right
                            for you:
                            <ul className="faqList">
                              <li>
                                <strong>Are you looking for a</strong>:{" "}
                                <Link href=""> death benefit? </Link> First and
                                foremost, Globe Integrity only recommends Universal Life
                                Insurance to those looking for some form of
                                coverage in the event of their death. If you’re
                                only considering Universal Life for its cash value
                                savings component then it’s probably not the best
                                option for you.
                              </li>
                              <li>
                                <strong>
                                  Do you have sufficient free-cash flow?
                                </strong>{" "}
                                Because Universal Life Insurance has higher{" "}
                                <Link href="">premiums</Link> than{" "}
                                <Link href="">Term Life Insurance</Link>, Globe Integrity
                                typically only recommends Universal Life Insurance
                                to those who can afford the higher monthly
                                payments. If money is tight, or your income is
                                highly variable then there are other ways to get
                                coverage that might work better for you.
                              </li>
                              <li>
                                <strong>
                                  Does it make sense for you at this stage of
                                  life?
                                </strong>
                                : There are several tax-advantaged accounts that
                                are great tools for building wealth. Your life
                                situation typically determines which of these
                                accounts you can leverage. For example, if you are
                                able to contribute to a 401k through your
                                employer, Globe Integrity typically recommends you
                                contribute to that account first, especially if
                                your employer offers some kind of matching.
                                Ultimately, which tax-advantaged vehicles you
                                leverage as part of your holistic financial plan
                                really depends on your goals, risk tolerance,
                                stage of life, and several other factors.
                              </li>
                            </ul>
                            Ultimately, we’ve seen Universal Life Insurance work
                            well for clients of all different types. If you’re
                            unsure whether Universal Life is right for you, check
                            out our website or give us a call. We can offer
                            personalized recommendations that are right for you.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            Why save funds with life insurance? Why bundle
                            protection and growth?
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Cash value is a powerful savings and investment tool
                            offered within a Permanent Life Insurance policy that
                            can help you achieve your financial goals. Cash value
                            life insurance can be used to generate tax-efficient
                            growth, save for retirement, generate income, and
                            provide liquidity for future needs. Additionally, cash
                            value policies are an important aspect of succession
                            planning and offer protection against creditors and
                            legal cases in most states. With its many benefits,
                            cash value life insurance is an excellent choice for
                            those seeking long-term financial security.
                            <br />
                            Learn more about building wealth with life insurance
                            in our Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scrollspyHeading9" className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">Leverage Protection</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-5" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What Is Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance is a type of Permanent Life
                            Insurance that provides flexible premiums and the
                            ability to adjust the death benefit. It combines the
                            features of Term Life Insurance, which provides
                            protection for a specific period of time, with the
                            savings element of Permanent Life Insurance, which
                            builds cash value over time. There are several types
                            of Universal Life Insurance, a couple of which we can
                            dive deeper on are:
                            <ul className="faqList">
                              <li>
                                <Link href="">
                                  Indexed Universal Life Insurance
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  Variable Universal Life Insurance
                                </Link>
                              </li>
                            </ul>
                            See the individual FAQs for each type to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is Variable Universal Life (VUL) Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            A type of Permanent Life Insurance that provides both
                            a death benefit and a savings or investment component.
                            It is similar to Indexed Universal Life Insurance but
                            with the added feature of allowing policyholders to
                            allocate their cash value into different investment
                            options, such as mutual funds. One of the main
                            advantages of VUL insurance is that it allows
                            policyholders to participate in the potential growth
                            of the stock market or other securities, and also
                            allows them to have more control over the investment
                            options of their cash value. Visit our VUL product
                            page to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            What are the advantages of Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance offers several advantages
                            over Term Life Insurance, including:
                            <ul className="faqList">
                              <li>
                                <strong>Flexible</strong>{" "}
                                <Link href="">Premiums</Link>: Unlike other types
                                of life insurance, Universal Life Insurance allows
                                policyholders to adjust the premium amount and
                                payment frequency based on their changing
                                financial situation.
                              </li>
                              <li>
                                <Link href="">Cash Value</Link>{" "}
                                <strong>Accumulation</strong> : Universal Life
                                Insurance policies have a cash value component
                                that grows over time, based on interest rates and
                                investment returns.
                              </li>
                              <li>
                                <strong>Tax Benefits</strong>: The cash value of a
                                Universal Life Insurance policy grows
                                tax-deferred, meaning that policyholders do not
                                pay taxes on the earnings until they withdraw
                                them.
                              </li>
                              <li>
                                <strong>Permanent Coverage</strong>: Universal
                                Life Insurance provides coverage for the insured's
                                entire lifetime*, as long as premiums are paid.
                              </li>
                              <li>
                                <strong>Customizable Death Benefit</strong>:
                                Universal Life Insurance policies typically allow
                                policyholders to adjust the death benefit amount
                                over time. This can be useful for those who want
                                to increase or decrease their coverage based on
                                changes in their financial situation.
                              </li>
                            </ul>
                            *Policies typically mature, meaning they pay out the
                            benefit amount, if the policyholder lives to be 120 or
                            121 years old (could be shorter, depending on the
                            policy). <br />
                            Learn more about how Universal Life Insurance compares
                            to other insurance and wealth building vehicles in our
                            Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            When should I consider Universal Life Insurance as
                            part of my insurance plan?
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are several factors that can help determine
                            whether Universal Life Insurance is right for you at
                            this stage of your life, but here are the high-level
                            criteria to help you determine if this tool is right
                            for you:
                            <ul className="faqList">
                              <li>
                                <strong>Are you looking for a</strong>:{" "}
                                <Link href=""> death benefit? </Link> First and
                                foremost, Globe Integrity only recommends Universal Life
                                Insurance to those looking for some form of
                                coverage in the event of their death. If you’re
                                only considering Universal Life for its cash value
                                savings component then it’s probably not the best
                                option for you.
                              </li>
                              <li>
                                <strong>
                                  Do you have sufficient free-cash flow?
                                </strong>{" "}
                                Because Universal Life Insurance has higher{" "}
                                <Link href="">premiums</Link> than{" "}
                                <Link href="">Term Life Insurance</Link>, Globe Integrity
                                typically only recommends Universal Life Insurance
                                to those who can afford the higher monthly
                                payments. If money is tight, or your income is
                                highly variable then there are other ways to get
                                coverage that might work better for you.
                              </li>
                              <li>
                                <strong>
                                  Does it make sense for you at this stage of
                                  life?
                                </strong>
                                : There are several tax-advantaged accounts that
                                are great tools for building wealth. Your life
                                situation typically determines which of these
                                accounts you can leverage. For example, if you are
                                able to contribute to a 401k through your
                                employer, Globe Integrity typically recommends you
                                contribute to that account first, especially if
                                your employer offers some kind of matching.
                                Ultimately, which tax-advantaged vehicles you
                                leverage as part of your holistic financial plan
                                really depends on your goals, risk tolerance,
                                stage of life, and several other factors.
                              </li>
                            </ul>
                            Ultimately, we’ve seen Universal Life Insurance work
                            well for clients of all different types. If you’re
                            unsure whether Universal Life is right for you, check
                            out our website or give us a call. We can offer
                            personalized recommendations that are right for you.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            Why save funds with life insurance? Why bundle
                            protection and growth?
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Cash value is a powerful savings and investment tool
                            offered within a Permanent Life Insurance policy that
                            can help you achieve your financial goals. Cash value
                            life insurance can be used to generate tax-efficient
                            growth, save for retirement, generate income, and
                            provide liquidity for future needs. Additionally, cash
                            value policies are an important aspect of succession
                            planning and offer protection against creditors and
                            legal cases in most states. With its many benefits,
                            cash value life insurance is an excellent choice for
                            those seeking long-term financial security.
                            <br />
                            Learn more about building wealth with life insurance
                            in our Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="scrollspyHeading10" className="mainFaqItems">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-lg-4">
                    <h4 className="heading28">Expand Protection</h4>
                  </div>
                  <div className="col-lg-8">
                    <div className="accordion mb-5" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What Is Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance is a type of Permanent Life
                            Insurance that provides flexible premiums and the
                            ability to adjust the death benefit. It combines the
                            features of Term Life Insurance, which provides
                            protection for a specific period of time, with the
                            savings element of Permanent Life Insurance, which
                            builds cash value over time. There are several types
                            of Universal Life Insurance, a couple of which we can
                            dive deeper on are:
                            <ul className="faqList">
                              <li>
                                <Link href="">
                                  Indexed Universal Life Insurance
                                </Link>
                              </li>
                              <li>
                                <Link href="">
                                  Variable Universal Life Insurance
                                </Link>
                              </li>
                            </ul>
                            See the individual FAQs for each type to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What is Variable Universal Life (VUL) Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            A type of Permanent Life Insurance that provides both
                            a death benefit and a savings or investment component.
                            It is similar to Indexed Universal Life Insurance but
                            with the added feature of allowing policyholders to
                            allocate their cash value into different investment
                            options, such as mutual funds. One of the main
                            advantages of VUL insurance is that it allows
                            policyholders to participate in the potential growth
                            of the stock market or other securities, and also
                            allows them to have more control over the investment
                            options of their cash value. Visit our VUL product
                            page to learn more.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                          >
                            What are the advantages of Universal Life Insurance?
                          </button>
                        </h2>
                        <div
                          id="collapse4"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Universal Life Insurance offers several advantages
                            over Term Life Insurance, including:
                            <ul className="faqList">
                              <li>
                                <strong>Flexible</strong>{" "}
                                <Link href="">Premiums</Link>: Unlike other types
                                of life insurance, Universal Life Insurance allows
                                policyholders to adjust the premium amount and
                                payment frequency based on their changing
                                financial situation.
                              </li>
                              <li>
                                <Link href="">Cash Value</Link>{" "}
                                <strong>Accumulation</strong> : Universal Life
                                Insurance policies have a cash value component
                                that grows over time, based on interest rates and
                                investment returns.
                              </li>
                              <li>
                                <strong>Tax Benefits</strong>: The cash value of a
                                Universal Life Insurance policy grows
                                tax-deferred, meaning that policyholders do not
                                pay taxes on the earnings until they withdraw
                                them.
                              </li>
                              <li>
                                <strong>Permanent Coverage</strong>: Universal
                                Life Insurance provides coverage for the insured's
                                entire lifetime*, as long as premiums are paid.
                              </li>
                              <li>
                                <strong>Customizable Death Benefit</strong>:
                                Universal Life Insurance policies typically allow
                                policyholders to adjust the death benefit amount
                                over time. This can be useful for those who want
                                to increase or decrease their coverage based on
                                changes in their financial situation.
                              </li>
                            </ul>
                            *Policies typically mature, meaning they pay out the
                            benefit amount, if the policyholder lives to be 120 or
                            121 years old (could be shorter, depending on the
                            policy). <br />
                            Learn more about how Universal Life Insurance compares
                            to other insurance and wealth building vehicles in our
                            Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                          >
                            When should I consider Universal Life Insurance as
                            part of my insurance plan?
                          </button>
                        </h2>
                        <div
                          id="collapse6"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            There are several factors that can help determine
                            whether Universal Life Insurance is right for you at
                            this stage of your life, but here are the high-level
                            criteria to help you determine if this tool is right
                            for you:
                            <ul className="faqList">
                              <li>
                                <strong>Are you looking for a</strong>:{" "}
                                <Link href=""> death benefit? </Link> First and
                                foremost, Globe Integrity only recommends Universal Life
                                Insurance to those looking for some form of
                                coverage in the event of their death. If you’re
                                only considering Universal Life for its cash value
                                savings component then it’s probably not the best
                                option for you.
                              </li>
                              <li>
                                <strong>
                                  Do you have sufficient free-cash flow?
                                </strong>{" "}
                                Because Universal Life Insurance has higher{" "}
                                <Link href="">premiums</Link> than{" "}
                                <Link href="">Term Life Insurance</Link>, Globe Integrity
                                typically only recommends Universal Life Insurance
                                to those who can afford the higher monthly
                                payments. If money is tight, or your income is
                                highly variable then there are other ways to get
                                coverage that might work better for you.
                              </li>
                              <li>
                                <strong>
                                  Does it make sense for you at this stage of
                                  life?
                                </strong>
                                : There are several tax-advantaged accounts that
                                are great tools for building wealth. Your life
                                situation typically determines which of these
                                accounts you can leverage. For example, if you are
                                able to contribute to a 401k through your
                                employer, Globe Integrity typically recommends you
                                contribute to that account first, especially if
                                your employer offers some kind of matching.
                                Ultimately, which tax-advantaged vehicles you
                                leverage as part of your holistic financial plan
                                really depends on your goals, risk tolerance,
                                stage of life, and several other factors.
                              </li>
                            </ul>
                            Ultimately, we’ve seen Universal Life Insurance work
                            well for clients of all different types. If you’re
                            unsure whether Universal Life is right for you, check
                            out our website or give us a call. We can offer
                            personalized recommendations that are right for you.
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                          >
                            Why save funds with life insurance? Why bundle
                            protection and growth?
                          </button>
                        </h2>
                        <div
                          id="collapse5"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Cash value is a powerful savings and investment tool
                            offered within a Permanent Life Insurance policy that
                            can help you achieve your financial goals. Cash value
                            life insurance can be used to generate tax-efficient
                            growth, save for retirement, generate income, and
                            provide liquidity for future needs. Additionally, cash
                            value policies are an important aspect of succession
                            planning and offer protection against creditors and
                            legal cases in most states. With its many benefits,
                            cash value life insurance is an excellent choice for
                            those seeking long-term financial security.
                            <br />
                            Learn more about building wealth with life insurance
                            in our Guide to Life Insurance.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="moreQueSection">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="row align-items-center text-center">
                <div className="col-md-12">
                  <h1 className="heading54">
                    Ready to get your estimate?
                  </h1>
                  <p className="sub24 mb-4">
                    A personalized plan for you.
                  </p>
                  <button type="button" className="commonBtnBig text-uppercase">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
