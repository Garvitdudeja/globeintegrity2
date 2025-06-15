import React from 'react'

const FAQsdata = [{
    question: "How much can I expect to pay for your products and services?",
    answer: "Our pricing for insurance and fees for investing are straightforward, and we'll always be upfront about them. What you pay monthly (or yearly) for our insurance options is determined by things like the amount of coverage you need and your age. And depending on the type of investment account (e.g. brokerage, advisory or private client) that works best for you, you'll pay a quarterly fee based on the value of the assets in your account.",
},{
    question: "How can a financial advisor help me?",
    answer: "Our advisors will look at your financial big picture. They'll think of all the what-ifs so you don't have to and guide you through life events big and small, like paying for college, buying a house, getting married, having a baby, adopting a child, retiring or inheriting assets. Get a feel for what it's like to.",
},{
    question: "How is Globe Integrity different from others?",
    answer: "We believe in putting you first and planning for today and tomorrow. Some companies only focus on investments to grow your money. Others just on insurance to protect you against risk. A financial plan from Northwestern Mutual combines time-tested strategies designed for growth and protection, personalized to you. Our advisors will look at where you are now, and where you want to go, tailoring your plan from a range of financial options designed to reinforce each other to get you there. That way, you'll have the confidence to live the way you want now, and down the road.",
},{
    question: "What products and services does Globe Integrity offer?",
    answer: "With us, you'll have access to more financial options designed to reinforce each other so your plan can work its hardest for you, including.",
},{
    question: "What is a financial plan, exactly?",
    answer: "A financial plan helps you make the most of what you have, no matter how much you have, so you can live the life you've always wanted. It takes into account all of your goals and shows you what it'll take to get there, the progress you've already made, any gaps you might have, and opportunities we find to help you reach your goals even faster.",
},
,{
    question: "What action is Globe Integrity taking to promote diversity and inclusion?",
    answer: "We're dedicated to fostering an environment where our employees, advisors, clients, and communities feel recognized and respected. Through our 15-year diversity and inclusion roadmap, we are taking clear steps to support of our commitments, including things like increasing the diversity of our workforce, accelerating the advancement of women, and taking on critical issues in our communities.",
}]

const FAQ = () => {
  return (
    <div>
        <h4 className='darkBlueText text-center'>Intelligently Asked <span className='lightBlueText'>Questions</span></h4>
      {FAQsdata.map((item, index) => (
        <div key={index} className="mb-4">
          <h5 className="fw-bold">{item.question}</h5>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default FAQ