# Node.js CircleCI Tutorial

This is a simple Node.js application used for demonstrating Docker and CircleCI concepts.

## Getting Started

### Prerequisites

- Node.js 18 or higher
- Docker (optional)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the application:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:5000`

### Docker

Build the Docker image:

```bash
docker build -t tutorial/circleci-node:18 .
```

Run the container:

```bash
docker run -d -p 5000:5000 --name nodetest01 tutorial/circleci-node:18
```

## Features

- Simple Express.js web server
- Docker support with Node.js 18
- Modern npm commands for production builds
- CircleCI integration ready

## License

MIT
