import os
import re

def main():
    print("Aplicando Branding (Identidad Visual Magenta y Logo Geométrico)...")
    base_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'app'))
    
    # 1. ACTUALIZAR CSS GLOBAL
    globals_path = os.path.join(base_dir, 'globals.css')
    if os.path.exists(globals_path):
        with open(globals_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        content = re.sub(r'--primary:\s*#[a-fA-F0-9]+;\s*/\*\s*Blue.*?\*/', '--primary: #d946ef; /* Fuchsia primary color */', content)
        
        with open(globals_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print("✅ globals.css actualizado al layout Magenta.")

    # 2. REEMPLAZO DE CLASES DE TAILWIND (BLUE/INDIGO -> FUCHSIA/PINK) EN TODO EL DIRECTORIO
    replaced_files = 0
    for root, _, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.tsx') or file.endswith('.ts'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                
                # Replace classes
                content = re.sub(r'\bblue-', 'fuchsia-', content)
                content = re.sub(r'\bindigo-', 'pink-', content)
                content = re.sub(r'\bcyan-', 'pink-', content)
                
                # Replace specific hardcoded RGB shadows matching blues 
                # blue-500 #3b82f6 -> rgba(59,130,246,X) -> fuchsia-500 rgba(217,70,239,X)
                content = re.sub(r'rgba\(59,\s*130,\s*246,', 'rgba(217, 70, 239,', content)
                # blue-600 #2563eb -> rgba(37,99,235,X) -> fuchsia-600 rgba(192,38,211,X)
                content = re.sub(r'rgba\(37,\s*99,\s*235,', 'rgba(192, 38, 211,', content)

                if content != original_content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    replaced_files += 1

    print(f"✅ {replaced_files} componentes migrados de Blue/Indigo hacia Fuchsia/Pink.")

    # 3. ACTUALIZAR HEADER.TSX CON EL IMAGOTIPO
    header_path = os.path.join(base_dir, 'components', 'Header.tsx')
    if os.path.exists(header_path):
        with open(header_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # We need to target the exact JSX of the logo layout
        old_logo_pattern = r'<Link\s+href="\/"\s+className="text-xl\s+font-bold\s+tracking-tight">\s*TECH<span className="text-primary font-medium">INSURANCE<\/span>\s*<\/Link>'
        new_logo_jsx = '''<Link href="/" className="flex items-center gap-3 text-xl font-bold tracking-tight">
            <img src="/logo-icon.png" alt="Tech Insurance Logo" className="h-8 w-auto" />
            <span>TECH<span className="text-primary font-medium">INSURANCE</span></span>
          </Link>'''
          
        if 'logo-icon.png' not in content:
            content = re.sub(old_logo_pattern, new_logo_jsx, content)
            with open(header_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print("✅ Isotipo Geométrico inyectado en la navbar izquierda.")

if __name__ == '__main__':
    main()
