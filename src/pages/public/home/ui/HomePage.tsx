import { Header } from '@/widgets/Header/ui/Header';
import PetIllustration from '@/assets/images/Veterinary-bro.png';
import AboutPhoto from '@/assets/images/farm_animals-rafiki.svg';
import { Button } from '@/shared/ui/Button';

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-teal-50 text-slate-900">
      <Header />

      <main className="relative overflow-hidden">
        {/* Hero */}
        <section className="container mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
              Забота о <span className="text-teal-600">питомце</span> — по-новому
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              VetCard — единое пространство для медицинских записей, напоминаний и умного взаимодействия с вашим питомцем.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                to="/register"
                variant="primary"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
              >
                Попробовать бесплатно
              </Button>
              <Button
                to="/about"
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg"
              >
                Подробнее
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div className="md:w-1/2 relative">
            <img
              src={PetIllustration}
              alt="Pet care illustration"
              className="w-full max-w-md mx-auto drop-shadow-xl animate-fade-in"
            />
            <div className="absolute -z-10 top-[-80px] right-[-100px] w-[300px] h-[300px] bg-teal-100 rounded-full blur-3xl opacity-30"></div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Возможности VetCard</h2>
            <p className="text-slate-500 text-lg mb-12">Всё под контролем, без лишних хлопот.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Feature icon="🩺" title="Единая медкарта">
                Вся история болезней, прививок и процедур в одном месте.
              </Feature>
              <Feature icon="⏰" title="Напоминания">
                Умные уведомления о приёмах, лекарствах и прививках.
              </Feature>
              <Feature icon="🤖" title="AI-помощник">
                Советы по уходу и питанию на базе рекомендаций ветеринаров.
              </Feature>
            </div>
          </div>
        </section>

        {/* Farm Illustration Section */}
        <section className="py-24 bg-[#FBFCFE]">
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
    {/* Text block */}
    <div className="md:w-1/2 text-left">
    <h3 className="text-3xl font-bold text-slate-800 mb-4">VetCard — для всех видов животных</h3>
<p className="text-slate-600 text-lg leading-relaxed">
  Наша система подходит не только для домашних питомцев, но и для сельскохозяйственных животных. VetCard помогает отслеживать здоровье, прививки и уход за любыми видами животных — от кошек до крупного рогатого скота.
</p>

    </div>

    {/* Illustration block */}
    <div className="md:w-1/2">
      <img
        src={AboutPhoto}
        alt="Farm animals"
        className="w-full max-w-lg mx-auto"
      />
    </div>
  </div>
</section>
      </main>
    </div>
  );
};

const Feature = ({ icon, title, children }: { icon: string; title: string; children: string }) => (
  <div className="bg-white border border-slate-200 rounded-2xl shadow-lg p-6 transition hover:scale-105 hover:shadow-2xl">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-slate-800">{title}</h3>
    <p className="mt-2 text-slate-600 text-sm">{children}</p>
  </div>
);
