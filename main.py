import requests

# Replace this URL with the one you want to fetch data from
url = "https://login.yahoo.com/?&lang=fr"

# Send an HTTP GET request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Save the HTML content to a file named "data.html"
    with open("data.html", "w", encoding="utf-8") as file:
        file.write(response.text)
    print("HTML data has been saved to data.html.")
else:
    print("Failed to retrieve data. Status code:", response.status_code)
