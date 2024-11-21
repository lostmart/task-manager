# Task Manager Frontend

This repository contains the frontend of a Task Manager application built with **React**, **TypeScript**, and **Vite**. It uses **Tailwind CSS** for styling, with custom theme styles and extended classes for enhanced customization.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Customizations](#customizations)
  - [Extended Tailwind Classes](#extended-tailwind-classes)
  - [Theme Styles](#theme-styles)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **React + TypeScript**: Strongly typed, modular, and efficient codebase.
- **Vite**: Lightning-fast bundler for development and production.
- **Tailwind CSS**: Fully customizable and responsive utility-based styling.
- **Custom Themes**: Predefined color themes for easy component styling.
- **Extended Tailwind Classes**: Additional utilities for font size, line height, and min height.

---

## Technologies Used

- **React** with **TypeScript**
- **Vite**
- **Tailwind CSS**
- **CSS Modules**

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (>= 14.x)
- **npm** or **yarn**

### Installation

1. Fork the repository:

```bash
   git clone https://github.com/web-rest-api/task_manager_front.git
```

2. Navigate to the project directory:

```bash
cd task_manager_front
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The application will be available at http://localhost:5173.

## Customizations

### Extended Tailwind Classes

This project extends Tailwind CSS with the following custom classes:

```javascript
{
	fontSize: {
		"5xl": "42px",
	},
	minHeight: {
		32: "7.75rem",
		80: "82dvh",
	},
	lineHeight: {
		subTitle: "50px", // Add custom line-height
	},
}
```

## Theme Styles

The project defines custom themes in styles.ts for consistent and reusable styling across components:

```typescript
export const themeStyles = {
	primary: {
		background: "bg-green-600",
		text: "text-zinc-100",
	},
	secondary: {
		background: "bg-purple-600",
		text: "text-zinc-100",
	},
	third: {
		background: "bg-yellow-500",
		text: "text-zinc-900",
	},
	danger: {
		background: "bg-red-700",
		text: "text-zinc-100",
	},
	neutral: {
		background: "bg-zinc-700",
		text: "text-zinc-100",
	},
}
```

## Usage

To apply a theme to a component, use the themeStyles object. For example:

```typescript
import { themeStyles } from "./styles"

interface ButtonProps {
	text: string
	onClick: () => void
	theme?: keyof typeof themeStyles // "primary" | "secondary" | "third" | "danger" | "neutral"
}

const ButtonComp: React.FC<ButtonProps> = ({
	text,
	onClick,
	theme = "primary",
}) => {
	const { background, text: textColor } = themeStyles[theme]

	const handleClick = () => {
		onClick()
	}

	return (
		<button
			className={`h-12 w-48 text-shadow ${background} ${textColor}`}
			onClick={handleClick}
		>
			{text}
		</button>
	)
}
```
