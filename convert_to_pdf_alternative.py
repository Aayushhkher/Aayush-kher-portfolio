#!/usr/bin/env python3
"""
Alternative script to convert HTML resume to PDF format
Uses pdfkit with wkhtmltopdf
"""

import pdfkit
import os
import subprocess
import sys

def check_wkhtmltopdf():
    """Check if wkhtmltopdf is installed"""
    try:
        subprocess.run(['wkhtmltopdf', '--version'], capture_output=True, check=True)
        return True
    except (subprocess.CalledProcessError, FileNotFoundError):
        return False

def install_wkhtmltopdf():
    """Install wkhtmltopdf using Homebrew"""
    try:
        print("Installing wkhtmltopdf...")
        subprocess.run(['brew', 'install', 'wkhtmltopdf'], check=True)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error installing wkhtmltopdf: {e}")
        return False

def convert_html_to_pdf(html_file, output_pdf):
    """Convert HTML file to PDF using pdfkit"""
    try:
        # Configure pdfkit options for better output
        options = {
            'page-size': 'A4',
            'margin-top': '0.75in',
            'margin-right': '0.75in',
            'margin-bottom': '0.75in',
            'margin-left': '0.75in',
            'encoding': "UTF-8",
            'no-outline': None,
            'enable-local-file-access': None
        }
        
        # Convert HTML to PDF
        pdfkit.from_file(html_file, output_pdf, options=options)
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
    
    # Check if wkhtmltopdf is installed
    if not check_wkhtmltopdf():
        print("wkhtmltopdf not found. Attempting to install...")
        if not install_wkhtmltopdf():
            print("❌ Failed to install wkhtmltopdf")
            print("\n💡 Alternative conversion methods:")
            print("   1. Open resume.html in Chrome/Edge")
            print("   2. Press Cmd+P (Mac) or Ctrl+P (Windows/Linux)")
            print("   3. Select 'Save as PDF'")
            print("   4. Save the file")
            return
    
    # Try to install pdfkit if not available
    try:
        import pdfkit
    except ImportError:
        print("Installing pdfkit...")
        subprocess.run([sys.executable, '-m', 'pip', 'install', 'pdfkit'], check=True)
        import pdfkit
    
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
        print("   2. Press Cmd+P (Mac) or Ctrl+P (Windows/Linux)")
        print("   3. Select 'Save as PDF'")
        print("   4. Save the file")

if __name__ == "__main__":
    main() 