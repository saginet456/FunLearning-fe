import React from 'react';
import HeroImg from './Hero.jpg';

export default function IntroPage() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={HeroImg} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-right items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">לימודים בכיף
                    </h1>
                    <p className="mb-8 leading-relaxed">ללמוד בכיף ובמהירות מהבית בצורה אינטרקטיבית ומהנה</p>
                </div>
            </div>
        </section>
    )
}