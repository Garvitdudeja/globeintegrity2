import Image from "next/image";
import Link from "next/link";

const Hero = (props)=>{
    return(            <section className="universe">
                    <div className='container-fluid'>
                        <div className='row align-items-center'>
                            <div className="col-12 col-md-6 orderTwo">
                                <div className='universeCard'>
                                <h1 className='heading54'>{props.heading}</h1>
                                <p className='sub24 mb-4'>{props.description}.</p>
                                <Link href="https://quotes.globeintegrity.com/"><button type='button' className='commonBtnBig'>{props?.button}</button></Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 orderOne">
                                <div className='productImgOuter text-end'>
                                    <Image src={props?.image} alt='image' className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)
}

export default Hero;