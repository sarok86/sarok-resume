import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "fa",
  resources: {
    en: {
      translation: {
        title: "Saruk",
        homePage: {
          abouttitle: "About me",
          div1: {
            v1: "17 years old",
            v2: "Sanandaj",
          },
          p: "Hello i'm Sarok and i have experienced in web developer .I'm 17 years old .i have watched more than 100 hours for being good in web programmerExperienced Web Developer with passion for creating attractive and interactive websites meeting customer needs andexceeding expectations. ",
          servicetitle: "my services",
          div2: {
            div1: {
              p1: "Development",
              p2: "Building a custom solution based on your technical specification.",
            },
            div2: {
              p1: "SEO optimization",
              p2: "I want to Audit your website, perform technical improvements and write meta tags of your site",
            },
            div3: {
              p1: "Data base",
              p2: "SSL certificate installation and configuration, redirection configuration on your website",
            },
            div4: {
              p1: "Data security",
              p2: "Strategy with leading data protection technology to safeguard your critical data.",
            },
          },
          principeltitle: "principal facts",
          div3: {
            div1: { p1: 10, p2: "successful projects" },
            div2: { p1: 10, p2: "happy clients" },
            div3: { p1: 10, p2: "awards won" },
            div4: { p1: 10, p2: "keyboards broken" },
          },
        },
      },
    },
    fa: {
      translation: {
        title: "سروک",
        homePage: {
          abouttitle: "درباره من",
          div1: {
            v1: "17 ساله",
            v2: "سنندج",
          },
          p: "سلام من سروک هستم و در زمینه توسعه وب تجربه دارم. 17 ساله هستم. بیش از 100 ساعت برای خوب بودن در برنامه نویس وب برنامه نویس وب مجرب با اشتیاق برای ایجاد وب سایت های جذاب و تعاملی با نیازهای مشتری و فراتر از انتظارات تماشا کرده ام.",
          servicetitle: "خدمات من",
          div2: {
            div1: {
              p1: "توسعه",
              p2: "ساخت یک راه حل سفارشی بر اساس مشخصات فنی شما",
            },
            div2: {
              p1: "بهینه سازی سئو",
              p2: "من وب سایت شما را بررسی می کنم، بهبودهای فنی را انجام می دهم و متا تگ های سایت شما را می نویسم",
            },
            div3: {
              p1: "پایگاه داده",
              p2: "نصب و پیکربندی گواهینامه SSL، پیکربندی تغییر مسیر در وب سایت شما",
            },
            div4: {
              p1: "امنیت داده ها",
              p2: "استراتژی با فناوری پیشرو حفاظت از داده ها برای محافظت از داده های حیاتی شما",
            },
          },
          principeltitle: "حقایق اصلی",
          div3: {
            div1: { p1: 10, p2: "پروژه های موفق" },
            div2: { p1: 10, p2: "مشتریان خوشحال" },
            div3: { p1: 10, p2: "جوایز کسب کرد" },
            div4: { p1: 10, p2: "صفحه کلید شکسته" },
          },
        },
      },
    },
    ku: {
      translation: {
        title: "سەرۆک",
        homePage: {
          abouttitle: "دەربارەی من",
          div1: {
            v1: "تەمەن ١٧ ساڵ",
            v2: "سنە",
          },
          p: "سڵاو من سەرۆک و ئەزموونم هەیە لە بواری پەرەپێدانی وێبدا. من تەمەنم ١٧ ساڵە. زیاتر لە ١٠٠ کاتژمێر چاودێریم کردووە بۆ ئەوەی باش بم لە گەشەپێدەری وێب گەشەپێدەرێکی بە ئەزموونی وێب کە خولیای دروستکردنی ماڵپەڕی سەرنجڕاکێش و کارلێککارانەی هەیە کە پێداویستییەکانی کڕیار دابین بکات و چاوەڕوانییەکان تێپەڕێنێت.",
          servicetitle: "خزمەتگوزارییەکانم",
          div2: {
            div1: {
              p1: "پەرەپێدان",
              p2: "دروستکردنی چارەسەرێکی تایبەت بەخۆت لەسەر بنەمای تایبەتمەندی تەکنیکی خۆت",
            },
            div2: {
              p1: "باشکردنی SEO",
              p2: "من دەمەوێت وردبینی لە ماڵپەڕەکەت بکەم، باشترکردنی تەکنیکی ئەنجام بدەم و مێتا تاگی ماڵپەڕەکەت بنووسم",
            },
            div3: {
              p1: "بنکەدراوە",
              p2: "دامەزراندنی بڕوانامەی SSL و ڕێکخستن، ڕێکخستنی ئاڕاستەکردنەوە لە ماڵپەڕەکەتدا",
            },
            div4: {
              p1: "ئاسایشی داتا",
              p2: "ستراتیژی لەگەڵ تەکنەلۆژیای پێشەنگی پاراستنی زانیاری بۆ پاراستنی زانیارییە گرنگەکانت.",
            },
          },
          principeltitle: "ڕاستییە سەرەکییەکان",
          div3: {
            div1: { p1: 10, p2: "پڕۆژەی سەرکەوتوو" },
            div2: { p1: 10, p2: "موکلیمانی دڵخۆش" },
            div3: { p1: 10, p2: "خەڵاتەکان بەدەست هێنران" },
            div4: { p1: 10, p2: "کیبۆردەکان شکاون" },
          },
        },
      },
    },
  },
});

export default i18next;
