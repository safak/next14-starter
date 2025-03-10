# Next.js Starter App

This is a blog app built with Next.js, Prisma, and Tailwind CSS. It includes authentication, a blog, and various components to help you get started quickly.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Salutation](#salutation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Next.js**: The React framework for production.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Authentication**: User authentication with JWT and NextAuth.
- **Blog**: A simple blog with posts and authors.
- **Components**: Reusable components like Navbar, Footer, Hero, etc.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

First, clone the repository:

```bash
git clone https://github.com/yourusername/next14-app.git
cd next14-app
```

Then, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Running the Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```plaintext
.env
.eslintrc.json
.gitignore
jsconfig.json
next.config.js
package.json
postcss.config.js
README.md
tailwind.config.js
.next/
prisma/
public/
src/
```

- **.env**: Environment variables.
- **.eslintrc.json**: ESLint configuration.
- **.gitignore**: Git ignore file.
- **jsconfig.json**: JavaScript configuration.
- **next.config.js**: Next.js configuration.
- **package.json**: Project dependencies and scripts.
- **postcss.config.js**: PostCSS configuration.
- **README.md**: Project documentation.
- **tailwind.config.js**: Tailwind CSS configuration.
- **.next/**: Next.js build output.
- **prisma/**: Prisma schema and migrations.
- **public/**: Static assets.
- **src/**: Source code.

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```plaintext
DATABASE_URL="your-database-url"
DIRECT_URL="your-direct-database-url"
JWT_SECRET="your-jwt-secret"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

## Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint.

## Salutation

Special thanks to [lamadev](https://github.com/safak) for the original repository that this project is forked from.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
