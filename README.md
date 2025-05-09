# Mini Card

## Description

A simple and responsive mini card component built using the BEM (Block, Element,
Modifier) methodology for CSS styling, enhanced with jQuery for interactive
elements, and featuring the visually appealing Nunito font.

## Getting Started

Follow these steps to get the mini card project set up and running on your local
machine.

### Installation

1.  **Clone the repository:** Use Git to clone the project files from the
    repository to your local machine.

    ```bash
    git clone https://github.com/gonchesan/iskaypet-mini-card.git
    ```

2.  **Navigate to the project directory:** Once the cloning is complete, move
    into the project's main directory.

    ```bash
    cd iskaypet-mini-card
    ```

3.  **Install dependencies:** This project likely uses npm (Node Package
    Manager) to manage its development dependencies. Install them using the
    following command:

    ```bash
    npm install
    ```

### Executing the program

To run the project and see the mini card in action, use the development server
command provided by your project setup (likely using a tool like Webpack or
Parcel):

```bash
  npm run dev
```

This command will typically start a local development server and open the
project in your web browser, allowing you to view and interact with the mini
card.

## Features

- **BEM Methodology**: The CSS styles are organized following the Block,
  Element, Modifier naming convention. This ensures a modular and maintainable
  codebase.

- **Responsive Design**: The mini card adapts to different screen sizes, with a
  defined breakpoint at 768px to distinguish between mobile and desktop layouts.

- **Interactive Buttons**: When the buttons within the mini card are clicked:
  The background color of the clicked button toggles between #7AB800 (a shade of
  green) and #CC292B (a shade of red). This provides a visual feedback mechanism
  for user interaction.
- **Nunito Font**: The project utilizes the Nunito font, contributing to a clean
  and readable user interface.

### Observations

- **DRY Principles in Styling**: The style.scss file effectively employs Sass
  variables to avoid repetition (Don't Repeat Yourself), promoting consistency
  and easier maintenance of styles.
- **Mobile-First Styling with Mixin**: A Sass @mixin is used to encapsulate
  styles specifically applied when the screen width is small (mobile devices),
  likely following a mobile-first approach to responsive design.
- **Code Reusability with Extend**: The Sass @extend rule is utilized to share
  properties between different CSS selectors, further reducing code duplication
  and enhancing style consistency.
