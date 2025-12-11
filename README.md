# 3D Developer Portfolio

A professional, immersive, and responsive developer portfolio website built with **React**, **Three.js**, and **Tailwind CSS**. This project showcases skills, experience, and projects through a visually stunning 3D interface.

![Portfolio Screenshot](./public/preview.png)
*(Note: Add a screenshot of your portfolio named `preview.png` in the `public` folder for this image to appear)*

## 🚀 Key Features

*   **Interactive 3D Graphics**: Utilizes **Three.js** and **React Three Fiber** to create engaging 3D visual elements.
*   **Modern & Responsive Design**: Styled with **Tailwind CSS** to ensure a seamless experience across all devices (Mobile, Tablet, Desktop).
*   **Smooth Animations**: Powered by **Framer Motion** for elegant entry animations and transitions.
*   **Dynamic Content**:
    *   **Hero Section**: Eye-catching 3D introduction.
    *   **About Section**: Overview of technical skills including Java, Python, Spring Boot, and more.
    *   **Experience Timeline**: An interactive vertical timeline detailing professional career history.
    *   **Projects Showcase**: Grid view of featured projects with details and links.
    *   **Contact Form**: Fully functional contact form.

## 🛠️ Technologies Used

### Frontend
*   **[React](https://reactjs.org/)** - JavaScript library for building user interfaces.
*   **[Three.js](https://threejs.org/)** - 3D library for the browser.
*   **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)** - React renderer for Three.js.
*   **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework.
*   **[Framer Motion](https://www.framer.com/motion/)** - Production-ready animation library for React.
*   **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling.

### Languages & Tools
*   **JavaScript (ES6+)**
*   **HTML5 & CSS3**
*   **Git & GitHub**

## 📦 Installation & Running Locally

Follow these steps to set up the project locally on your machine.

**Prerequisites**
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

1.  **Clone the repository**
    ```bash
    git clone https://github.com/AmeenGit077/ameen-intellect
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` (or the port shown in your terminal) to view the application.

## 📝 Configuration

### Content Updates
You can easily update the portfolio content by modifying the `src/constants/index.js` file. This file contains all the static data for:
*   Navigation Links
*   Services / Skills
*   Experience History
*   Projects
*   Testimonials (if applicable)

### 3D Models
3D models are located in the `public/` directory (e.g., `.gltf` or `.glb` files). You can replace them or load new ones via the components in `src/components/canvas/`.

## 📄 License

This project is currently unlicensed.

## 👤 Author

**Ameenur Rahman**
*   [LinkedIn](https://www.linkedin.com/)
*   [GitHub](https://github.com/AmeenGit077)

---

*This project was inspired by the 3D Portfolio tutorial by JavaScript Mastery.*
