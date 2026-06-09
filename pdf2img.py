import fitz
import sys
import os
import shutil

pdf_path = sys.argv[1]
output_dir = sys.argv[2]

if os.path.exists(output_dir):
    shutil.rmtree(output_dir)
os.makedirs(output_dir, exist_ok=True)

print(f"Extracting {pdf_path} to {output_dir}")
doc = fitz.open(pdf_path)
for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=150)
    out_path = os.path.join(output_dir, f"page_{i+1:03d}.jpg")
    pix.save(out_path)
    
print(f"Done. Extracted {len(doc)} pages.")
