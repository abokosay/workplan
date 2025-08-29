import React, { useState } from "react";
import { motion } from "framer-motion";
import PhaseColumn from "./PhaseColumn";

// This data was previously in PhaseSection.jsx
const phaseData = {
  "1. التخطيط وتحليل المتطلبات": [
    { name: "الهدف: وضع أساس المشروع قبل أي برمجة", icon: "🎯", tasks: [] },
    { name: "تحديد نوع النظام", icon: "⚙️", tasks: ["POS (نقطة بيع)", "KDS (شاشة المطبخ)", "PWA للزبون (طلب، دليفري، تيك أواي)", "لوحة إدارة للمطعم + لوحة سوبر أدمن للتحكم بكل العملاء"] },
    { name: "تحديد نوع الـ Multi-Tenant", icon: "🏢", tasks: ["Database per Tenant أو Shared Database with Tenant ID"] },
    { name: "رسم الـ User Flow لكل دور", icon: "🌊", tasks: ["Customer", "Delivery Guy", "Manager", "Admin (لكل مطعم)", "Super Admin (للنظام ككل)"] },
    { name: "اختيار التقنيات", icon: "💻", tasks: ["Frontend: React / Next.js (مع Tailwind أو Material UI)", "Backend: Node.js (NestJS أو Express)", "Database: PostgreSQL أو MongoDB", "PWA: React + Workbox", "Hosting: Docker + AWS / DigitalOcean", "Payments: Stripe أو PayPal أو بوابات محلية", "Notifications: Firebase Cloud Messaging + Twilio (SMS) + Nodemailer (Email)"] }
  ],
  "2. تصميم الـ Database و الـ Multi-Tenant Architecture": [
    { name: "الهدف: هيكل بيانات قابل للتوسع", icon: "🎯", tasks: [] },
    { name: "جداول رئيسية", icon: "🗂️", tasks: ["restaurants (بيانات كل مطعم)", "menus (قائمة الطعام)", "orders (الطلبات)", "users (الزبائن + الطاقم)", "roles (صلاحيات: manager, chef, delivery, admin)", "payments (تفاصيل الدفع)", "notifications (سجل الإشعارات)"] },
    { name: "إضافة Tenant ID", icon: "🔑", tasks: ["إضافة Tenant ID في كل جدول لربط البيانات بالمطعم المناسب."] },
    { name: "تصميم العلاقات", icon: "🔗", tasks: ["تصميم علاقات واضحة مع Indexes للأداء العالي."] }
  ],
  "3. تصميم الـ UI/UX والهوية": [
    { name: "الهدف: واجهة جذابة وسهلة الاستخدام", icon: "🎯", tasks: [] },
    { name: "واجهات النظام", icon: "🖥️", tasks: ["واجهة POS لموظف الكاشير (شاشة لمس – سريعة)", "واجهة KDS (عرض الطلبات في المطبخ مع تحديث لحظي)", "لوحة تحكم المطعم: إدارة القائمة، متابعة الطلبات، التقارير.", "لوحة سوبر أدمن: إدارة جميع العملاء، تفعيل/إيقاف المطاعم."] },
    { name: "PWA للزبائن", icon: "📱", tasks: ["تصفح القائمة", "إضافة للسلة", "اختيار التوصيل أو الاستلام", "الدفع", "تتبع الطلب"] },
    { name: "تصميم الهوية المرنة", icon: "🎨", tasks: ["تصميم الهوية بحيث يمكن تغيير الألوان والشعار لكل عميل بسهولة (Theme Config)."] }
  ],
  "4. البنية الخلفية (Backend API)": [
    { name: "الهدف: API آمنة ومرنة", icon: "🎯", tasks: [] },
    { name: "بنية الـ API", icon: "🏗️", tasks: ["REST أو GraphQL API مع Authentication JWT + Refresh Tokens."] },
    { name: "عزل بيانات المستأجرين", icon: "🔒", tasks: ["Middleware لفصل بيانات كل مطعم (Tenant Isolation)."] },
    { name: "التحديث اللحظي", icon: "⚡", tasks: ["دعم WebSockets أو Firebase Realtime للتحديث الفوري للطلبات."] },
    { name: "Endpoints رئيسية", icon: "🔌", tasks: ["Auth (تسجيل دخول/خروج)", "Orders (CRUD)", "Menu (CRUD)", "Payments (Stripe/PayPal Integration)", "Notifications (Push/SMS/Email)"] }
  ],
  "5. تطوير الواجهة الأمامية (Frontend)": [
    { name: "الهدف: تطبيقات متكاملة لكل نوع مستخدم", icon: "🎯", tasks: [] },
    { name: "POS App", icon: "🛍️", tasks: ["واجهة سريعة للعملاء الداخليين (React + Electron أو PWA)"] },
    { name: "KDS App", icon: "🍳", tasks: ["عرض الطلبات حسب الوقت والحالة."] },
    { name: "Admin Dashboard", icon: "📊", tasks: ["إدارة المطعم وإعداداته."] },
    { name: "Super Admin Dashboard", icon: "👑", tasks: ["إدارة النظام ككل."] },
    { name: "Customer PWA", icon: "🤳", tasks: ["الطلب والدفع وتتبع الطلب."] }
  ],
  "6. الدفع الإلكتروني والإشعارات": [
    { name: "الهدف: تجربة طلب متكاملة", icon: "🎯", tasks: [] },
    { name: "دمج بوابات الدفع", icon: "💳", tasks: ["دمج Stripe/PayPal + بوابات محلية (Hyperpay, PayTabs...)"] },
    { name: "إشعارات الطلب", icon: "🔔", tasks: ["Push (Firebase)", "SMS (Twilio أو مزود محلي)", "Email (Nodemailer)"] }
  ],
  "7. الاختبار والجودة": [
    { name: "الهدف: التأكد من استقرار النظام", icon: "🎯", tasks: [] },
    { name: "أنواع الاختبارات", icon: "🔬", tasks: ["اختبارات وحدة (Unit Tests) لكل API.", "اختبارات تكامل (Integration Tests).", "اختبارات أداء (Load Testing)."] },
    { name: "محاكاة السيناريوهات", icon: "🎭", tasks: ["محاكاة لسيناريوهات الطلب الحقيقية."] }
  ],
  "8. النشر والصيانة": [
    { name: "الهدف: إطلاق النظام ومتابعته", icon: "🎯", tasks: [] },
    { name: "النشر التلقائي (CI/CD)", icon: "🚀", tasks: ["إعداد CI/CD للنشر التلقائي."] },
    { name: "مراقبة النظام", icon: "📈", tasks: ["مراقبة النظام (Monitoring + Logging)."] },
    { name: "الصيانة الدورية", icon: "🛠️", tasks: ["تحديثات أمنية دورية."] }
  ]
};

const boardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function KanbanBoard() {
  const [expandedCard, setExpandedCard] = useState(null);

  const handleCardClick = (cardData) => {
    if (expandedCard === cardData) {
      setExpandedCard(null);
    } else {
      setExpandedCard(cardData);
    }
  };

  return (
    <motion.div
      className="kanban-board"
      variants={boardVariants}
      initial="hidden"
      animate="visible"
    >
      {Object.entries(phaseData).map(([phaseTitle, components]) => (
        <PhaseColumn
          key={phaseTitle}
          title={phaseTitle}
          components={components}
          expandedCard={expandedCard}
          onCardClick={handleCardClick}
        />
      ))}
    </motion.div>
  );
}

export default KanbanBoard;
