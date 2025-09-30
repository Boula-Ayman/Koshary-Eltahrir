import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <section className="max-w-6xl mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#8dc88c] mb-8">
          عن كشري التحرير
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <img
            src="/images/cover.png"
            alt="كشري التحرير"
            className="rounded-2xl shadow-lg object-cover h-80 w-full"
          />

          {/* Content */}
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              من أول يوم فتحنا فيه أبوابنا، كان هدفنا البسيط هو تقديم أحلى طبق
              كشري مصري أصيل، بمكونات طازة ونكهة ما تتنسيش. كشري التحرير بقى
              علامة مميزة لكل عشاق الأكل الشعبي الأصيل.
            </p>
            <p className="text-gray-700 leading-relaxed">
              سواء كنت من سكان القاهرة أو زائر لأول مرة، إحنا هنا عشان نقدم لك
              تجربة مليانة طعم ودفء البيت المصري.
            </p>
            <p className="text-gray-900 font-semibold">
              ❤️ كشري التحرير.. أكلة مصرية بطعم البيت.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
