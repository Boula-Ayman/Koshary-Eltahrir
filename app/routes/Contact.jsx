const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#8dc88c] mb-8">
        تواصل معنا
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            📍 العنوان: ميدان التحرير، القاهرة، مصر
          </p>
          <p className="text-gray-700">📞 الهاتف: 0100 123 4567</p>
          <p className="text-gray-700">📧 البريد: info@tahrirkoshary.com</p>

          <form className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="اسمك"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="بريدك الإلكتروني"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="رسالتك"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button className="bg-[#8dc88c] border border-#8dc88c text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
              إرسال
            </button>
          </form>
        </div>

        {/* Map */}
        <div className="h-80 w-full rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.156720572701!2d31.2357116151127!3d30.04441938188264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c2f0e123ab%3A0x8e1e86f48bb7d8a4!2z2YXZhti32KjZitmCINin2YTYqNmK2KfZg9mK2Ykg2KfZhNiq2YjZhNmK2Kkg2KfZhNiq2YjZhNmK2Kc!5e0!3m2!1sar!2seg!4v1694501234567!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Koshary Tahrir Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
