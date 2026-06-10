import os
import sys
from PIL import Image

def compress_images(directory, max_width=1920, quality=80):
    total_processed = 0
    total_saved_bytes = 0
    error_count = 0

    valid_extensions = {'.jpg', '.jpeg', '.png', '.webp'}

    for root, _, files in os.walk(directory):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in valid_extensions:
                file_path = os.path.join(root, file)
                
                try:
                    original_size = os.path.getsize(file_path)
                    
                    with Image.open(file_path) as img:
                        fmt = img.format or "JPEG" if ext in ['.jpg', '.jpeg'] else ("PNG" if ext == '.png' else "WEBP")
                        
                        # Handle images with orientation exif tags
                        # This avoids rotation issues
                        try:
                            from PIL import ImageOps
                            img = ImageOps.exif_transpose(img)
                        except Exception:
                            pass

                        # Convert RGBA to RGB for JPEG
                        if ext in ['.jpg', '.jpeg'] and img.mode in ('RGBA', 'P', 'LA'):
                            img = img.convert('RGB')
                        
                        modified = False
                        
                        # Resize if too large
                        if img.width > max_width:
                            ratio = max_width / float(img.width)
                            new_height = int((float(img.height) * float(ratio)))
                            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                            modified = True
                        
                        # Save back over the original file
                        if ext in ['.jpg', '.jpeg']:
                            img.save(file_path, format='JPEG', quality=quality, optimize=True)
                        elif ext == '.png':
                            # PNG optimization
                            img.save(file_path, format='PNG', optimize=True)
                        elif ext == '.webp':
                            img.save(file_path, format='WEBP', quality=quality, optimize=True)

                    new_size = os.path.getsize(file_path)
                    
                    # Track savings
                    if new_size < original_size:
                        total_saved_bytes += (original_size - new_size)
                    
                    total_processed += 1
                    
                    if total_processed % 100 == 0:
                        print(f"Processed {total_processed} images... Saved: {total_saved_bytes / (1024*1024):.2f} MB")

                except Exception as e:
                    print(f"Error processing {file_path}: {e}")
                    error_count += 1

    print("\n--- COMPRESSION COMPLETE ---")
    print(f"Total processed: {total_processed}")
    print(f"Total errors: {error_count}")
    print(f"Total space saved: {total_saved_bytes / (1024*1024*1024):.2f} GB ({total_saved_bytes / (1024*1024):.2f} MB)")

if __name__ == "__main__":
    target_dir = os.path.join(os.getcwd(), 'assets')
    if len(sys.argv) > 1:
        target_dir = sys.argv[1]
    
    print(f"Starting compression in: {target_dir}")
    compress_images(target_dir, max_width=1920, quality=80)
