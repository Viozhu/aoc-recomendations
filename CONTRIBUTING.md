# Contributing to Ashes of Creation Equipment Recommender

First of all, thanks for taking the time to contribute! 🎉

The following is a set of guidelines for contributing to this project. These are just guidelines, not rules. Use your best judgment and feel free to propose changes to this document in a pull request.

## Getting Started

1.  **Fork the repository** on GitHub.
2.  **Clone your fork** locally:
    ```bash
    git clone https://github.com/your-username/aoc-equipment-recommender.git
    cd aoc-equipment-recommender
    ```
3.  **Install dependencies** using pnpm:
    ```bash
    pnpm install
    ```
4.  **Create a branch** for your feature or bugfix:
    ```bash
    git checkout -b feature/amazing-feature
    # or
    git checkout -b fix/annoying-bug
    ```

## Development Workflow

*   Run the development server: `pnpm dev`
*   Open `http://localhost:5173` to see your changes.

## Pull Request Process

1.  Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2.  Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3.  You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## Code Style

*   We use TypeScript for type safety. Please ensure no `any` types are used unless absolutely necessary.
*   We use Tailwind CSS for styling. Try to use standard utility classes before adding custom CSS.
*   Follow the existing folder structure.

## Reporting Bugs

Values are valid if:
*   Use a clear and descriptive title for the issue to identify the problem.
*   Describe the exact steps to reproduce the problem in as many details as possible.
*   Provide specific examples to demonstrate the steps.

## License

By contributing, you agree that your contributions will be licensed under its MIT License.
