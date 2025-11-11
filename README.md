# Volatrax Digital Services - Full Project Description

This is a complete web application for Volatrax Digital Services, a trusted company offering professional trading courses and account management services. The site is built with a modern tech stack and designed to be performant, user-friendly, and responsive.

## Key Features

The website is packed with features designed to attract, inform, and convert customers:

1.  **Homepage:** A comprehensive landing page that includes:
    *   A compelling hero section to grab visitors' attention.
    *   An overview of key services (Account Management & Trading Courses).
    *   A "Why Choose Us?" section highlighting brand strengths like smart strategies, transparent terms, and an expert team.
    *   A call-to-action section to encourage users to join the free trading signal group via WhatsApp.

2.  **Courses Platform:**
    *   **Courses Page:** Displays all available trading courses (both free and paid) in a clean card layout.
    *   **Dynamic Course Detail Pages:** Each course has its own dedicated page with a detailed description, price, and a relevant call to action.
    *   **Paid Course Enrollment:** For paid courses, a step-by-step enrollment system is implemented, including payment instructions (Sadapay), a screenshot upload feature, and a final confirmation step via WhatsApp.

3.  **Account Management Page:**
    *   Details two distinct service tiers: Small Account Management and Big Account Management.
    *   Each tier clearly lists its rules and benefits.
    *   Includes dedicated WhatsApp contact buttons for each service, pre-filled with a relevant message.

4.  **VIP Signal Group Page:**
    *   A dedicated pricing page showcasing various subscription plans for the VIP signal group (from a free demo to lifetime access).
    *   Each plan is presented in a feature card, with a "Most Popular" badge to highlight the recommended option.
    *   Each plan has a WhatsApp button for easy subscription.

5.  **About Us Page:**
    *   Builds trust and credibility by telling the story behind Volatrax.
    *   Introduces the core team members with their photos, roles, and biographies.
    *   Reinforces the company's mission and vision.

6.  **FAQ Page:**
    *   A frequently asked questions page with an accordion-style layout for a clean user experience.
    *   Answers common questions about services, payments, and trading concepts to reduce user friction.

7.  **Genkit AI Integration:**
    *   Uses Google's Genkit to power an AI flow that dynamically generates personalized, pre-filled WhatsApp messages based on the course or service the user is interested in.

8.  **User Experience & Design:**
    *   **Light/Dark Mode:** A theme toggle allows users to switch between light and dark modes for comfortable viewing.
    *   **Responsive Design:** The entire site is fully responsive and optimized for a seamless experience on desktops, tablets, and mobile devices.
    *   **Modern UI:** Built with ShadCN UI components and styled with Tailwind CSS for a professional and modern aesthetic.
    *   **Consistent Branding:** Uses a consistent color scheme and typography across the entire site. The primary font used is **Inter**.

9.  **Deployment Ready:**
    *   Includes a `netlify.toml` file to ensure correct deployment and routing on the Netlify platform, solving common "404 Not Found" issues with Next.js apps.

## Technology Stack

-   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **UI Library:** [React](https://reactjs.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Component Library:** [ShadCN UI](https://ui.shadcn.com/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **AI/Generative:** [Google Genkit](https://firebase.google.com/docs/genkit)
-   **Deployment:** [Netlify](https://www.netlify.com/)

## Project Structure

The project follows a standard Next.js App Router structure:

-   `src/app/`: Contains all the pages and routes of the application.
    -   `layout.tsx`: The root layout for the entire application.
    -   `page.tsx`: The homepage.
    -   `about/`, `courses/`, `faq/`, etc.: Subdirectories for each page.
-   `src/components/`: Contains all reusable React components.
    -   `ui/`: Auto-generated ShadCN UI components.
    *   `layout/`: Components specific to the site layout, like `Header` and `Footer`.
    *   Other custom components like `CourseCard.tsx` and `PaymentHandler.tsx`.
-   `src/lib/`: Contains library code, utilities, and data.
    -   `courses.ts`: The data source for all trading courses.
    -   `placeholder-images.json`: A centralized file for managing placeholder image data.
-   `src/ai/`: Contains all Genkit-related code for AI features.
    -   `flows/`: Defines the AI-powered workflows.
-   `public/`: For static assets (though none are used directly in this project, as images are sourced from Unsplash/Picsum).
-   `netlify.toml`: Configuration file for deploying to Netlify.
