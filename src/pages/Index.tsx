import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const technicalSpecs = [
    { label: "Молекулярная формула", value: "C₆H₁₂" },
    { label: "Молярная масса", value: "84.16 г/моль" },
    { label: "Плотность", value: "0.6729 г/см³" },
    { label: "Температура кипения", value: "63.28°C" },
    { label: "Температура плавления", value: "-103.8°C" },
    { label: "Показатель преломления", value: "1.3877" }
  ];

  const advantages = [
    {
      icon: "Zap",
      title: "Высокая реакционная способность",
      description: "Двойная связь обеспечивает активное участие в химических реакциях"
    },
    {
      icon: "Shield",
      title: "Стабильность при хранении",
      description: "Сохраняет свойства при соблюдении условий хранения"
    },
    {
      icon: "Atom",
      title: "Чистота продукта",
      description: "Содержание основного вещества не менее 99.5%"
    },
    {
      icon: "Thermometer",
      title: "Низкая температура кипения",
      description: "Легкое разделение и очистка в процессах дистилляции"
    }
  ];

  const applications = [
    "Синтез полимерных материалов",
    "Производство химических реагентов",
    "Катализ органических реакций",
    "Исследовательские лабораторные работы"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Hexagon" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold text-industrial-dark">ГЕКСЕН-1</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#description" className="text-industrial-medium hover:text-primary transition-colors">Описание</a>
              <a href="#advantages" className="text-industrial-medium hover:text-primary transition-colors">Преимущества</a>
              <a href="#documentation" className="text-industrial-medium hover:text-primary transition-colors">Документация</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              Связаться с нами
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-industrial-teal">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Промышленное химическое соединение
              </Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                ГЕКСЕН-1
                <span className="block text-xl lg:text-2xl font-normal text-white/90 mt-2">
                  C₆H₁₂ | 1-Гексен
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Высококачественный алифатический алкен для промышленного синтеза 
                и лабораторных исследований. Соответствует международным стандартам качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/95 font-semibold">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Техническая документация
                </Button>
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
                  onClick={() => window.open('mailto:info@hexene-1.ru?subject=Коммерческое предложение Гексен-1&body=Здравствуйте! Прошу предоставить коммерческое предложение на поставку Гексен-1.', '_blank')}
                >
                  <Icon name="Mail" size={20} className="mr-2" />
                  Запросить коммерческое предложение
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="relative w-full h-96 bg-gradient-to-br from-white/20 to-white/5 rounded-lg overflow-hidden">
                  {/* 3D Molecule Visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-80 h-80">
                      {/* Carbon atoms */}
                      <div className="absolute w-6 h-6 bg-industrial-dark rounded-full animate-pulse" style={{left: '20px', top: '160px'}}></div>
                      <div className="absolute w-6 h-6 bg-industrial-dark rounded-full animate-pulse" style={{left: '80px', top: '160px', animationDelay: '0.2s'}}></div>
                      <div className="absolute w-6 h-6 bg-industrial-dark rounded-full animate-pulse" style={{left: '140px', top: '160px', animationDelay: '0.4s'}}></div>
                      <div className="absolute w-6 h-6 bg-industrial-dark rounded-full animate-pulse" style={{left: '200px', top: '160px', animationDelay: '0.6s'}}></div>
                      <div className="absolute w-6 h-6 bg-industrial-dark rounded-full animate-pulse" style={{left: '260px', top: '160px', animationDelay: '0.8s'}}></div>
                      <div className="absolute w-6 h-6 bg-industrial-dark rounded-full animate-pulse" style={{left: '320px', top: '160px', animationDelay: '1s'}}></div>
                      
                      {/* Hydrogen atoms */}
                      <div className="absolute w-3 h-3 bg-white rounded-full" style={{left: '15px', top: '130px'}}></div>
                      <div className="absolute w-3 h-3 bg-white rounded-full" style={{left: '15px', top: '190px'}}></div>
                      <div className="absolute w-3 h-3 bg-white rounded-full" style={{left: '330px', top: '130px'}}></div>
                      <div className="absolute w-3 h-3 bg-white rounded-full" style={{left: '330px', top: '190px'}}></div>
                      <div className="absolute w-3 h-3 bg-white rounded-full" style={{left: '340px', top: '160px'}}></div>
                      
                      {/* Bonds */}
                      <div className="absolute h-0.5 bg-white/80" style={{left: '38px', top: '172px', width: '30px'}}></div>
                      <div className="absolute h-0.5 bg-white/80" style={{left: '98px', top: '172px', width: '30px'}}></div>
                      <div className="absolute h-0.5 bg-white/80" style={{left: '158px', top: '172px', width: '30px'}}></div>
                      <div className="absolute h-0.5 bg-white/80" style={{left: '218px', top: '172px', width: '30px'}}></div>
                      <div className="absolute h-0.5 bg-white/80" style={{left: '278px', top: '172px', width: '30px'}}></div>
                      
                      {/* Double bond at the beginning */}
                      <div className="absolute h-0.5 bg-primary" style={{left: '38px', top: '168px', width: '30px'}}></div>
                      <div className="absolute h-0.5 bg-primary" style={{left: '38px', top: '176px', width: '30px'}}></div>
                      
                      {/* Formula overlay */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-mono bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                        CH₂=CH-CH₂-CH₂-CH₂-CH₃
                      </div>
                    </div>
                  </div>
                  
                  {/* Rotating background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-30 animate-spin" style={{animationDuration: '20s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section id="description" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-industrial-dark mb-8 text-center">
              Описание продукта
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-industrial-light">
                <CardHeader>
                  <CardTitle className="flex items-center text-industrial-dark">
                    <Icon name="Beaker" className="mr-3 text-primary" size={24} />
                    Химические свойства
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-industrial-medium leading-relaxed">
                    1-Гексен представляет собой линейный α-алкен с концевой двойной связью. 
                    Бесцветная жидкость с характерным углеводородным запахом, хорошо растворимая 
                    в органических растворителях.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-industrial-light">
                <CardHeader>
                  <CardTitle className="flex items-center text-industrial-dark">
                    <Icon name="Factory" className="mr-3 text-primary" size={24} />
                    Промышленное применение
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-industrial-medium leading-relaxed">
                    Широко используется в качестве сомономера при производстве полиэтилена, 
                    для синтеза линейных α-олефинов, а также в качестве реагента в органическом синтезе.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Technical Specifications */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-2xl text-industrial-dark flex items-center">
                  <Icon name="Settings" className="mr-3 text-primary" size={28} />
                  Технические характеристики
                </CardTitle>
                <CardDescription>Основные физико-химические параметры</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 border border-industrial-light shadow-sm">
                      <div className="font-semibold text-industrial-dark text-sm mb-1">{spec.label}</div>
                      <div className="text-primary font-bold text-lg">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-industrial-dark mb-4 text-center">
            Ключевые преимущества
          </h2>
          <p className="text-xl text-industrial-medium text-center mb-16 max-w-3xl mx-auto">
            Гексен-1 обладает уникальными характеристиками, делающими его оптимальным выбором 
            для промышленных и исследовательских применений
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 border-industrial-light hover:border-primary/50 transition-colors group">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-industrial-dark">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-industrial-medium text-center leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-industrial-light">
            <CardHeader>
              <CardTitle className="text-2xl text-industrial-dark flex items-center">
                <Icon name="Target" className="mr-3 text-primary" size={28} />
                Области применения
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-industrial-light/30 rounded-lg">
                    <Icon name="CheckCircle" size={20} className="text-primary flex-shrink-0" />
                    <span className="text-industrial-dark font-medium">{app}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Documentation Section */}
      <section id="documentation" className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-industrial-dark mb-8 text-center">
            Техническая документация
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="specifications">Спецификации</TabsTrigger>
                <TabsTrigger value="safety">Безопасность</TabsTrigger>
                <TabsTrigger value="storage">Хранение</TabsTrigger>
                <TabsTrigger value="quality">Качество</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="FileBarChart" className="mr-3 text-primary" size={24} />
                      Подробные спецификации
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="physical">
                        <AccordionTrigger>Физические свойства</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div><strong>Внешний вид:</strong> Бесцветная жидкость</div>
                              <div><strong>Запах:</strong> Характерный углеводородный</div>
                              <div><strong>pH (при 20°C):</strong> Нейтральный</div>
                              <div><strong>Растворимость в воде:</strong> Практически нерастворим</div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="chemical">
                        <AccordionTrigger>Химические характеристики</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-4">
                            <p><strong>IUPAC название:</strong> hex-1-ene</p>
                            <p><strong>CAS номер:</strong> 592-41-6</p>
                            <p><strong>EINECS номер:</strong> 209-753-1</p>
                            <p><strong>Структурная формула:</strong> CH₂=CH-CH₂-CH₂-CH₂-CH₃</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="safety">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Shield" className="mr-3 text-primary" size={24} />
                      Меры безопасности
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-red-50 border-l-4 border-red-400 rounded">
                          <h4 className="font-semibold text-red-800 mb-2">Опасности</h4>
                          <ul className="text-red-700 text-sm space-y-1">
                            <li>• Легковоспламеняющаяся жидкость</li>
                            <li>• Может вызывать раздражение кожи</li>
                            <li>• Вредно при вдыхании</li>
                          </ul>
                        </div>
                        <div className="p-4 bg-green-50 border-l-4 border-green-400 rounded">
                          <h4 className="font-semibold text-green-800 mb-2">Защитные меры</h4>
                          <ul className="text-green-700 text-sm space-y-1">
                            <li>• Использовать в хорошо вентилируемых помещениях</li>
                            <li>• Избегать источников воспламенения</li>
                            <li>• Носить защитные перчатки и очки</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="storage">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Package" className="mr-3 text-primary" size={24} />
                      Условия хранения и транспортировки
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-industrial-dark mb-4">Хранение</h4>
                        <ul className="space-y-2 text-industrial-medium">
                          <li>• Температура: от -10°C до +30°C</li>
                          <li>• Относительная влажность: не более 80%</li>
                          <li>• Защита от прямых солнечных лучей</li>
                          <li>• Инертная атмосфера (азот)</li>
                          <li>• Герметично закрытая тара</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-industrial-dark mb-4">Транспортировка</h4>
                        <ul className="space-y-2 text-industrial-medium">
                          <li>• UN номер: 2370</li>
                          <li>• Класс опасности: 3 (легковоспламеняющиеся жидкости)</li>
                          <li>• Группа упаковки: II</li>
                          <li>• Специальные требования к перевозке</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="quality">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Award" className="mr-3 text-primary" size={24} />
                      Контроль качества
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                        <h4 className="font-semibold text-industrial-dark mb-3">Стандарты качества</h4>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>• ISO 9001:2015</div>
                          <div>• ГОСТ 32541-2013</div>
                          <div>• ASTM D5769</div>
                          <div>• Фармакопейные требования</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-industrial-dark mb-3">Аналитические методы</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="p-4 border border-industrial-light rounded-lg">
                            <h5 className="font-medium mb-2">ГЖХ анализ</h5>
                            <p className="text-sm text-industrial-medium">Определение чистоты и примесей</p>
                          </div>
                          <div className="p-4 border border-industrial-light rounded-lg">
                            <h5 className="font-medium mb-2">ИК-спектроскопия</h5>
                            <p className="text-sm text-industrial-medium">Подтверждение структуры</p>
                          </div>
                          <div className="p-4 border border-industrial-light rounded-lg">
                            <h5 className="font-medium mb-2">Физико-химические</h5>
                            <p className="text-sm text-industrial-medium">Плотность, показатель преломления</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-industrial-dark">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готовы начать работу с Гексен-1?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нашими специалистами для получения подробной информации 
            о поставках и технической поддержке
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 shadow-lg"
              onClick={() => window.open('mailto:sales@hexene-1.ru?subject=Запрос на поставку Гексен-1&body=Здравствуйте! Прошу связаться со мной для обсуждения поставок Гексен-1.', '_blank')}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Связаться с отделом продаж
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary shadow-lg"
              onClick={() => window.open('/technical-docs.pdf', '_blank')}
            >
              <Icon name="Download" size={20} className="mr-2" />
              Скачать техническую документацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Hexagon" className="text-primary" size={28} />
                <span className="text-xl font-bold text-industrial-dark">ГЕКСЕН-1</span>
              </div>
              <p className="text-industrial-medium">
                Высококачественные химические реагенты для промышленности и исследований
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-industrial-dark mb-4">Продукция</h4>
              <ul className="space-y-2 text-industrial-medium">
                <li>Алкены</li>
                <li>Полимерные материалы</li>
                <li>Катализаторы</li>
                <li>Растворители</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-industrial-dark mb-4">Поддержка</h4>
              <ul className="space-y-2 text-industrial-medium">
                <li>Техническая документация</li>
                <li>Сертификаты качества</li>
                <li>Паспорта безопасности</li>
                <li>Консультации</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-industrial-dark mb-4">Контакты</h4>
              <ul className="space-y-2 text-industrial-medium">
                <li>+7 (000) 000-00-00</li>
                <li>info@hexene-1.ru</li>
                <li>Москва, ул. Промышленная, 1</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-industrial-medium">
            <p>&copy; 2024 Гексен-1. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;