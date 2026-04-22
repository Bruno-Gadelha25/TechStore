import { 
  Smartphone, 
  Laptop, 
  Headphones, 
  ShieldCheck, 
  Truck, 
  MessageCircle, 
  Star, 
  MapPin, 
  Cpu, 
  MousePointer2,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

// --- Types ---
interface Product {
  id: string;
  name: string;
  price: string;
  category: "Smartphone" | "Acessório" | "Computador";
  image: string;
  tag?: string;
}

// --- Mock Data ---
const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    price: "R$ 8.490",
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&q=80&w=800",
    tag: "Novo"
  },
  {
    id: "2",
    name: "MacBook Pro M3",
    price: "R$ 14.200",
    category: "Computador",
    image: "https://images.unsplash.com/photo-1660851410191-f8a4f913f41a?auto=format&fit=crop&q=80&w=800",
    tag: "Performance"
  },
  {
    id: "3",
    name: "AirPods Max Black",
    price: "R$ 4.800",
    category: "Acessório",
    image: "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "4",
    name: "Samsung S21 5G",
    price: "R$ 7.200",
    category: "Smartphone",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800",
    tag: "IA"
  },
  {
    id: "5",
    name: "Mouse Gamer Pro",
    price: "R$ 450",
    category: "Acessório",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "6",
    name: "iPad Air M2",
    price: "R$ 5.900",
    category: "Computador",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800"
  }
];

