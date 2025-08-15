import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const phaseData = {
  "1. التخطيط وتحليل المتطلبات": [
    { name: "الهدف: وضع أساس المشروع قبل أي برمجة", icon: "🎯", tasks: ["تحديد الأهداف الرئيسية للنظام.", "تحليل الجمهور المستهدف.", "وضع خطة عمل أولية."] },
    { name: "تحديد نوع النظام", icon: "⚙️", tasks: ["بناء نظام نقاط بيع (POS) متكامل.", "تطوير شاشة عرض للمطبخ (KDS) لتتبع الطلبات.", "إنشاء تطبيق ويب تقدمي (PWA) للعملاء للطلب والتوصيل.", "تصميم لوحة تحكم لإدارة المطاعم ولوحة تحكم عليا لإدارة جميع العملاء."] },
    { name: "تحديد نوع الـ Multi-Tenant", icon: "🏢", tasks: ["الاختيار بين قاعدة بيانات منفصلة لكل عميل (Database per Tenant) لضمان العزل التام، أو قاعدة بيانات مشتركة مع `Tenant ID` لسهولة الإدارة."] },
    { name: "رسم الـ User Flow لكل دور", icon: "🌊", tasks: ["تصميم رحلة المستخدم للعميل (Customer) منذ دخوله التطبيق وحتى استلام الطلب.", "تحديد خطوات رجل التوصيل (Delivery Guy).", "واجهات مدير المطعم (Manager) لمتابعة الأداء.", "صلاحيات الأدمن (Admin) لكل مطعم.", "واجهة السوبر أدمن (Super Admin) للتحكم الكامل."] },
    { name: "اختيار التقنيات", icon: "💻", tasks: ["الواجهة الأمامية (Frontend): استخدام React أو Next.js مع Tailwind CSS لتصميم مرن.", "الواجهة الخلفية (Backend): بناء API قوي باستخدام Node.js مع NestJS.", "قاعدة البيانات (Database): الاعتماد على PostgreSQL لقوة العلاقات أو MongoDB لمرونة التعامل مع البيانات.", "بوابات الدفع (Payments): دمج Stripe و PayPal مع بوابات دفع محلية.", "الإشعارات (Notifications): استخدام Firebase للموبايل و Twilio للـ SMS."] }
  ],
  "2. تصميم الـ Database و الـ Multi-Tenant Architecture": [
    { name: "الهدف: هيكل بيانات قابل للتوسع", icon: "🎯", tasks: ["بناء أساس قوي للبيانات يدعم نمو النظام وإضافة ميزات جديدة بسهولة."] },
    { name: "جداول رئيسية", icon: "🗂️", tasks: ["تصميم جدول `restaurants` لتخزين معلومات كل مطعم.", "جدول `menus` للقوائم والأصناف.", "جدول `orders` لتتبع جميع الطلبات وحالاتها.", "جدول `users` لحسابات العملاء والموظفين.", "جدول `roles` لتحديد صلاحيات المستخدمين.", "جدول `payments` لتسجيل عمليات الدفع.", "جدول `notifications` لأرشفة الإشعارات المرسلة."] },
    { name: "إضافة Tenant ID", icon: "🔑", tasks: ["إضافة عمود `tenant_id` في كل الجداول المتعلقة ببيانات العملاء لضمان عزل البيانات بشكل فعال وآمن."] },
    { name: "تصميم العلاقات", icon: "🔗", tasks: ["ربط الجداول بعلاقات منطقية (One-to-Many, Many-to-Many) واستخدام Indexes لتسريع عمليات البحث والاستعلام."] }
  ],
  "3. تصميم الـ UI/UX والهوية": [
    { name: "الهدف: واجهة جذابة وسهلة الاستخدام", icon: "🎯", tasks: ["التركيز على تجربة مستخدم سلسة وتصميم جذاب يعكس هوية كل مطعم."] },
    { name: "واجهات النظام", icon: "🖥️", tasks: ["تصميم واجهة POS تدعم شاشات اللمس وتتميز بالسرعة في إدخال الطلبات.", "تصميم واجهة KDS تعرض الطلبات بوضوح مع تحديثات لحظية لحالة كل طلب.", "لوحة تحكم للمطعم تتيح إدارة سهلة للقائمة، متابعة حية للطلبات، وتقارير أداء تفصيلية."] },
    { name: "PWA للزبائن", icon: "📱", tasks: ["تصميم تطبيق ويب للعملاء يتيح تصفح القائمة بسهولة، إضافة المنتجات للسلة، إتمام عملية الدفع، وتتبع حالة الطلب خطوة بخطوة."] },
    { name: "تصميم الهوية المرنة", icon: "🎨", tasks: ["إنشاء نظام تصميم (Theme Config) يسمح بتغيير الألوان، الخطوط، والشعار بسهولة لكل عميل (مطعم) على حدة."] }
  ],
  "4. البنية الخلفية (Backend API)": [
    { name: "الهدف: API آمنة ومرنة", icon: "🎯", tasks: ["تطوير واجهة برمجية (API) قوية، آمنة، وقادرة على التعامل مع جميع عمليات النظام بكفاءة."] },
    { name: "بنية الـ API", icon: "🏗️", tasks: ["استخدام REST أو GraphQL API وتأمينها باستخدام JWT (JSON Web Tokens) مع Refresh Tokens لضمان صلاحيات الدخول."] },
    { name: "عزل بيانات المستأجرين", icon: "🔒", tasks: ["تطبيق Middleware على مستوى الـ API يقوم بالتحقق من `tenant_id` لكل طلب لضمان عدم وصول أي مطعم لبيانات مطعم آخر."] },
    { name: "التحديث اللحظي", icon: "⚡", tasks: ["استخدام WebSockets أو Firebase Realtime Database لتوفير تحديثات فورية للطلبات على شاشة KDS وتطبيقات العملاء."] },
    { name: "Endpoints رئيسية", icon: "🔌", tasks: ["تطوير Endpoints لإدارة عمليات المصادقة (Auth)، الطلبات (Orders)، القوائم (Menu)، الدفع (Payments)، والإشعارات (Notifications)."] }
  ],
  "5. تطوير الواجهة الأمامية (Frontend)": [
    { name: "الهدف: تطبيقات متكاملة لكل نوع مستخدم", icon: "🎯", tasks: ["بناء واجهات مستخدم تفاعلية وسريعة لكل دور في النظام."] },
    { name: "POS App", icon: "🛍️", tasks: ["تطوير تطبيق نقاط البيع كـ PWA ليعمل على أي جهاز أو كتطبيق سطح مكتب باستخدام Electron."] },
    { name: "KDS App", icon: "🍳", tasks: ["بناء تطبيق شاشة المطبخ الذي يعرض الطلبات الجديدة ويعكس حالتها (قيد التحضير، جاهز) بشكل فوري."] },
    { name: "Admin Dashboard", icon: "📊", tasks: ["تطوير لوحة تحكم للمطعم تتيح له إدارة كل جوانب عمله من قائمته إلى تقاريره المالية."] },
    { name: "Super Admin Dashboard", icon: "👑", tasks: ["بناء لوحة تحكم للسوبر أدمن تمنحه القدرة على إدارة الاشتراكات، إضافة مطاعم جديدة، ومراقبة أداء النظام ككل."] },
    { name: "Customer PWA", icon: "🤳", tasks: ["تطوير تطبيق العميل للطلب والدفع مع ميزات مثل حفظ العناوين، سجل الطلبات، وتتبع التوصيل."] }
  ],
  "6. الدفع الإلكتروني والإشعارات": [
    { name: "الهدف: تجربة طلب متكاملة", icon: "🎯", tasks: ["توفير تجربة دفع سلسة وإبقاء العميل على اطلاع دائم بحالة طلبه."] },
    { name: "دمج بوابات الدفع", icon: "💳", tasks: ["الربط مع بوابات دفع عالمية مثل Stripe و PayPal، بالإضافة إلى دعم بوابات الدفع المحلية لتلبية احتياجات أسواق مختلفة."] },
    { name: "إشعارات الطلب", icon: "🔔", tasks: ["إرسال إشعارات Push عبر Firebase عند تحديث حالة الطلب.", "إرسال رسائل SMS عبر Twilio لتأكيد الطلب أو عند اقتراب التوصيل.", "إرسال فواتير وإيصالات عبر البريد الإلكتروني (Email)."] }
  ],
  "7. الاختبار والجودة": [
    { name: "الهدف: التأكد من استقرار النظام", icon: "🎯", tasks: ["ضمان خلو النظام من الأخطاء وتقديم منتج موثوق وعالي الجودة."] },
    { name: "أنواع الاختبارات", icon: "🔬", tasks: ["كتابة اختبارات الوحدة (Unit Tests) للتحقق من كل دالة في الـ API بشكل منفصل.", "إجراء اختبارات التكامل (Integration Tests) للتأكد من أن أجزاء النظام تعمل معًا بشكل صحيح.", "تنفيذ اختبارات الأداء (Load Testing) لمحاكاة الضغط العالي على النظام."] },
    { name: "محاكاة السيناريوهات", icon: "🎭", tasks: ["اختبار سيناريوهات واقعية مثل انقطاع الإنترنت أثناء الطلب، التعامل مع عمليات الدفع الفاشلة، وتحديث القائمة أثناء عمل النظام."] }
  ],
  "8. النشر والصيانة": [
    { name: "الهدف: إطلاق النظام ومتابعته", icon: "🎯", tasks: ["نشر النظام على خوادم الإنتاج وضمان عمله بشكل مستمر ومستقر."] },
    { name: "النشر التلقائي (CI/CD)", icon: "🚀", tasks: ["إعداد نظام CI/CD باستخدام أدوات مثل Jenkins أو GitHub Actions لنشر التحديثات الجديدة بشكل تلقائي وآمن."] },
    { name: "مراقبة النظام", icon: "📈", tasks: ["استخدام أدوات مراقبة (Monitoring) لتتبع أداء الخوادم واكتشاف الأخطاء، مع تسجيل جميع الأنشطة (Logging) لتسهيل عملية التصحيح."] },
    { name: "الصيانة الدورية", icon: "🛠️", tasks: ["جدولة تحديثات أمنية دورية، أخذ نسخ احتياطية من قاعدة البيانات، وتحسين أداء النظام بناءً على بيانات المراقبة."] }
  ]
};

function PhaseSection({ phase, isOpen, onPhaseClick, expandedCard, onCardClick }) {
  const components = phaseData[phase] || [];

  return (
    <motion.div layout className={`phase-section ${isOpen ? "open" : ""}`}>
      <motion.h2 layout onClick={() => onPhaseClick(phase)}>{phase}</motion.h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="component-grid"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {components.map((comp, idx) => (
              <motion.div
                key={idx}
                layout
                className={`component-card ${expandedCard === comp ? "expanded" : ""}`}
                onClick={() => onCardClick(comp)}
              >
                <div className="component-icon">{comp.icon}</div>
                <div className="component-name">{comp.name}</div>
                  <AnimatePresence>
                    {expandedCard === comp && comp.tasks.length > 0 && (
                      <motion.div
                        className="task-list"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul>
                          {comp.tasks.map((task, taskIdx) => (
                            <li key={taskIdx}>{task}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default PhaseSection;
