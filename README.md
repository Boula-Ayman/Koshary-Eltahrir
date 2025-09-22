# مرحباً بك في React Router!

قالب حديث وجاهز للإنتاج لبناء تطبيقات React كاملة المكدس باستخدام React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## المميزات

- 🚀 التقديم من جانب الخادم
- ⚡️ استبدال الوحدات الساخنة (HMR)
- 📦 تجميع وتحسين الأصول
- 🔄 تحميل البيانات والطفرات
- 🔒 TypeScript بشكل افتراضي
- 🎉 TailwindCSS للتصميم
- 📖 [وثائق React Router](https://reactrouter.com/)

## البدء

### التثبيت

قم بتثبيت التبعيات:

```bash
npm install
```

### التطوير

ابدأ خادم التطوير مع HMR:

```bash
npm run dev
```

سيكون تطبيقك متاحاً على `http://localhost:5173`.

## البناء للإنتاج

أنشئ نسخة الإنتاج:

```bash
npm run build
```

## النشر

### النشر باستخدام Docker

لبناء وتشغيل باستخدام Docker:

```bash
docker build -t my-app .

# تشغيل الحاوية
docker run -p 3000:3000 my-app
```

يمكن نشر التطبيق المحاوي على أي منصة تدعم Docker، بما في ذلك:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### النشر اليدوي

إذا كنت معتاداً على نشر تطبيقات Node، فإن خادم التطبيق المدمج جاهز للإنتاج.

تأكد من نشر مخرجات `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # الأصول الثابتة
│   └── server/    # كود جانب الخادم
```

## التصميم

يأتي هذا القالب مع [Tailwind CSS](https://tailwindcss.com/) مُعد مسبقاً لتجربة بداية بسيطة. يمكنك استخدام أي إطار عمل CSS تفضله.

---

مبني بـ ❤️ باستخدام React Router.
