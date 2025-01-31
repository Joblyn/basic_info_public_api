# basic_info_public_api

## Overview

The `basic_info_public_api` is a simple API that provides basic information about various entities. It is designed to be easy to use and integrate into other applications.

## Features

- Retrieve basic information about entities
- Simple and easy-to-use endpoints
- JSON responses

## Installation

To install the `basic_info_public_api`, clone the repository and install the dependencies:

```bash
git clone https://github.com/Joblyn/basic_info_public_api.git
cd basic_info_public_api
npm install
```

## Usage

To start the API server, run:

```bash
npm start
```

The server will start on `http://localhost:8800`.

## Public Hosting

The server is also publicly hosted at `https://basic-info-public-api.onrender.com/`.

## Endpoints

### GET /info

Retrieve basic information.

#### Request

```http
GET / HTTP/1.1
Host: localhost:8800
```

#### Response

```json
{
  "name": "Example Name",
  "description": "This is an example description.",
  "version": "1.0.0"
}
```

### Example Usage

To retrieve basic information, you can use the following curl command:

```bash
curl -X GET https://basic-info-public-api.onrender.com/
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Related Links

For more information on hiring Node.js developers, visit [Hire Node.js Developers](https://hng.tech/hire/nodejs-developers).
