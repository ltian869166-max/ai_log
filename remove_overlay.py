import sys
sys.stdout.reconfigure(encoding='utf-8')
path = r'C:\Users\admin\Documents\×÷Æ·¼¯\portfolio-temp\src\components\Hero.jsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()
lines = content.split('\n')
new_lines = [l for l in lines if 'hero-overlay' not in l]
result = '\n'.join(new_lines)
with open(path, 'w', encoding='utf-8') as f:
    f.write(result)
print('Done - overlay JSX removed')
