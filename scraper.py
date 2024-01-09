import requests
from bs4 import BeautifulSoup

# URL of the webpage you want to scrape
url = 'https://cuflbs.wixsite.com/fashion-luxury-soc/post/mad-men-the-elusive-power-of-luxury'


# Fetch the webpage
response = requests.get(url)
html_content = response.content

# Parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Find the specific div with class 'nLG8d5'
target_div = soup.find('div', class_='nLG8d5')
if target_div is None:
    print("No div with class 'nLG8d5' found")
    exit()

# Remove image tags within this div
for img_tag in target_div.find_all('img'):
    img_tag.decompose()

# Extract the modified HTML of the target div
modified_html = target_div.prettify()

# Save the modified HTML to a file
with open('output2.html', 'w', encoding='utf-8') as file:
    file.write(modified_html)

print("HTML saved as output.html")
