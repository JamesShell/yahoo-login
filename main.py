import requests

# Replace this URL with the one you want to fetch data from
url = "https://login.yahoo.com/account/challenge/email-verify?.lang=fr-FR&done=https%3A%2F%2Fwww.yahoo.com%2F&acrumb=02QuV9ka&display=login&authMechanism=primary&sessionIndex=QQ--"

# Send an HTTP GET request to the URL
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Save the HTML content to a file named "data.html"
    with open("password.html", "w", encoding="utf-8") as file:
        file.write(response.text)
    print("HTML data has been saved to data.html.")
else:
    print("Failed to retrieve data. Status code:", response.status_code)
