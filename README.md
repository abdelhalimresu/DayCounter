## Day counter
A simple single page application that counts the number of days between two given dates.

### Run using npm

```bash
# Build
npm install
# Run the dev server
npm start
```

### Run using docker

```bash
# Build the image
docker build -t <img_name>:<img_tag> .

# Run container and allow edits to be reflected without the need to build again
docker run -v $(pwd)/src:/app/src <img_name>:<img_tag>
```
