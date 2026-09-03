import Link from "next/link";

type Props = {
  title?: string;
  desc?: string;
  ctaText?: string;
  ctaLink?: string;
  bgImage?: string;
  overlay?: string;
};

export default function HomeBanner({
  title = "State Side Auto Ship",
  desc = "We provide safe, reliable, and professional vehicle transportation services across the country. Our goal is to make every shipment simple, secure, and stress-free.",
  ctaText = "Get a Free Quote →",
  ctaLink = "/contact-us",
  bgImage = "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1600&q=80",
  overlay = "rgba(6,45,87,0.82)",
}: Props) {
  return (
    <section
      className="ss-banner"
      style={{
        backgroundImage: `linear-gradient(${overlay}, ${overlay}), url(${bgImage})`,
      }}
    >
      <div className="ss-inner">
        <h1>{title}</h1>
        <p>{desc}</p>
        <Link href={ctaLink} className="ss-cta">
          {ctaText}
        </Link>
      </div>

      <style>{`
        .ss-banner {
          color: #fff;
          padding: 100px 20px;
          text-align: center;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }
        .ss-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .ss-inner h1 {
          font-size: 55px;
          margin: 0 0 20px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.5px;
        }
        .ss-inner p {
          max-width: 700px;
          margin: 0 auto 30px;
          font-size: 18px;
          line-height: 1.7;
          color: #e5e5e5;
        }
        .ss-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #d60000;
          color: #fff;
          padding: 14px 28px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        }
        .ss-cta:hover {
          background: #b80000;
          transform: translateY(-2px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.35);
        }
        @media (max-width: 768px) {
          .ss-banner { padding: 70px 20px; }
          .ss-inner h1 { font-size: 32px; }
          .ss-inner p { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}