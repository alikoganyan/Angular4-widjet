import {City} from '../../interfaces/city';
import {SubCity} from '../../interfaces/sub-city';
import {Street} from '../../interfaces/street';
import {Salon} from '../../interfaces/salon';
import {ServiceSelection} from '../../interfaces/service-selection';
import {SubServiceSelection} from '../../interfaces/sub-service-selection';
import {Specialist} from '../../interfaces/specialist';

export const CITIES: City[] = [
  {id: 1, name: 'Москва'},
  {id: 2, name: 'Санкт-Петербург'},
  {id: 3, name: 'Волгоград'},
  {id: 4, name: 'Краснодар'}
];

export const SUB_CITIES: SubCity[] = [
  {id: 1, city_id: 1, name: 'Академический район'},
  {id: 2, city_id: 1, name: 'Алексеевский район'},
  {id: 3, city_id: 1, name: 'Алтуфьевский район'},
  {id: 4, city_id: 2, name: 'Выборгский район'},
  {id: 5, city_id: 2, name: 'Калининский район'},
  {id: 6, city_id: 2, name: 'Курортный район'},
  {id: 7, city_id: 3, name: 'Дзержинский район'},
  {id: 8, city_id: 3, name: 'Центральный район'},
  {id: 9, city_id: 3, name: 'Ворошиловский район'},
  {id: 10, city_id: 4, name: 'Центральный район'},
  {id: 11, city_id: 4, name: 'Кубанской набережной'},
  {id: 12, city_id: 4, name: 'Район Витаминкомбината'},
];

export const STREETS: Street[] = [
  {id: 1, sub_city_id: 1, name: '60-летия Октября, проспект'},
  {id: 2, sub_city_id: 1, name: 'Большая Черёмушкинская улица'},
  {id: 3, sub_city_id: 1, name: 'Вавилова, улица'},
  {id: 4, sub_city_id: 2, name: 'Винокурова, улица'},
  {id: 5, sub_city_id: 2, name: 'Гримау, улица'},
  {id: 6, sub_city_id: 2, name: 'Губкина, улица'},
  {id: 7, sub_city_id: 3, name: 'Дмитрия Ульянова, улица'},
  {id: 8, sub_city_id: 3, name: 'Ивана Бабушкина, улица'},
  {id: 9, sub_city_id: 3, name: 'Иосипа Броз Тито, площадь'},
  {id: 10, sub_city_id: 4, name: 'Карьер, улица'},
  {id: 11, sub_city_id: 4, name: 'Кедрова, улица'},
  {id: 12, sub_city_id: 4, name: 'Кржижановского, улица'},
  {id: 12, sub_city_id: 5, name: 'Львова, улица'},
  {id: 12, sub_city_id: 5, name: 'Нахимовский проспект'},
  {id: 12, sub_city_id: 5, name: 'Новочерёмушкинская улица'},
  {id: 12, sub_city_id: 6, name: 'Профсоюзная улица'},
  {id: 12, sub_city_id: 6, name: 'Ферсмана, улица'},
  {id: 12, sub_city_id: 6, name: 'Хо Ши Мина, площадь'},
  {id: 12, sub_city_id: 7, name: 'Черёмушкинский проезд'},
  {id: 12, sub_city_id: 7, name: 'Шверника, улица'},
  {id: 12, sub_city_id: 7, name: 'Ивана Бабушкина, улица'},
  {id: 12, sub_city_id: 8, name: 'Губкина, улица'},
  {id: 12, sub_city_id: 8, name: 'Район Витаминкомбината'},
  {id: 12, sub_city_id: 8, name: 'Район Витаминкомбината'},
  {id: 12, sub_city_id: 9, name: 'Район Витаминкомбината'},
  {id: 12, sub_city_id: 9, name: 'Львова, улица'},
  {id: 12, sub_city_id: 9, name: 'Район Витаминкомбината'},
  {id: 12, sub_city_id: 10, name: 'Район Витаминкомбината'},
  {id: 12, sub_city_id: 10, name: 'Ивана Бабушкина, улица'},
  {id: 12, sub_city_id: 10, name: 'Район Витаминкомбината'},
  {id: 12, sub_city_id: 11, name: 'Район Витаминкомбината'},
  {id: 12, sub_city_id: 11, name: 'Район Витаминкомбината'},
  {id: 12, sub_city_id: 11, name: 'Большая Черёмушкинская улица'},
  {id: 12, sub_city_id: 12, name: 'Район Витаминкомбината'},
  {id: 12, sub_city_id: 12, name: 'Район Витаминкомбината'},
  {id: 12, sub_city_id: 12, name: 'Район Витаминкомбината'},
];


