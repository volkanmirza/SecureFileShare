# SecureFileShare

SecureFileShare is a web application that allows you to securely share your files. Users can upload their files in an encrypted way and securely share them with others by creating a token.

## Features

- Secure file upload and sharing
- Secure file transfer with end-to-end encryption
- Multilingual support (Turkish and English)
- User-friendly interface
- Token-based file access

## Installation

### Requirements

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/volkanmirza/SecureFileShare.git
   cd SecureFileShare
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Using Docker

### Requirements

- Docker
- Docker Compose (optional)

### Using Docker Compose (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/volkanmirza/SecureFileShare.git
   cd SecureFileShare
   ```

2. Build and start the container:
   ```bash
   docker-compose up -d
   ```

3. Access the application in your browser:
   ```
   http://localhost:8080
   ```

### Using Docker directly

1. Clone the repository:
   ```bash
   git clone https://github.com/volkanmirza/SecureFileShare.git
   cd SecureFileShare
   ```

2. Build the Docker image:
   ```bash
   docker build -t secure-file-share .
   ```

3. Run the container:
   ```bash
   docker run -d -p 8080:80 secure-file-share
   ```

4. Access the application in your browser:
   ```
   http://localhost:8080
   ```

## Deployment (Build)

To compile and prepare the application for production:

```bash
npm run build
# or
yarn build
```

The compiled files will be created in the `dist` folder. You can host these files on any static web server.

## How to Use

1. Navigate to the "Upload File" section on the main page.
2. Drag and drop your file or click on the file selection area to choose a file.
3. After the file is uploaded, you will be given a token. This token is the key required to share your file.
4. Send the token to the person you want to share the file with.
5. The recipient can access the file by entering the token in the "Download File" section.

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- i18next (Multilingual support)
- Zustand (State management)
- Socket.io-client (Real-time communication)

## Security

SecureFileShare values the security of your files:

- Files are encrypted end-to-end
- File content is not stored on servers
- Sharing tokens are securely generated


## License

This project is licensed under the MIT License. See the `LICENSE` file for more information. 