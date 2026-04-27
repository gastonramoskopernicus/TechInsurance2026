import os
import json
from PIL import Image

def main():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    public_dir = os.path.join(base_dir, 'public')
    source_img = os.path.join(public_dir, 'logo-icon.png')
    
    if not os.path.exists(source_img):
        print(f"Error: No se encontro el archivo base en {source_img}")
        return

    try:
        with Image.open(source_img) as img:
            # Convert to RGBA just in case
            img = img.convert("RGBA")

            sizes = {
                'favicon-16x16.png': (16, 16),
                'favicon-32x32.png': (32, 32),
                'apple-touch-icon.png': (180, 180),
                'android-chrome-192x192.png': (192, 192),
                'android-chrome-512x512.png': (512, 512),
            }

            for filename, size in sizes.items():
                out_path = os.path.join(public_dir, filename)
                resized = img.resize(size, Image.Resampling.LANCZOS)
                resized.save(out_path, format="PNG")
                print(f"Generado {filename}")

            # Create standard favicon.ico containing multiple sizes
            ico_path = os.path.join(public_dir, 'favicon.ico')
            img.save(ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
            print("Generado favicon.ico")
            
            # App/favicon.ico replacing the existing one 
            app_dir = os.path.join(base_dir, 'app')
            app_ico_path = os.path.join(app_dir, 'favicon.ico')
            if os.path.exists(app_ico_path):
                img.save(app_ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
                print("Actualizado app/favicon.ico")

    except Exception as e:
        print(f"Error procesando la imagen: {e}")
        return

    # Generate site.webmanifest
    manifest = {
        "name": "Tech Insurance",
        "short_name": "TechIns",
        "icons": [
            {
                "src": "/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ],
        "theme_color": "#0d0c11",
        "background_color": "#0d0c11",
        "display": "standalone"
    }

    manifest_path = os.path.join(public_dir, 'site.webmanifest')
    with open(manifest_path, 'w') as f:
        json.dump(manifest, f, indent=4)
    print("Generado site.webmanifest")

if __name__ == "__main__":
    main()
