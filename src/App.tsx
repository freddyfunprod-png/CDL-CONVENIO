/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Stethoscope, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  HeartPulse, 
  Smile, 
  MapPin, 
  ClipboardCheck,
  ArrowRight,
  Phone,
  Info
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img 
              src="input_file_3.png" 
              alt="CDL Florianópolis Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
            <span className="text-xl font-bold tracking-tight text-slate-900 hidden sm:inline">CDL <span className="text-blue-600">VIVA+</span></span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#contato" className="hidden rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 md:block">
              Quero meu benefício
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                <Users size={16} />
                <span>Para você, sua família e colaboradores</span>
              </div>
              <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-slate-900 md:text-6xl lg:leading-tight">
                Saúde e Qualidade de Vida com <span className="text-blue-600">CDL VIVA+</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-slate-600 md:text-xl">
                Combo Saúde + Odonto: uma solução prática, sem burocracia e sem limite de idade. O benefício ideal para reter talentos e cuidar de quem importa.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200">
                  Contratar Agora
                  <ArrowRight size={20} />
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-lg font-bold text-slate-700 transition-all hover:bg-slate-50">
                  Ver Soluções
                </button>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>Médicos e Laboratórios</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>Dentistas</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>Cartão iFood</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>Cupons de Desconto</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 size={18} className="text-green-500" />
                  <span>TotalPass*</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200 ring-1 ring-slate-200">
                <img 
                  src="input_file_0.png" 
                  alt="CDL Viva+ Hero" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-yellow-400 p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-900">Apenas</p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold text-blue-900">R$</span>
                        <span className="text-4xl font-black text-blue-900">54,00</span>
                      </div>
                      <p className="text-[10px] font-medium text-blue-800">Mensal p/ pessoa</p>
                    </div>
                    <div className="rounded-full bg-blue-900/10 p-2 text-blue-900">
                      <HeartPulse size={24} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 -z-0 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 -z-0 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">O que está incluso no seu combo?</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Unimos o melhor da saúde médica e odontológica para oferecer uma proteção completa para você e sua equipe.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {/* Health Benefit */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 transition-all hover:shadow-xl hover:shadow-slate-200"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-blue-100">
                <img 
                  src="input_file_1.png" 
                  alt="Convênio Prevenir" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                    <Stethoscope size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Convênio Prevenir</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={18} />
                    <span>Consultas presenciais e gratuitas todos os meses</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={18} />
                    <span>Pacote de exames laboratoriais gratuitos 2x ao ano*</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={18} />
                    <span>Mensalidade fixa e sem burocracia</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Dental Benefit */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 transition-all hover:shadow-xl hover:shadow-slate-200"
            >
              <div className="aspect-[4/5] w-full overflow-hidden bg-indigo-100">
                <img 
                  src="input_file_2.png" 
                  alt="Plano Odontológico Prevident" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
                    <Smile size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Plano Prevident</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="mt-1 shrink-0 text-indigo-600" size={18} />
                    <span>Plano odontológico nacional com 25 mil+ profissionais</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="mt-1 shrink-0 text-indigo-600" size={18} />
                    <span>Mais de 240 procedimentos gratuitos inclusos</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <CheckCircle2 className="mt-1 shrink-0 text-indigo-600" size={18} />
                    <span>Regulamentado pela ANS para sua segurança</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Table Section */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">Conheça Nossas Soluções</h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Confira a tabela completa de benefícios e soluções para você e sua empresa.
            </p>
          </div>
          
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200"
            >
              <img 
                src="input_file_5.png" 
                alt="Tabela de Soluções" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900">Benefícios para sua Equipe</h3>
                <p className="text-slate-600 leading-relaxed">
                  Oferecemos soluções completas que vão além da saúde, incluindo telemedicina, cursos presenciais e descontos exclusivos no CDL Club Floripa.
                </p>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <div className="mb-4 text-blue-600"><Info size={24} /></div>
                  <h4 className="font-bold text-slate-900">Telemedicina</h4>
                  <p className="text-sm text-slate-500">Consultas on-line com especialistas 24h.</p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <div className="mb-4 text-blue-600"><Users size={24} /></div>
                  <h4 className="font-bold text-slate-900">CDL Club</h4>
                  <p className="text-sm text-slate-500">Clube de descontos e benefícios gratuitos.</p>
                </div>
              </div>
              
              <div className="rounded-2xl bg-blue-600 p-8 text-white">
                <p className="mb-2 text-blue-100 font-medium">Destaque do Combo</p>
                <h4 className="text-3xl font-black mb-4">CDL Viva+</h4>
                <p className="text-blue-50 leading-relaxed mb-6">
                  Prevenir + Prevident + iFood por apenas R$ 54,00. A melhor relação custo-benefício do mercado.
                </p>
                <button className="w-full rounded-xl bg-white py-3 font-bold text-blue-600 transition-all hover:bg-blue-50">
                  Solicitar Cotação
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Benefits Section */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[3rem] bg-slate-900 shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-16">
                <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">Benefícios para sua Empresa</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <ul className="space-y-4 text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-blue-400" />
                      <span>Associativismo e networking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-blue-400" />
                      <span>Núcleos empresariais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-blue-400" />
                      <span>Certificado Digital</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-blue-400" />
                      <span>Endereço fiscal e comercial</span>
                    </li>
                  </ul>
                  <ul className="space-y-4 text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-blue-400" />
                      <span>Cursos e capacitações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-blue-400" />
                      <span>Locação de salas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-blue-400" />
                      <span>CDL Vagas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-blue-400" />
                      <span>Linhas de crédito Sicredi</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-12">
                  <button className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition-all hover:bg-blue-700">
                    Seja um Associado
                  </button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <img 
                  src="input_file_4.png" 
                  alt="Empresa Benefícios" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="px-6 py-24">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-blue-600 px-8 py-16 text-center text-white shadow-2xl shadow-blue-200">
          <h2 className="mb-6 text-4xl font-black md:text-5xl">Pronto para cuidar de quem importa?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100">
            Garanta agora o Combo Saúde + Odonto CDL VIVA+ por apenas R$ 54,00 mensais por pessoa.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="w-full rounded-2xl bg-white px-10 py-5 text-xl font-bold text-blue-600 transition-all hover:bg-blue-50 sm:w-auto">
              Contratar Benefício
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-10 py-5 text-xl font-bold text-white transition-all hover:bg-white/20 sm:w-auto">
              <Phone size={24} />
              Falar com Consultor
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-4">
              <img 
                src="input_file_3.png" 
                alt="CDL Logo" 
                className="h-8 w-auto grayscale opacity-50"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg font-bold tracking-tight text-slate-400">CDL <span className="text-slate-300">VIVA+</span></span>
            </div>
            <p className="text-sm text-slate-500">
              © 2026 CDL VIVA+ | CDL Florianópolis. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm font-medium text-slate-600">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Termos</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Contato</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
