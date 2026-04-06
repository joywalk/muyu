import os

input_file = '/Users/ymx/Downloads/fish-sound.mp3'
output_dir = '/Users/ymx/Project/muyu/audio/splits'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

with open(input_file, 'rb') as f:
    data = f.read()

header_size = 614
header = data[:header_size]
audio_data = data[header_size:]

bytes_per_sec = 24000
num_splits = len(audio_data) // bytes_per_sec

for i in range(num_splits + 1):
    chunk = audio_data[i*bytes_per_sec : (i+1)*bytes_per_sec]
    if not chunk:
        break
    with open(f'{output_dir}/sound_{i}s_{i+1}s.mp3', 'wb') as out_f:
        out_f.write(header + chunk)

print(f"Split completed: {num_splits + 1} files generated in {output_dir}")
