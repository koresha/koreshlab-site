# Contributing to Koreshlab Site

Thank you for your interest in contributing to the Koreshlab portfolio site! This document provides guidelines for contributing to this project.

## Security First

Before contributing, please review our [Security Policy](.github/SECURITY.md) and ensure you follow secure coding practices.

## Code of Conduct

This project adheres to our [Code of Conduct](.github/CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How to Contribute

### Reporting Issues

1. Check if the issue already exists
2. Use the issue templates when available
3. Provide detailed information about the problem
4. Include steps to reproduce if applicable

### Security Issues

**DO NOT** report security vulnerabilities through public GitHub issues. Use the contact form on the public site and avoid sharing secrets or client-identifying details.

### Pull Requests

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes following our coding standards
4. Test your changes thoroughly
5. Commit with clear, descriptive messages
6. Submit a pull request

### Coding Standards

- Follow TypeScript/JavaScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure responsive design compatibility
- Test on multiple browsers and devices

### Development Setup

```bash
# Install dependencies
npm ci

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/        # Data and content files
│   ├── pages/          # Site pages
│   └── styles/         # Global styles
├── public/             # Static assets
└── .github/            # GitHub configurations
```

## Security Guidelines

- Never commit sensitive information (keys, passwords, tokens)
- Use environment variables for configuration
- Follow the principle of least privilege
- Validate all inputs
- Keep dependencies updated

## Testing

Before submitting your contribution:

- Test locally with `npm run build`
- Verify responsive design
- Check for accessibility compliance
- Ensure dark/light theme compatibility

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Feel free to reach out:

- **Issues**: GitHub Issues for technical questions
- **Security**: Use the public contact form and keep reports free of secrets, hostnames, IP addresses and client names

---

Thank you for helping make this project better.
