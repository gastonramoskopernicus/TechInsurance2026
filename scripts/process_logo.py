import struct
import zlib
import sys

def write_png(buf, width, height, filename):
    width_byte_4 = width * 4
    raw_data = b"".join(b'\x00' + buf[span:span + width_byte_4]
                        for span in range(0, height * width * 4, width * 4))
    def png_pack(png_tag, data):
        chunk_head = png_tag + data
        return struct.pack("!I", len(data)) + chunk_head + struct.pack("!I", zlib.crc32(chunk_head) & 0xFFFFFFFF)
    png = b"".join([
        b'\x89PNG\r\n\x1a\n',
        png_pack(b'IHDR', struct.pack("!2I5B", width, height, 8, 6, 0, 0, 0)),
        png_pack(b'IDAT', zlib.compress(raw_data, 9)),
        png_pack(b'IEND', b'')])
    with open(filename, 'wb') as f:
        f.write(png)

def process_bmp():
    with open('/tmp/logo.bmp', 'rb') as f:
        data = f.read()

    pixel_offset = struct.unpack_from('<I', data, 10)[0]
    width = struct.unpack_from('<i', data, 18)[0]
    height_sig = struct.unpack_from('<i', data, 22)[0]
    bpp = struct.unpack_from('<H', data, 28)[0]
    
    height = abs(height_sig)
    bottom_up = height_sig > 0

    print(f"BMP dimensions: {width}x{height}, {bpp}bpp, bottom_up={bottom_up}")

    stride = ((width * bpp + 31) // 32) * 4
    
    rows = []
    
    # Read into a 2D array of (r,g,b)
    for y in range(height):
        row_idx = height - 1 - y if bottom_up else y
        row_offset = pixel_offset + row_idx * stride
        row_data = []
        for x in range(width):
            if bpp == 24:
                idx = row_offset + x * 3
                b, g, r = data[idx], data[idx+1], data[idx+2]
                row_data.append((r,g,b))
            elif bpp == 32:
                idx = row_offset + x * 4
                b, g, r = data[idx], data[idx+1], data[idx+2]
                row_data.append((r,g,b))
        rows.append(row_data)

    # find filled rows (non-white threshold)
    threshold = 240
    def is_white(px):
        return px[0] > threshold and px[1] > threshold and px[2] > threshold

    row_is_empty = []
    for r in rows:
        empty = True
        for px in r:
            if not is_white(px):
                empty = False
                break
        row_is_empty.append(empty)
    
    # Find top block
    start_y = 0
    while start_y < height and row_is_empty[start_y]:
        start_y += 1
    
    if start_y == height:
        print("Image is entirely white!")
        sys.exit(1)
        
    end_y = start_y
    while end_y < height and not row_is_empty[end_y]:
        end_y += 1
        
    print(f"Found logo block from y={start_y} to y={end_y}")
    
    # Now find x bounds
    start_x = width
    end_x = 0
    for y in range(start_y, end_y):
        for x in range(width):
            if not is_white(rows[y][x]):
                if x < start_x: start_x = x
                if x > end_x: end_x = x

    print(f"X bounds: {start_x} to {end_x}")

    # Crop and convert to RGBA
    out_width = end_x - start_x + 1
    out_height = end_y - start_y
    buf = bytearray(out_width * out_height * 4)
    
    i = 0
    for y in range(start_y, end_y):
        for x in range(start_x, end_x + 1):
            px = rows[y][x]
            if is_white(px):
                # transparent
                buf[i:i+4] = b'\x00\x00\x00\x00'
            else:
                buf[i:i+4] = bytes([px[0], px[1], px[2], 255])
            i += 4

    out_file = '/Users/gastonramos/Documents/Antigravity/tech-insurance-2026/public/logo-icon.png'
    write_png(buf, out_width, out_height, out_file)
    print(f"Saved optimized transparent logo to {out_file}")

process_bmp()