const testimonials = [
  {
    name: "Ricardo Santos",
    role: "Tech Enthusiast",
    content: "Atendimento impecável e produtos de extrema qualidade. Recomendo muito!",
    rating: 5
  },
  {
    name: "Ana Oliveira",
    role: "Designer",
    content: "Meu MacBook chegou super rápido e muito bem embalado. A TechStore é diferenciada.",
    rating: 5
  },
  {
    name: "Juliana Mendes",
    role: "Gamer",
    content: "O melhor preço que encontrei para periféricos de alto nível. Ótima garantia.",
    rating: 5
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-brand-bg/80 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
            <Cpu className="text-brand-bg w-5 h-5" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter">TECH<span className="text-brand-accent">STORE</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#produtos" className="text-sm font-medium hover:text-brand-accent transition-colors">Produtos</a>
          <a href="#diferenciais" className="text-sm font-medium hover:text-brand-accent transition-colors">Diferenciais</a>
          <a href="#depoimentos" className="text-sm font-medium hover:text-brand-accent transition-colors">Depoimentos</a>
          <a href="#contato" className="text-sm font-medium hover:text-brand-accent transition-colors">Contato</a>
        </div>

        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-brand-accent text-brand-bg px-6 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all hover:scale-105"
        >
          <MessageCircle className="w-4 h-4" />
          ENTRAR EM CONTATO
        </a>

        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0B0B0B] border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
          >
            <a href="#produtos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Produtos</a>
            <a href="#diferenciais" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Diferenciais</a>
            <a href="#depoimentos" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Depoimentos</a>
            <a href="#contato" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Contato</a>
            <a 
              href="https://wa.me/5500000000000" 
              className="flex items-center justify-center gap-2 bg-[#00FFB2] text-black p-4 rounded-xl font-bold"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-brand-card rounded-xl overflow-hidden border border-white/5 hover:border-brand-accent/30 transition-all duration-500"
    >
      <div className="aspect-square relative overflow-hidden bg-white/5">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        {product.tag && (
          <span className="absolute top-4 left-4 bg-brand-accent/20 text-brand-accent text-[10px] font-bold px-2 py-1 border border-brand-accent/30 rounded tracking-tighter uppercase">
            {product.tag}
          </span>
        )}
      </div>
      <div className="p-6">
        <p className="text-brand-accent text-[10px] font-bold uppercase tracking-widest mb-1">{product.category}</p>
        <h3 className="text-lg font-bold mb-2">{product.name}</h3>
        <p className="text-2xl font-display font-black text-text-primary mb-4">{product.price}</p>
        <a 
          href={`https://wa.me/5500000000000?text=Olá! Gostaria de mais informações sobre o ${product.name}`}
          target="_blank"
          rel="noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 bg-brand-accent text-brand-bg py-3 rounded-lg font-bold hover:opacity-90 transition-colors"
        >
          <Smartphone className="w-4 h-4" />
          COMPRAR AGORA
        </a>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent opacity-5 blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#3A7BFF] opacity-5 blur-[100px] -z-10" />
        
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 border border-brand-accent/20 px-3 py-1 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-brand-accent tracking-widest uppercase">Novidades 2024</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tighter">
              TECNOLOGIA QUE <br />
              <span className="text-brand-accent">ACOMPANHA VOCÊ</span>
            </h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-lg mb-10 leading-relaxed font-medium">
              Os melhores eletrônicos com qualidade premium, garantia total e o melhor preço do mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#produtos" 
                className="bg-brand-accent text-brand-bg px-8 py-4 rounded-lg font-bold text-center hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-2xl shadow-brand-accent/20"
              >
                VER PRODUTOS
                <MousePointer2 className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/5500000000000" 
                className="bg-white/5 border border-white/10 text-text-primary px-8 py-4 rounded-lg font-bold text-center hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                FALAR NO WHATSAPP
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 p-2 shadow-2xl bg-[#1a1a1a]">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Tech Setup" 
                className="rounded-[2.5rem] w-full"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 p-6 bg-glass border-glass rounded-2xl">
                <div className="flex -space-x-2 mb-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1a1a1a] bg-[#1a1a1a] overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold leading-tight">
                  +1.5k Clientes satisfeitos<br />
                  <span className="text-[#00FFB2]">em todo o Brasil</span>
                </p>
              </div>
            </div>
            {/* Floating elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 p-6 bg-glass border-glass rounded-3xl z-20"
            >
              <Smartphone className="text-[#00FFB2] w-8 h-8 mb-2" />
              <div className="h-1 w-12 bg-white/20 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="produtos" className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl flex-1">
              <p className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Catálogo Premium</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase section-line">
                CATEGORIAS EM DESTAQUE
              </h2>
            </div>
            <div className="flex gap-4">
              <div className="px-6 py-2 rounded-full border border-white/5 bg-white/5 text-sm font-bold">Todos</div>
              <div className="px-6 py-2 rounded-full border border-white/5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer">Mobile</div>
              <div className="px-6 py-2 rounded-full border border-white/5 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer">Audio</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS SECTION */}
      <section id="diferenciais" className="py-24 bg-brand-card border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl font-bold uppercase section-line flex-1">POR QUE A TECHSTORE?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-brand-accent/10 rounded-lg flex items-center justify-center border border-brand-accent/20">
                <ShieldCheck className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1 uppercase tracking-tight">Qualidade Garantida</h3>
                <p className="text-text-secondary leading-relaxed text-xs">Trabalhamos apenas com produtos originais e marcas líderes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-brand-accent/10 rounded-lg flex items-center justify-center border border-brand-accent/20">
                <Truck className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1 uppercase tracking-tight">Envio Expresso</h3>
                <p className="text-text-secondary leading-relaxed text-xs">Processamos seu pedido no mesmo dia com segurança total.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 bg-brand-accent/10 rounded-lg flex items-center justify-center border border-brand-accent/20">
                <MessageCircle className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1 uppercase tracking-tight">Suporte 24/7</h3>
                <p className="text-text-secondary leading-relaxed text-xs">Atendimento humano e rápido via WhatsApp para suas dúvidas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="depoimentos" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4">Feedback VIP</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">EXPERIÊNCIA TECHSTORE</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testi, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-brand-card p-8 rounded-xl border border-white/5 border-l-2 border-l-brand-accent shadow-xl"
              >
                <div className="flex gap-1 mb-6 text-brand-accent">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm italic text-text-secondary mb-8 leading-relaxed">"{testi.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${i === 0 ? "1507003211169-0a1dd7228f2d" : i === 1 ? "1494790108377-be9c29b29330" : "1500648767791-00dcc994a43e"}?auto=format&fit=crop&q=80&w=150`} 
                      alt={testi.name}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{testi.name}</p>
                    <p className="text-xs text-text-secondary">{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-b from-brand-bg to-brand-card">
        <div className="container mx-auto px-6">
          <div className="bg-brand-accent rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent -z-0" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black text-brand-bg leading-none mb-8 uppercase tracking-tighter">
                PRONTO PARA <br /> EVOLUIR SEU SETUP?
              </h2>
              <p className="text-brand-bg/70 font-bold mb-12 max-w-xl mx-auto text-lg uppercase tracking-wide">
                Chame agora no WhatsApp e garanta um desconto especial na sua primeira compra.
              </p>
              <a 
                href="https://wa.me/5500000000000" 
                className="inline-flex items-center gap-4 bg-brand-bg text-text-primary px-12 py-6 rounded-lg font-black text-xl hover:scale-105 transition-transform"
              >
                FALAR COM ESPECIALISTA
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="py-24 bg-brand-bg border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8 uppercase">
              <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center">
                <Cpu className="text-brand-bg w-5 h-5 transition-transform group-hover:rotate-12" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter">TECH<span className="text-brand-accent">STORE</span></span>
            </div>
            <p className="text-text-secondary max-w-sm mb-12 leading-relaxed text-sm">
              Sua loja de confiança para os melhores gadgets e hardware premium. 
              Elevando o padrão tecnológico desde 2024.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-bg transition-colors cursor-pointer text-text-secondary">IN</div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-bg transition-colors cursor-pointer text-text-secondary">TW</div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-accent hover:text-brand-bg transition-colors cursor-pointer text-text-secondary">YT</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-[10px] text-text-secondary">Links Rápidos</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-accent transition-colors">Produtos</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Diferenciais</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Garantia</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-[10px] text-text-secondary">Contato</h4>
            <div className="flex gap-3 mb-4 items-center">
              <MapPin className="text-brand-accent w-4 h-4 shrink-0" />
              <p className="text-text-secondary text-sm">
                Av. Paulista, 1000 - São Paulo, SP
              </p>
            </div>
            <div className="flex gap-3 mb-4 items-center">
              <MessageCircle className="text-brand-accent w-4 h-4 shrink-0" />
              <p className="text-text-secondary text-sm">(11) 99999-8888</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-brand-accent font-bold text-sm">@</div>
              <p className="text-text-secondary text-sm">contato@techstore.com.br</p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-text-secondary font-bold uppercase tracking-widest">© 2024 TechStore - Todos os direitos reservados.</p>
          <div className="flex gap-8 text-[10px] text-text-secondary font-bold uppercase tracking-widest">
            <a href="#">Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
