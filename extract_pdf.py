import sys

try:
    import PyPDF2
    with open(sys.argv[1], 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        with open("extracted.txt", "w", encoding="utf-8") as out:
            out.write(text)
    sys.exit(0)
except Exception as e:
    with open("extracted.txt", "w", encoding="utf-8") as out:
        out.write(f"Error reading PDF: {e}")
    sys.exit(1)
