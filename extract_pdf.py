import pdfplumber
import json

pdf_path = '01-Sina-Ronaghi.pdf'
text = ''
with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        text += page.extract_text()
        text += '\n'

print(text)
