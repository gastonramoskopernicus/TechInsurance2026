import os
import re

def main():
    print("Actualizando Hero Section Cósmica y Nav Hover en Magenta...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))
    
    # 1. ACTUALIZAR HOVER EN HEADER.TSX
    header_path = os.path.join(base_dir, 'components', 'Header.tsx')
    if os.path.exists(header_path):
        with open(header_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace normal text-muted-foreground transition to the sophisticated scaling/magenta one
        content = re.sub(
            r'className="text-muted-foreground transition-colors hover:text-foreground"',
            'className="text-muted-foreground transition-all duration-300 hover:text-fuchsia-500 hover:scale-[1.05] inline-block"',
            content
        )
        with open(header_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ Header Nav-links hover actualizados (Scale y Magenta).")

    # 2. ACTUALIZAR HERO SECTION EN PAGE.TSX
    page_path = os.path.join(base_dir, 'page.tsx')
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # Add the cosmic background image and adjust the hero logo class
        # Target the top section definition to insert spatial background:
        pattern_sec = r'(<section id="hero" className=")(.*?)(")'
        # Remove background color explicitely if needed (already dark)
        # Add relative wrapper and insert Image behind
        
        # We will do a larger replace for the Hero interior block
        
        # original block replacement
        old_hero_block = '''<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto max-w-6xl text-center relative z-10 flex flex-col items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-12">
            <Image 
              src="/hero-cube.png" 
              alt="Tech Insurance Core Architecture" 
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(217,70,239,0.3)]"
              priority
            />
          </div>'''
          
        new_hero_block = '''{/* Cosmic Deep Space Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Background" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#020202]/50 to-[#020202]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-900/20 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] pointer-events-none z-0" />
        
        <div className="container mx-auto max-w-6xl text-center relative z-10 flex flex-col items-center">
          <div className="relative flex justify-center items-center w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] mb-8 mix-blend-screen mix-blend-plus-lighter">
            <Image 
              src="/hero-logo-premium.png" 
              alt="Tech Insurance Core Geometry" 
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(217,70,239,0.5)]"
              priority
            />
          </div>'''

        # Protect spaces by removing whitespace sensitivity or using substring replace
        content = content.replace(
            '''<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-900/20 rounded-full blur-[120px] pointer-events-none" />''',
            '''{/* Cosmic Deep Space Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.35]">
           <Image src="/hero-cosmic-bg.png" alt="Cosmic Nebula Layer" fill className="object-cover" priority quality={100} />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#020202]/30 to-[#020202]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-900/40 rounded-full blur-[120px] pointer-events-none z-0" />'''
        )

        content = content.replace(
            '''src="/hero-cube.png"''',
            '''src="/hero-logo-premium.png"'''
        )

        content = content.replace(
            '''<div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mb-12">''',
            '''<div className="relative w-72 h-72 sm:w-[22rem] sm:h-[22rem] md:w-[28rem] md:h-[28rem] mb-6 mix-blend-screen Supports-[mix-blend-mode]:mix-blend-plus-lighter">'''
        )

        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ Hero Image y Fondo Inmersivo intergaláctico aplicados con Mix-Blend Mode en page.tsx")

if __name__ == '__main__':
    main()
