from PIL import Image

def trim(im):
    bg = Image.new(im.mode, im.size, im.getpixel((0,0)))
    diff = Image.composite(im, bg, im) # wait, better doing getbbox
    bbox = im.getbbox()
    if bbox:
        return im.crop(bbox)
    return im

def main():
    img_path = 'public/kopernicus-logo.png'
    img = Image.open(img_path)
    
    # getbbox returns the bounding box of non-zero alpha in RGBA
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
        
    trimmed_img = trim(img)
    if trimmed_img.size != img.size:
        print(f"Cropped from {img.size} to {trimmed_img.size}")
        trimmed_img.save('public/kopernicus-logo.png', "PNG")
    else:
        print("No cropping needed.")

main()
