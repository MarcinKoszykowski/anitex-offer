const error = 'brak dostępu - błędne hasło';
const firefox = 'Dla poprawnego działania aplikacji skorzystaj z przeglądarki Firefox';

const info = {
  delivery: 'Waruki dostawy:',
  deadline: 'Termin płatności:',
  payment: 'Forma płatności:',
};

const form = {
  name: {
    firm: {
      firm1: 'firm1',
      firm2: 'firm2',
      address1: 'address1',
      address2: 'address2',
      nip: 'nip',
      phone: 'phone',
      email: 'email',
    },
    info: {
      delivery: 'delivery',
      deadline: 'deadline',
      payment: 'payment',
    },
    product: {
      name: 'name',
      price: 'price',
      image: 'image',
    },
  },
  label: {
    firm: {
      firm1: 'firma - główna nazwa',
      firm2: 'firma - dodatkowa nazwa',
      address1: 'adres - pierwsza linijka (ulica i numer domu / mieszkania)',
      address2: 'adres - druga linijka (kod pocztowy + miasto)',
      nip: 'nip (xxx-xxx-xx-xx)',
      phone: 'numer telefonu (xxxxxxxxx)',
      email: 'adres email',
    },
    info: {
      delivery: 'warunki dostawy',
      deadline: 'termin płatności',
      payment: 'forma płatności',
    },
    product: {
      name: 'nazwa produktu',
      price: 'cena - netto',
      image: 'link do zdjęcia',
    },
    checkbox: {
      firm: 'firma - dodatkowa nazwa',
      email: 'adres email',
    },
  },
  pattern: {
    nip: '^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$',
    phone: '[0-9]{9}',
    price: '^\\d+,[0-9]{2}$',
  },
  button: {
    edit: 'Edytuj',
    add: 'Dodaj',
  },
};

const firm = {
  nip: 'nip:',
  phone: 'telefon:',
  email: 'email:',
};

const anitex = {
  firm1: 'FHU Anitex',
  firm2: 'Roman Kowalski',
  address1: 'Nowina 11a',
  address2: '82-310 Elbląg',
  nip: '578-117-77-98',
  phone: '609541230',
  email: 'fhuanitex@wp.pl',
};

const login = {
  name: 'password',
  label: 'wprowadź hasło',
};

const save = {
  name: 'fileName',
  label: 'wprowadź nazwę pliku',
};

const load = {
  name: 'load',
};

const buttonTitle = {
  product: {
    add: 'Dodaj produkt',
    delete: 'Usuń produkt',
    edit: 'Edytuj produkt',
  },
  print: 'Wydrukuj do PDF',
  login: 'Zaloguj',
  offer: {
    load: 'Wczytaj ofertę',
    save: 'Zapisz ofertę',
  },
  logout: 'Wyloguj',
};

export { load, buttonTitle, firefox, info, error, form, firm, anitex, login, save };
