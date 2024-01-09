import re

def convert_style_to_object(file_content):
    # Regular expression to match the style attribute and its content
    style_regex = r'style="{([^"]*)}"'

    # Function to convert style string to object format
    def style_to_object(match):
        style_string = match.group(1)
        style_properties = style_string.split(';')
        style_object = ', '.join(f"'{prop.split(':')[0].strip()}': '{prop.split(':')[1].strip()}'" for prop in style_properties if prop)
        return f'style={{ {style_object} }}'

    # Replace all occurrences of style string with object format
    return re.sub(style_regex, style_to_object, file_content)

# Read the JSX file
with open('input.html', 'r') as file:
    file_content = file.read()

# Convert all style strings to object notation
converted_content = convert_style_to_object(file_content)

# Write the converted content back to the file or a new file
with open('styled.html', 'w') as file:
    file.write(converted_content)
