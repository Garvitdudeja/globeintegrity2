import React from 'react'

const Calculator = () => {
    return (
        <div>
            <h4 className='darkBlueText text-center'>Personalized life insurance designed to grow your money and <span className='lightBlueText'> protect the people you love.</span> </h4>
            <p className='darkBlueText text-center'>You&apos;ve got options. We help you find them.</p>
            <form>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <label>Age</label>
                            <input type='number'></input>
                            <label>Zip Code</label>
                            <input type='text'></input>
                            <label>What are your financial goals?</label>
                            <button>Grow</button>
                        </div>
                        <div class="col">
                            <label>Monthly contribution budget</label>
                            
                            <label>How would you describe your risk tolerance?</label>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default Calculator