export const SALONS: Salon[] = [
  {
    id: 1,
    img: 'assets/images/salon_box/img1.jpg',
    address: 'Непокоренных, 10',
    metroAddress: 'Площадь мужества',
    sub_city_id: 1
  },
  {
    id: 2,
    img: 'assets/images/salon_box/img2.jpg',
    address: 'Большая Зеленина, 3',
    metroAddress: 'Чкаловская',
    sub_city_id: 1
  },
  {
    id: 3,
    img: 'assets/images/salon_box/img3.jpg',
    address: 'Александра Невского 21 к.2',
    metroAddress: 'Адмиралтейская',
    sub_city_id: 1
  },
  {
    id: 4,
    img: 'assets/images/salon_box/img4.jpg',
    address: 'Невский проспект, 23',
    metroAddress: 'Адмиралтейская',
    sub_city_id: 2
  },
  {
    id: 5,
    img: 'assets/images/salon_box/img5.jpg',
    address: 'Непокоренных, 10',
    metroAddress: 'Площадь мужества',
    sub_city_id: 2
  },
  {
    id: 6,
    img: 'assets/images/salon_box/img6.jpg',
    address: 'СНепокоренных, 15',
    metroAddress: 'Площадь мужества',
    sub_city_id: 2
  },
  {
    id: 7,
    img: 'assets/images/salon_box/img7.jpg',
    address: 'СНепокоренных, 20',
    metroAddress: 'Площадь мужества',
    sub_city_id: 2
  },
];


export const SERVICE_SELECTION: ServiceSelection[] = [
  {id: 1, salon_id: 1, name: 'Парикмахерские услуги Непокоренных, 10'},
  {id: 2, salon_id: 1, name: 'Уход за руками и ногами'},
  {id: 3, salon_id: 1, name: 'Косметология'},
  {id: 4, salon_id: 1, name: 'Визаж'},
  {id: 5, salon_id: 1, name: 'Солярий'},
  {id: 6, salon_id: 2, name: 'Парикмахерские услуги Большая Зеленина, 3'},
  {id: 7, salon_id: 2, name: 'Уход за руками и ногами'},
  {id: 8, salon_id: 2, name: 'Косметология'},
  {id: 9, salon_id: 2, name: 'Визаж'},
  {id: 10, salon_id: 2, name: 'Солярий'},
  {id: 11, salon_id: 3, name: 'Парикмахерские услуги Александра Невского 21 к.2'},
  {id: 12, salon_id: 3, name: 'Уход за руками и ногами'},
  {id: 13, salon_id: 3, name: 'Косметология'},
  {id: 14, salon_id: 3, name: 'Визаж'},
  {id: 15, salon_id: 3, name: 'Солярий'}
];

export const SUB_SERVICE_SELECTION: SubServiceSelection[] = [
  {id: 1, service_selection_id: 1, name: 'Стрижка горячим утюгом', hour: 1, min: 45, price: 2000},
  {id: 2, service_selection_id: 1, name: 'Стрижка', hour: 0, min: 45, price: 900},
  {id: 3, service_selection_id: 1, name: 'Окрашивание волос', hour: 1, min: 45, price: 900},
  {id: 4, service_selection_id: 2, name: 'Стрижка горячим утюгом', hour: 1, min: 45, price: 2000},
  {id: 5, service_selection_id: 2, name: 'Стрижка', hour: 0, min: 45, price: 900},
  {id: 6, service_selection_id: 2, name: 'Окрашивание волос', hour: 1, min: 45, price: 900},
  {id: 7, service_selection_id: 3, name: 'Стрижка горячим утюгом', hour: 1, min: 45, price: 2000},
  {id: 8, service_selection_id: 3, name: 'Стрижка', hour: 0, min: 45, price: 900},
  {id: 9, service_selection_id: 3, name: 'Окрашивание волос', hour: 1, min: 45, price: 900},
];


export const SPECIALISTS: Specialist[] = [
  {
    profession: 'Парикмахер-стилист',
    salon_id: 1,
    name: 'Сергеева Анна',
    img: 'assets/images/professional_choice/img1.jpg'
  },
  {
    profession: 'Парикмахер-стилист',
    salon_id: 1,
    name: 'Екатерина Яковлева',
    img: 'assets/images/professional_choice/img2.jpg'
  },
  {
    profession: 'Парикмахер-стилист',
    salon_id: 1,
    name: 'Анастасия Бровко',
    img: 'assets/images/professional_choice/img3.jpg'
  },
  {
    profession: 'Парикмахер-стилист',
    salon_id: 1,
    name: 'Юлия Ларина',
    img: 'assets/images/professional_choice/img4.jpg'
  },
  {
    profession: 'Парикмахер-стилист',
    salon_id: 2,
    name: 'Юлия Ларина',
    img: 'assets/images/professional_choice/img4.jpg'
  },
  {
    profession: 'Парикмахер-стилист',
    salon_id: 2,
    name: 'Анастасия Бровко',
    img: 'assets/images/professional_choice/img3.jpg'
  },
  {
    profession: 'Парикмахер-стилист',
    salon_id: 2,
    name: 'Сергеева Анна',
    img: 'assets/images/professional_choice/img1.jpg'
  },
  {
    profession: 'Парикмахер-стилист',
    salon_id: 2,
    name: 'Екатерина Яковлева',
    img: 'assets/images/professional_choice/img2.jpg'
  }
];

 // export const RECORD_INFO = [];
