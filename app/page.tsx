import { Phone } from "lucide-react";
import MobileNav from "./components/MobileNav";
import Gallery from "./components/Gallery";
import HeroImage from "./components/HeroImage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
              HHM
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#accueil" className="text-gray-700 hover:text-red-600 transition-colors">Accueil</a>
              <a href="#apropos" className="text-gray-700 hover:text-red-600 transition-colors">À Propos</a>
              <a href="#carriere" className="text-gray-700 hover:text-red-600 transition-colors">Carrière</a>
              <a href="#formation" className="text-gray-700 hover:text-red-600 transition-colors">Formation</a>
              <a href="#experience" className="text-gray-700 hover:text-red-600 transition-colors">Expérience</a>
              <a href="#ambassadrice" className="text-gray-700 hover:text-red-600 transition-colors">Ambassadrice</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
            </div>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Athlète Nationale Malgache
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                HAJANIRINA<br />
                <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">
                  Harisoa Muriel
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Basketteuse professionnelle | Équipe nationale de Madagascar
              </p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-red-600 to-red-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
                >
                  Me Contacter
                </a>
                <a
                  href="#carriere"
                  className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-50 transition-colors"
                >
                  Ma Carrière
                </a>
              </div>
            </div>
            <div className="relative">
              <HeroImage />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-red-600">175cm</div>
                <div className="text-gray-600">Taille</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-red-600">#1</div>
                <div className="text-gray-600">Numéro</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Qui suis-je ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Née le <span className="font-semibold">1er juillet 1998</span>, je suis une basketteuse professionnelle malgache,
                fière de représenter Madagascar sur la scène internationale. Ma passion pour le basketball a commencé très tôt,
                et aujourd&apos;hui, je continue de me battre pour porter haut les couleurs de mon pays.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Évoluant au poste de joueuse polyvalente, je mets mon expérience et ma détermination au service de mon équipe
                et de mon pays. Chaque match est une opportunité de progresser et d&apos;inspirer la prochaine génération.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">175cm</div>
                  <div className="text-gray-600">Taille</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">5&apos;9&quot;</div>
                  <div className="text-gray-600">Height</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Informations Personnelles</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Nom Complet</div>
                    <div className="text-gray-700">HAJANIRINA Harisoa Muriel</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Date de Naissance</div>
                    <div className="text-gray-700">1er Juillet 1998</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Nationalité</div>
                    <div className="text-gray-700">Malgache</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Sport</div>
                    <div className="text-gray-700">Basketball</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Position</div>
                    <div className="text-gray-700">Joueuse polyvalente</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Club Actuel</div>
                    <div className="text-gray-700">
                      <a href="https://tamponnaisebasket.re/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 hover:underline transition-colors">
                        Tamponnaise Basket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Stats Section */}
      <section id="carriere" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Carrières & Statistiques</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-600 mx-auto"></div>
          </div>

          {/* Career Highlights */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-red-600">
              <div className="text-4xl font-bold text-red-600 mb-2">8.9</div>
              <div className="text-gray-600">Points / Match</div>
              <div className="text-sm text-gray-500 mt-1">Club Competitions</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-red-600">
              <div className="text-4xl font-bold text-red-600 mb-2">4.7</div>
              <div className="text-gray-600">Rebonds / Match</div>
              <div className="text-sm text-gray-500 mt-1">Club Competitions</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-red-600">
              <div className="text-4xl font-bold text-red-600 mb-2">2.3</div>
              <div className="text-gray-600">Passes / Match</div>
              <div className="text-sm text-gray-500 mt-1">Club Competitions</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-red-600">
              <div className="text-4xl font-bold text-red-600 mb-2">9.1</div>
              <div className="text-gray-600">Efficacité</div>
              <div className="text-sm text-gray-500 mt-1">Rating Moyen</div>
            </div>
          </div>

          {/* Competition Details */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Équipe Nationale</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-lg text-gray-900">Afrobasket U18 Féminin 2016</h4>
                  <div className="grid grid-cols-3 gap-4 mt-3 text-sm">
                    <div>
                      <div className="text-2xl font-bold text-red-600">5.0</div>
                      <div className="text-gray-600">PPG</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">6.0</div>
                      <div className="text-gray-600">RPG</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">1.3</div>
                      <div className="text-gray-600">APG</div>
                    </div>
                  </div>
                  <div className="mt-2 text-gray-600">6 matchs joués</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Compétitions de Club</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-lg text-gray-900">
                    <a href="https://tamponnaisebasket.re/" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-700 hover:underline transition-colors">
                      Tamponnaise Basket
                    </a>
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">Club Actuel - La Réunion</p>
                </div>
                <div className="border-l-4 border-red-700 pl-4">
                  <h4 className="font-semibold text-lg text-gray-900">MB2ALL</h4>
                  <p className="text-sm text-gray-600 mb-3">Coupe d&apos;Afrique des Clubs 2016-2025</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Meilleure performance</span>
                      <span className="font-semibold">13.3 PPG (2017)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rebonds</span>
                      <span className="font-semibold">7.5 RPG</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Efficacité maximale</span>
                      <span className="font-semibold">16.5 EFF</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements - Parcours Sportifs Complet */}
          <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Parcours Sportifs</h3>

            {/* Titres Nationaux Madagascar */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-red-600 mb-4">🏆 Championnats de Madagascar</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900">2014</div>
                  <div className="text-sm text-gray-700">Championne U16</div>
                  <div className="text-xs text-gray-600">Meilleure marqueuse U16</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900">2016</div>
                  <div className="text-sm text-gray-700">Championne U18 et U20</div>
                  <div className="text-xs text-gray-600">Coupe du Président 2016</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900">2016</div>
                  <div className="text-sm text-gray-700">Championne CCCOI</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900">2018</div>
                  <div className="text-sm text-gray-700">Championne N1A Dames</div>
                  <div className="text-xs text-gray-600">MVP Coupe du Président</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900">2020-2022</div>
                  <div className="text-sm text-gray-700">Championne Madagascar</div>
                  <div className="text-xs text-gray-600">3 titres consécutifs</div>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="font-semibold text-gray-900">2023</div>
                  <div className="text-sm text-gray-700">Championne Madagascar</div>
                  <div className="text-xs text-gray-600">Capitaine d&apos;équipe</div>
                </div>
              </div>
            </div>

            {/* Compétitions Internationales */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-red-600 mb-4">🌍 Compétitions Internationales</h4>
              <div className="space-y-3">
                <div className="border-l-4 border-red-600 pl-4 py-2">
                  <div className="font-semibold text-gray-900">2016 - Afrobasket U18 Égypte</div>
                  <div className="text-sm text-gray-700">Équipe Nationale de Madagascar</div>
                </div>
                <div className="border-l-4 border-red-600 pl-4 py-2">
                  <div className="font-semibold text-gray-900">2018 - FIBA 3x3 Elite & Équipe Nationale 3x3</div>
                </div>
                <div className="border-l-4 border-red-600 pl-4 py-2">
                  <div className="font-semibold text-gray-900">2022 - Vice-Championne Coupe d&apos;Afrique</div>
                  <div className="text-sm text-gray-700">MVP Championnat National Senior Dames N1A</div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <div className="font-semibold text-gray-900">2023 - Médaille de Bronze</div>
                  <div className="text-sm text-gray-700">Jeux de la Francophonie - Kinshasa</div>
                  <div className="text-xs text-gray-600">Capitaine d&apos;équipe</div>
                </div>
                <div className="border-l-4 border-blue-600 pl-4 py-2">
                  <div className="font-semibold text-gray-900">2023 - Équipe Nationale 3x3</div>
                  <div className="text-sm text-gray-700">World Qualifiers Israël</div>
                  <div className="text-xs text-gray-600">Médaille d&apos;Or aux Jeux des Îles</div>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <div className="font-semibold text-gray-900">2023 - Médaille d&apos;Or</div>
                  <div className="text-sm text-gray-700">Jeux des Îles - Basket 5x5 et 3x3</div>
                  <div className="text-xs text-gray-600">Capitaine d&apos;équipe Nationale</div>
                </div>
                <div className="border-l-4 border-yellow-600 pl-4 py-2">
                  <div className="font-semibold text-gray-900">2023 - Médaille de Bronze Africa Cup 3x3</div>
                </div>
                <div className="border-l-4 border-red-600 pl-4 py-2">
                  <div className="font-semibold text-gray-900">2023 - Championne Runball 3x3 Open Dame</div>
                  <div className="text-sm text-gray-700">La Réunion</div>
                </div>
                <div className="border-l-4 border-purple-600 pl-4 py-2">
                  <div className="font-semibold text-gray-900">2025 - Sélectionnée World Cup Thaïlande</div>
                  <div className="text-sm text-gray-700">Équipe Nationale</div>
                </div>
                <div className="border-l-4 border-purple-600 pl-4 py-2">
                  <div className="font-semibold text-gray-900">2025 - Mondialiste Basketball 3x3</div>
                  <div className="text-sm text-gray-700">Mongolie</div>
                </div>
              </div>
            </div>

            {/* Points Forts */}
            <div>
              <h4 className="text-xl font-semibold text-red-600 mb-4">⭐ Points Forts</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-xl">🏀</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Joueuse Polyvalente</h5>
                    <p className="text-gray-600 text-sm">Excellence en Basketball 5x5 et 3x3</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-xl">👑</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Capitaine d&apos;Équipe</h5>
                    <p className="text-gray-600 text-sm">Leadership et esprit d&apos;équipe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-xl">🏆</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Palmarès Riche</h5>
                    <p className="text-gray-600 text-sm">Multiples titres nationaux et internationaux</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-xl">🌍</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Rayonnement International</h5>
                    <p className="text-gray-600 text-sm">Ambassadrice du basketball malgache</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="formation" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Parcours Scolaire & Formation</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl shadow-lg border-l-4 border-red-600">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-2xl">🎓</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-red-600 font-semibold mb-1">2023</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Master 2 FRHE APSA
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Activité physique et sportive et Artistique
                    </p>
                    <p className="text-sm text-gray-600">Madagascar</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl shadow-lg border-l-4 border-red-500">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-2xl">📚</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-red-600 font-semibold mb-1">2019</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Licence EAD APSA
                    </h3>
                    <p className="text-gray-700 mb-2">
                      Activité Physique et Sportif et Artistique
                    </p>
                    <p className="text-sm text-gray-600">Madagascar</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-2xl">🏫</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-red-600 font-semibold mb-1">2016</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Baccalauréat
                    </h3>
                    <p className="text-sm text-gray-600">Madagascar</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-red-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 Formation & Développement</h4>
              <p className="text-gray-700">
                Un parcours académique complet en activités physiques et sportives, alliant passion du sport
                et excellence académique. Cette formation solide permet une expertise tant sur le terrain
                qu&apos;en dehors, notamment dans l&apos;enseignement et le coaching sportif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Parcours Professionnel</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Current Position */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-600">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    Actuellement
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Responsable Communication Sport
                  </h3>
                  <p className="text-gray-600 font-semibold">Présidence de Madagascar</p>
                </div>
                <div className="text-right">
                  <div className="text-red-600 font-bold">2024</div>
                </div>
              </div>
              <p className="text-gray-700">
                En charge de la communication sportive au niveau de la présidence de Madagascar,
                contribuant au développement et à la promotion du sport à l&apos;échelle nationale.
              </p>
            </div>

            {/* Previous Experiences */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Intervenante et Coach Basketball
                  </h3>
                  <p className="text-gray-600 font-semibold">École primaire Française D Madagascar</p>
                </div>
                <div className="text-right">
                  <div className="text-red-600 font-bold">2020-2024</div>
                </div>
              </div>
              <p className="text-gray-700">
                Formation et encadrement des jeunes basketteurs, transmission de la passion du basketball
                et développement des compétences techniques et tactiques auprès des élèves.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Responsable Technique Sport
                  </h3>
                  <p className="text-gray-600 font-semibold">Région Analamanga</p>
                </div>
                <div className="text-right">
                  <div className="text-red-600 font-bold">2018-2019</div>
                </div>
              </div>
              <p className="text-gray-700">
                Coordination et développement des activités sportives au niveau régional,
                organisation d&apos;événements sportifs et promotion de la pratique sportive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ambassadrice Section */}
      <section id="ambassadrice" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ambassadrice & Engagements</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🌟</span>
                </div>
                <div>
                  <div className="text-sm text-red-600 font-semibold">2025</div>
                  <h3 className="text-xl font-bold text-gray-900">Ambassadrice YAS</h3>
                </div>
              </div>
              <p className="text-gray-700">
                Représentation de la marque YAS, promotion des valeurs sportives et inspiration
                pour la jeunesse malgache.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💪</span>
                </div>
                <div>
                  <div className="text-sm text-red-600 font-semibold">2025</div>
                  <h3 className="text-xl font-bold text-gray-900">Ambassadrice EAFIT</h3>
                </div>
              </div>
              <p className="text-gray-700">
                Promotion de la santé, du bien-être et de la nutrition sportive auprès des athlètes
                et du grand public.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">📺</span>
                </div>
                <div>
                  <div className="text-sm text-red-600 font-semibold">2024</div>
                  <h3 className="text-xl font-bold text-gray-900">Ambassadrice CANAL+MADAGASCAR</h3>
                </div>
              </div>
              <p className="text-gray-700">
                Promotion du sport et des contenus sportifs, lien entre les médias et le monde du basketball.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎨</span>
                </div>
                <div>
                  <div className="text-sm text-red-600 font-semibold">2023</div>
                  <h3 className="text-xl font-bold text-gray-900">Ambassadrice S2PC PEINTURE</h3>
                </div>
              </div>
              <p className="text-gray-700">
                Collaboration avec S2PC Peinture pour promouvoir la marque à Madagascar.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🏢</span>
                </div>
                <div>
                  <div className="text-sm text-red-600 font-semibold">2023</div>
                  <h3 className="text-xl font-bold text-gray-900">Ambassadrice BOGASY MADAGASCAR</h3>
                </div>
              </div>
              <p className="text-gray-700">
                Représentation de la marque Bogasy, contribuant à sa visibilité et son développement.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-600 to-red-700 p-8 rounded-xl shadow-lg text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Impact & Vision</h3>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                &quot;J&apos;impacte la société à travers mon image en tant que sportive de haut niveau
                mais aussi à travers ma détermination pour pouvoir montrer aux jeunes d&apos;aujourd&apos;hui
                qu&apos;on peut réussir en suivant notre passion et être étudiante et être une athlète
                en même temps est possible. Le basketball pour moi est plus qu&apos;une passion. C&apos;est ma vie.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Galerie</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-600 mx-auto"></div>
          </div>

          <Gallery />

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Suivez-moi sur mes réseaux sociaux pour plus de photos et vidéos de ma carrière
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Restons en Contact</h3>
                <p className="text-gray-700 mb-6">
                  Pour toute opportunité professionnelle, collaboration ou demande de renseignements,
                  n&apos;hésitez pas à me contacter.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                  <Phone className="w-6 h-6 text-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Madagascar</div>
                    <a href="tel:+261349822311" className="text-gray-700 hover:text-red-600">
                      +261 34 98 223 11
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                  <Phone className="w-6 h-6 text-red-600" />
                  <div>
                    <div className="font-semibold text-gray-900">La Réunion</div>
                    <a href="tel:+262693436979" className="text-gray-700 hover:text-red-600">
                      +262 69 34 369 79
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Réseaux Sociaux</h3>
              <div className="space-y-4">
                <a
                  href="https://www.facebook.com/p/Hajanirina-Harisoa-Muriel-100088241926125/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg className="w-6 h-6 fill-current text-blue-600 group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Facebook</div>
                    <div className="text-sm text-gray-600">Hajanirina Harisoa Muriel</div>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/p/DRwmIdDDG2E/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-pink-600 transition-colors">
                    <svg className="w-6 h-6 fill-current text-pink-600 group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Instagram</div>
                    <div className="text-sm text-gray-600">@murielharisoa01</div>
                  </div>
                </a>

                <a
                  href="https://www.tiktok.com/@murielharisoa01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-black transition-colors">
                    <svg className="w-6 h-6 fill-current text-gray-800 group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">TikTok</div>
                    <div className="text-sm text-gray-600">@murielharisoa01</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/muriel-hajanirina-48aab61a3/?originalSubdomain=mg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <svg className="w-6 h-6 fill-current text-blue-700 group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">LinkedIn</div>
                    <div className="text-sm text-gray-600">Muriel Hajanirina</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent">
                HHM
              </h3>
              <p className="text-gray-400">
                Basketteuse professionnelle malgache, passionnée et déterminée à porter haut les couleurs de Madagascar.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <a href="#accueil" className="block text-gray-400 hover:text-red-400 transition-colors">Accueil</a>
                <a href="#apropos" className="block text-gray-400 hover:text-red-400 transition-colors">À Propos</a>
                <a href="#carriere" className="block text-gray-400 hover:text-red-400 transition-colors">Carrière</a>
                <a href="#formation" className="block text-gray-400 hover:text-red-400 transition-colors">Formation</a>
                <a href="#experience" className="block text-gray-400 hover:text-red-400 transition-colors">Expérience</a>
                <a href="#ambassadrice" className="block text-gray-400 hover:text-red-400 transition-colors">Ambassadrice</a>
                <a href="#contact" className="block text-gray-400 hover:text-red-400 transition-colors">Contact</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Ressources</h4>
              <div className="space-y-2">
                <a
                  href="https://www.fiba.basketball/en/players/227720-harisoa-muriel-hajanirina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-red-400 transition-colors"
                >
                  Profil FIBA
                </a>
                <a
                  href="https://fr.wikipedia.org/wiki/Fichier:Harisoa_Muriel_Hajanirina.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-red-400 transition-colors"
                >
                  Wikipédia
                </a>
                <a
                  href="https://tamponnaisebasket.re/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-red-400 transition-colors"
                >
                  Tamponnaise Basket
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} HAJANIRINA Harisoa Muriel. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
