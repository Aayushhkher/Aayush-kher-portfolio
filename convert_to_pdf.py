#!/usr/bin/env python3
"""
Script to convert HTML resume to PDF format
Requires: pip install weasyprint
"""

import weasyprint
import os
from pathlib import Path

def convert_html_to_pdf(html_file, output_pdf):
    """Convert HTML file to PDF using weasyprint"""
    try:
        # Convert HTML to PDF
        html_doc = weasyprint.HTML(filename=html_file)
        html_doc.write_pdf(output_pdf)
        print(f"✅ Successfully converted {html_file} to {output_pdf}")
        return True
    except Exception as e:
        print(f"❌ Error converting to PDF: {e}")
        return False

def main():
    # File paths
    html_file = "resume.html"
    output_pdf = "Aayush_Kher_Resume.pdf"
    
    # Check if HTML file exists
    if not os.path.exists(html_file):
        print(f"❌ HTML file '{html_file}' not found!")
        return
    
    # Convert to PDF
    success = convert_html_to_pdf(html_file, output_pdf)
    
    if success:
        print(f"\n📄 Your resume has been saved as: {output_pdf}")
        print("🎯 The PDF is optimized for FAANG companies with:")
        print("   • Clean, professional formatting")
        print("   • ATS-friendly structure")
        print("   • Highlighted technical skills")
        print("   • Detailed project descriptions")
        print("   • Quantified achievements where possible")
    else:
        print("\n💡 Alternative conversion methods:")
        print("   1. Open resume.html in Chrome/Edge")
        print("   2. Press Ctrl+P (Cmd+P on Mac)")
        print("   3. Select 'Save as PDF'")
        print("   4. Save the file")

if __name__ == "__main__":
    main() 