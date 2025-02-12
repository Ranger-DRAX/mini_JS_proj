import http.client

conn = http.client.HTTPSConnection("open-weather13.p.rapidapi.com")

headers = {
    'x-rapidapi-key': "a8da43dcacmsh1a70327b13d68d6p1cf984jsna6e7ca53fbcc",
    'x-rapidapi-host': "open-weather13.p.rapidapi.com"
}

conn.request("GET", "/city/landon/EN", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))