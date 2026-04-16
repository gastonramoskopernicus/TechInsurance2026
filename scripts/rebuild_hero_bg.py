import os
import re

def main():
    print("Inyectando atmósfera espacial sutil (Estrellas + Halo) en el Hero...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))
    
    page_path = os.path.join(base_dir, 'page.tsx')
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # The pattern matches the background divs before the container
        # Currently we have:
        backgrounds_regex = r'\{\/\* Cosmic Deep Space Background Overlay \*\/}.*?(?=<div className="container mx-auto)'
        
        new_backgrounds = '''{/* Deep Space Atmosphere Base */}
        <div className="absolute inset-0 z-0 bg-[#020104]" />
        
        {/* Subtle CSS Starfield Parallax Layers */}
        <div className="absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(255, 255, 255, 0.8) 1px, transparent 1px), radial-gradient(circle at 85% 30%, rgba(255, 255, 255, 0.6) 1px, transparent 1px), radial-gradient(circle at 50% 80%, rgba(255, 255, 255, 0.9) 1px, transparent 1px), radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.5) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.7) 1px, transparent 1px)', backgroundSize: '120px 120px' }} />
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 5% 5%, rgba(255, 255, 255, 0.8) 1px, transparent 1px), radial-gradient(circle at 90% 90%, rgba(255, 255, 255, 0.6) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

        {/* Cinematic Nebula Layer (Mix Blend) */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen bg-[radial-gradient(ellipse_at_center,rgba(217,70,239,0.05),transparent)]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Nebula Layer" fill className="object-cover object-bottom" priority quality={100} />
        </div>
        
        {/* Abstract Vignette Mask */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#020104]/10 via-[#020104]/50 to-[#020104] pointer-events-none" />

        {/* Foco Visual detrás del logo (Halo de luz dinámico) */}
        <div className="absolute top-[30%] sm:top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-fuchsia-500/20 rounded-full blur-[100px] pointer-events-none z-0 animate-breath" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[150px] pointer-events-none z-0 mix-blend-screen" />
        
        '''

        content = re.sub(backgrounds_regex, new_backgrounds, content, flags=re.DOTALL)
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ Backgrounds espaciales y halo inyectados exitosamente en page.tsx.")

if __name__ == '__main__':
    main()
