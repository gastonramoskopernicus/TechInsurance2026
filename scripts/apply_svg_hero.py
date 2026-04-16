import os
import re
import random

def main():
    print("Aplicando animación de SVG Nativa (Internal Pulse) & Global Breath...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
    
    # 1. PROCESS THE SVG FILE TO INJECT INTERNAL PULSES
    svg_path = os.path.join(base_dir, 'public', 'TechInsurance.svg')
    if os.path.exists(svg_path):
        with open(svg_path, 'r', encoding='utf-8') as f:
            svg_content = f.read()

        # The user's SVG might be generated with a black background layer
        # The auto-tracer usually outputs a massive background path first (fill="#000000").
        # We will remove any pure black backgrounds from the SVG to make it cleanly transparent.
        svg_content = re.sub(r'<path[^>]*fill="#000000"[^>]*>', '', svg_content)
        svg_content = re.sub(r'<rect[^>]*fill="#000000"[^>]*>', '', svg_content)

        # Inject CSS styles inside the SVG root
        style_block = """
<style>
  @keyframes internalPulse1 {
    0% { opacity: 0.85; transform: scale(0.99); transform-origin: center; }
    100% { opacity: 1; transform: scale(1); transform-origin: center; }
  }
  @keyframes internalPulse2 {
    0% { opacity: 0.9; }
    100% { opacity: 1; }
  }
  .pulse-1 { animation: internalPulse1 3s ease-in-out infinite alternate; }
  .pulse-2 { animation: internalPulse2 4s ease-in-out infinite alternate-reverse; }
  .pulse-3 { animation: internalPulse1 5s ease-in-out infinite alternate; }
  .pulse-4 { animation: internalPulse2 6s ease-in-out infinite alternate-reverse; }
</style>\n"""
        
        # Insert style tag just after <svg ...>
        if '<style>' not in svg_content:
            svg_content = re.sub(r'(<svg[^>]*>)', r'\1' + style_block, svg_content, count=1)

        # Find all remaining <path ...> and randomly inject pulse classes, but skip empty paths
        lines = svg_content.split('>')
        out_lines = []
        for line in lines:
            if '<path' in line and 'fill="none"' not in line:
                pulse_cls = random.choice(['pulse-1', 'pulse-2', 'pulse-3', 'pulse-4', '', ''])
                if pulse_cls:
                    # check if class already exists
                    if 'class="' in line:
                        line = re.sub(r'class="([^"]*)"', rf'class="\1 {pulse_cls}"', line)
                    else:
                        line = line.replace('<path', f'<path class="{pulse_cls}"')
            out_lines.append(line)
        
        svg_content = '>'.join(out_lines)

        with open(svg_path, 'w', encoding='utf-8') as f:
            f.write(svg_content)
        print("✅ SVG interno reescrito con opacidad pulsátil transparente.")

    # 2. UPDATE GLOBALS.CSS
    css_path = os.path.join(base_dir, 'app', 'globals.css')
    if os.path.exists(css_path):
        with open(css_path, 'r', encoding='utf-8') as f:
            css_content = f.read()

        if '@keyframes breath' not in css_content:
            css_content += """\n
@keyframes breath {
  0% { transform: scale(1); opacity: 0.9; }
  50% { transform: scale(1.03); opacity: 1; }
  100% { transform: scale(1); opacity: 0.9; }
}

.animate-breath {
  animation: breath 4s ease-in-out infinite;
  transform-origin: center;
}
"""
            with open(css_path, 'w', encoding='utf-8') as f:
                f.write(css_content)
            print("✅ Global CSS actualizado con '.animate-breath'.")

    # 3. UPDATE PAGE.TSX HERO 
    page_path = os.path.join(base_dir, 'app', 'page.tsx')
    if os.path.exists(page_path):
        with open(page_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # We replace the previous hero 3D logo with the SVG and apply animate-breath
        # Find the Image tag inside mixing blending block
        
        # Previously we had:
        """
          <div className="relative flex justify-center items-center w-72 h-72 sm:w-[22rem] sm:h-[22rem] md:w-[28rem] md:h-[28rem] mb-6 mix-blend-screen Supports-[mix-blend-mode]:mix-blend-plus-lighter">
            <Image 
              src="/hero-logo-premium.png" 
        """
        
        # We need to replace the Image tag and change it to the SVG without extreme blend modes, 
        # since SVG already has transparent background.

        # RegEx to find the wrapper and image and replace it beautifully:
        pattern = r'<div className="relative [^>]+mix-blend-screen[^>]+>.*?<\/div>'
        
        new_hero_element = '''<div className="relative flex justify-center items-center w-72 h-72 sm:w-[22rem] sm:h-[22rem] md:w-[28rem] md:h-[28rem] mb-6 z-20">
            <div className="animate-breath w-full h-full drop-shadow-[0_0_25px_rgba(217,70,239,0.2)]">
              <Image 
                src="/TechInsurance.svg" 
                alt="Tech Insurance Official Geometric Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>'''
          
        content = re.sub(pattern, new_hero_element, content, flags=re.DOTALL)
        
        with open(page_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ Hero de page.tsx actualizado con el Logo SVG (sin blend agresivo) y animate-breath aplicado.")

if __name__ == '__main__':
    main()
