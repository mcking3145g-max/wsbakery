const categories = [
  { name: "Celebration Cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=85" },
  { name: "Brownies", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85" },
  { name: "Pastries", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85" },
  { name: "Cookies & Breads", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85" },
];

const products = [
  { name: "Belgian Chocolate Cake", note: "Rich cocoa sponge · 500 g", price: "₹699", tag: "Bestseller", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=85" },
  { name: "Classic Fudge Brownie", note: "Dense, fudgy & chocolatey", price: "₹129", tag: "Eggless", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=85" },
  { name: "Fresh Fruit Cream Cake", note: "Light vanilla sponge · 500 g", price: "₹649", tag: "Fresh today", image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=85" },
  { name: "Butter Croissant", note: "Flaky, golden & freshly baked", price: "₹99", tag: "New", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=85" },
];

const whatsapp = "https://wa.me/919000000000?text=Hi%20WS%20Bakery%2C%20I%27d%20like%20to%20place%20an%20order.";

export default function Home() {
  return (
    <main>
      <div className="offer">Freshly baked today · Free delivery above ₹799</div>
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="WS Bakery home"><span>WS</span><small>BAKERY</small></a>
        <nav aria-label="Main navigation">
          <a href="#menu">Menu</a><a href="#story">Our Story</a><a href="#bestsellers">Bestsellers</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer">Order online <span>↗</span></a>
        <details className="mobile-menu"><summary aria-label="Open menu">☰</summary><div><a href="#menu">Menu</a><a href="#story">Our Story</a><a href="#bestsellers">Bestsellers</a><a href="#contact">Contact</a><a href={whatsapp}>Order online</a></div></details>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">HANDCRAFTED IN PUNE</p><h1>Joy, freshly<br/><em>baked.</em></h1><p className="intro">From celebration cakes to everyday treats, every WS bake is made fresh with honest ingredients and a generous spoonful of happiness.</p><div className="hero-actions"><a className="primary" href="#menu">Explore our menu</a><a className="text-link" href={whatsapp}>Order on WhatsApp <span>→</span></a></div><div className="trust"><span>★ 4.9</span><p>Loved by 2,000+ happy customers</p></div></div>
        <div className="hero-photo"><img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1400&q=90" alt="Chocolate celebration cake decorated with fresh berries"/><div className="baked-badge"><b>FRESH</b><span>BAKED DAILY</span></div><div className="photo-note"><span>Today&apos;s favourite</span><b>Belgian Chocolate Cake</b></div></div>
      </section>

      <section className="promise" id="story"><div><span>01</span><h3>Fresh ingredients</h3><p>Carefully selected for better flavour.</p></div><div><span>02</span><h3>Baked every day</h3><p>Small batches, never factory-made.</p></div><div><span>03</span><h3>Made with care</h3><p>By bakers who love their craft.</p></div></section>

      <section className="section categories" id="menu"><div className="section-head"><div><p className="eyebrow">FIND YOUR FAVOURITE</p><h2>A treat for every mood.</h2></div><a href="#bestsellers">View all products <span>→</span></a></div><div className="category-grid">{categories.map((item, i) => <a className="category-card" href="#bestsellers" key={item.name}><img src={item.image} alt={item.name}/><span>0{i+1}</span><h3>{item.name}</h3><b>Explore →</b></a>)}</div></section>

      <section className="story-band"><div className="story-photo"><img src="https://images.unsplash.com/photo-1556217477-d325251ece38?auto=format&fit=crop&w=1200&q=85" alt="Baker preparing fresh pastries"/></div><div className="story-copy"><p className="eyebrow">OUR LITTLE STORY</p><h2>Baked with heart,<br/>served with a smile.</h2><p>WS Bakery began with one oven, a family recipe book, and a simple idea: good baking should feel like home. We still make our treats in small batches, using familiar ingredients and no shortcuts.</p><blockquote>“We don&apos;t just make cakes. We help make the moments around them memorable.”</blockquote><a className="text-link light" href="#contact">Meet WS Bakery <span>→</span></a></div></section>

      <section className="section bestsellers" id="bestsellers"><div className="section-head"><div><p className="eyebrow">CUSTOMER FAVOURITES</p><h2>Our bestsellers.</h2></div><p>Freshly prepared · Limited batches daily</p></div><div className="product-grid">{products.map(product => <article className="product" key={product.name}><div className="product-img"><img src={product.image} alt={product.name}/><span>{product.tag}</span></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.note}</p></div><b>{product.price}</b></div><a href={`${whatsapp}%20Product%3A%20${encodeURIComponent(product.name)}`} target="_blank" rel="noreferrer">Order now <span>＋</span></a></article>)}</div></section>

      <section className="celebrate"><div><p className="eyebrow">MADE FOR YOUR MOMENTS</p><h2>Celebrating something special?</h2><p>Custom flavours, personal messages, and beautiful designs—made just for your day. Order 24–48 hours in advance.</p><a className="primary cream" href={whatsapp}>Plan your custom cake</a></div><div className="cake-stack"><img src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=1100&q=90" alt="Elegant custom celebration cake"/></div></section>

      <section className="reviews section"><p className="eyebrow">SWEET WORDS</p><h2>Made their day.</h2><div className="review-grid"><blockquote><div>★★★★★</div><p>“The cake looked beautiful and tasted even better. Everyone at the party asked where it was from!”</p><footer>— Riya M. <span>Birthday order</span></footer></blockquote><blockquote><div>★★★★★</div><p>“Fresh, balanced and not overly sweet. The brownies disappeared within minutes.”</p><footer>— Aditya K. <span>Weekend treats</span></footer></blockquote><blockquote><div>★★★★★</div><p>“Easy ordering, friendly service and perfectly on-time delivery. WS is now our family bakery.”</p><footer>— Neha S. <span>Anniversary cake</span></footer></blockquote></div></section>

      <section className="visit" id="contact"><div><p className="eyebrow">COME SAY HELLO</p><h2>Your neighbourhood bakery.</h2><p>Visit us for a warm slice, pick up your celebration order, or message us for delivery.</p></div><div className="visit-info"><div><small>ADDRESS</small><p>WS Bakery, Main Road<br/>Pune, Maharashtra 411001</p></div><div><small>OPEN DAILY</small><p>8:00 AM – 10:00 PM</p></div><div><small>CALL / WHATSAPP</small><p>+91 90000 00000</p></div><a href={whatsapp}>Get directions & order <span>↗</span></a></div></section>

      <footer><div className="footer-brand"><a className="brand inverse" href="#top"><span>WS</span><small>BAKERY</small></a><p>Good days begin with something freshly baked.</p></div><div><h4>Explore</h4><a href="#menu">Our menu</a><a href="#story">Our story</a><a href="#bestsellers">Custom cakes</a></div><div><h4>Help</h4><a href="#contact">Contact us</a><a href="#contact">Delivery</a><a href="#contact">Allergens</a></div><div><h4>Follow along</h4><a href="#">Instagram ↗</a><a href={whatsapp}>WhatsApp ↗</a></div><div className="copyright"><span>© 2026 WS Bakery. All rights reserved.</span><span>Made fresh in Pune.</span></div></footer>
    </main>
  );
}
