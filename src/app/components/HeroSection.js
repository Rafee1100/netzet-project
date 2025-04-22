'use client';
import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={`container d-flex flex-column flex-lg-row align-items-center justify-content-between ${styles.heroSection}`}>
      <div className="text-start text-area">
        <h1 className={`fw-bold mb-3 ${styles.titleText}`}>
          Want to Turn Social Media Into a <br /> Profitable Career?
        </h1>
        <h2 className={` fw-bold mb-4 ${styles.gradientText}`}>Discover your way to success with Fametonic:</h2>
        <ul className="list-unstyled fs-5 mb-4">
          <li>✨ Start growing your influence right away—no waiting required!</li>
          <li>✨ Create viral TikToks and Reels step by step with easy-to-follow lessons</li>
          <li>✨ Use a Personal AI Worker to boost your content</li>
          <li>✨ Learn from expert-led courses designed for aspiring influencers</li>
        </ul>
        <div className={`${styles.buttonArea}`}>
        <button className={`btn btn-danger btn-lg ${styles.glowBtn}`}>GET STARTED ➤</button>
        </div>
        <div className={`${styles.footerArea}`}>
        <p className="mt-4 small">1-minute quiz for personalized insights</p>

        <p className="mt-4 small">
        
          By clicking &quot;Get Started&quot;., you agree with Terms and Conditions, Privacy Policy, Subscription Terms
        </p>
        <p className="small">Fametonic 2025 © All Rights Reserved.</p>
        </div>
      </div>

      <div className=" mt-5 mt-lg-0 text-center">
        <Image
          src="/PHONE.png"
          alt="App UI"
          width={666}
          height={679}
          className=""
        />
      </div>
    </section>
  );
}
