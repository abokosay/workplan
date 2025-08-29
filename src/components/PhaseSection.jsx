import React from "react";
import styles from "../styles/PhaseSection.module.css";

// Full system phases data
const phaseData = {
  "POS / Point of Sale": [
    {
      name: "Select Customer & Type",
      icon: "👤",
      tasks: [
        "Choose Dine-in / Pickup / Delivery",
        "Assign table if Dine-in",
        "Link order to customer profile"
      ]
    },
    {
      name: "Add Products to Order",
      icon: "🛒",
      tasks: [
        "Browse product catalog",
        "Hover highlights product",
        "Click to add quantity"
      ]
    },
    {
      name: "Modify / Delete Items",
      icon: "✏️",
      tasks: [
        "Edit quantity or options",
        "Remove unwanted items",
        "Visual feedback on change"
      ]
    },
    {
      name: "Payment",
      icon: "💳",
      tasks: [
        "Select payment method (Cash/Card/E-wallet)",
        "Generate receipt",
        "Mark order as paid"
      ]
    },
    {
      name: "Notifications",
      icon: "🔔",
      tasks: [
        "Notify KDS about new order",
        "Show confirmation on POS",
        "Alert staff for changes"
      ]
    },
  ],
  "KDS / Kitchen Display System": [
    {
      name: "Pending Orders",
      icon: "🕒",
      tasks: [
        "Display new orders in Pending column",
        "Animate fade-in on arrival",
        "Color-code based on priority"
      ]
    },
    {
      name: "Ready Orders",
      icon: "✅",
      tasks: [
        "Move order from Pending to Ready",
        "Animate slide transition",
        "Notify POS and customer"
      ]
    },
    {
      name: "Chef Characters",
      icon: "👨‍🍳",
      tasks: [
        "Animate small chef character preparing order",
        "Enhance visual feedback",
        "Optional Lottie animations"
      ]
    },
  ],
  "Admin Dashboard": [
    {
      name: "Multi-Tenant Management",
      icon: "🏢",
      tasks: [
        "Add / edit / remove restaurants",
        "Assign users and roles per restaurant",
        "Secure data per tenant"
      ]
    },
    {
      name: "Reports & Analytics",
      icon: "📊",
      tasks: [
        "Daily / Weekly / Monthly sales",
        "Order performance metrics",
        "Revenue and payment overview"
      ]
    },
    {
      name: "Notifications Setup",
      icon: "✉️",
      tasks: [
        "Email alerts for orders and promotions",
        "SMS notifications for status updates",
        "Configure templates"
      ]
    },
  ],
  "Customer PWA (Delivery / Pickup)": [
    {
      name: "Choose Order Type",
      icon: "🏍️",
      tasks: [
        "Select Delivery or Pickup",
        "Enter delivery address",
        "Assign customer profile if logged in"
      ]
    },
    {
      name: "Add to Cart",
      icon: "🛍️",
      tasks: [
        "Select products and quantities",
        "Show feedback animation on addition",
        "Update cart totals dynamically"
      ]
    },
    {
      name: "Checkout & Payment",
      icon: "💰",
      tasks: [
        "Confirm items and address",
        "Select payment method",
        "Show confirmation animation"
      ]
    },
    {
      name: "Order Status",
      icon: "📦",
      tasks: [
        "Receive notifications on order progress",
        "Track order in real-time",
        "Show estimated delivery time"
      ]
    },
  ],
  "Payment Integration": [
    {
      name: "Transactions",
      icon: "💳",
      tasks: [
        "Handle cash / card / e-wallet",
        "Log all payment details",
        "Show success/failure feedback"
      ]
    },
    {
      name: "Receipts",
      icon: "🧾",
      tasks: [
        "Generate digital receipt",
        "Send email/SMS receipt",
        "Store record in database"
      ]
    },
  ],
  "Notifications (Email & SMS)": [
    {
      name: "Order Updates",
      icon: "📧",
      tasks: [
        "Notify customers on new order",
        "Alert on ready order",
        "Provide ETA for delivery"
      ]
    },
    {
      name: "Promotions / Announcements",
      icon: "📢",
      tasks: [
        "Send special offers",
        "Schedule campaigns",
        "Track open/click rates"
      ]
    },
  ],
  "UI/UX & Animation": [
    {
      name: "Interactive Feedback",
      icon: "🎨",
      tasks: [
        "Hover / click effects on buttons",
        "Color transitions",
        "Animated responses for user actions"
      ]
    },
    {
      name: "Characters & Lottie",
      icon: "🤹",
      tasks: [
        "Animated chef or order characters",
        "Fade / Slide / Bounce transitions",
        "Enhance visual experience"
      ]
    },
  ],
};

// Component
function PhaseSection({ phase, onCardClick }) {
  const components = phaseData[phase] || [];

  return (
    <div className={styles.phaseSection}>
      <h2>{phase}</h2>
      <div className={styles.componentGrid}>
        {components.map((comp, idx) => (
          <div
            key={idx}
            className="component-card"
            onClick={() => onCardClick(comp)}
          >
            <div className="component-icon">{comp.icon}</div>
            <div className="component-name">{comp.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhaseSection;
