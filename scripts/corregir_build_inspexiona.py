import os
import re

base_dir = "/Users/gastonramos/Documents/Antigravity/tech-insurance-2026"

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

# 1. Leer el archivo actual
page_path = os.path.join(base_dir, "app/inspexiona/page.tsx")
with open(page_path, "r", encoding="utf-8") as f:
    original_content = f.read()

# 2. Extraer la metadata
metadata_regex = re.compile(r"export const metadata = {[\s\S]*?};\n")
metadata_match = metadata_regex.search(original_content)
metadata_content = metadata_match.group(0) if metadata_match else ""

# 3. Remover metadata, y renombrar InspexionaPage a InspexionaClient para el archivo client
client_content = original_content.replace(metadata_content, "")
client_content = client_content.replace("export default function InspexionaPage", "export default function InspexionaClient")

# 4. Crear el nuevo page.tsx (Server Component)
server_page = f"""import InspexionaClient from "./InspexionaClient";

{metadata_content}
export default function InspexionaPage() {{
  return <InspexionaClient />;
}}
"""

# Escribir archivos
write_file(os.path.join(base_dir, "app/inspexiona/InspexionaClient.tsx"), client_content)
write_file(page_path, server_page)

print("Refactorización completada: Separados Server Component y Client Component.")
