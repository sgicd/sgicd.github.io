export const ProductsObj = [
  { code: "SCD0001", name: "SHAMPOO", stock: 0 , securityStock: 10, toOrder: 0, reorder: null},
  { code: "SCD0002", name: "ACONDICIONADOR", stock: 0 , securityStock: 6, toOrder: 0, reorder: null},
  { code: "SCD0003", name: "GEL DE BAÑO", stock: 0 , securityStock: 16, toOrder: 0, reorder: null},
  { code: "SCD0004", name: "Toallas Corporales", stock: 546 , securityStock: 157, toOrder: 0, reorder: null},
  { code: "SCD0005", name: "Toallas de Mano", stock: 201 , securityStock: 191, toOrder: 0, reorder: null},
  { code: "SCD0006", name: "Tapetes de baño", stock: 233 , securityStock: 149, toOrder: 0, reorder: null},
  { code: "SCD0007", name: "Toalla Facial", stock: 139 , securityStock: 424, toOrder: 0, reorder: null},
  { code: "SCD0008", name: "Toallas de Alberca", stock: 0 , securityStock: 1, toOrder: 0, reorder: null},
  { code: "SCD0009", name: "Sabanas Individuales", stock: 316 , securityStock: 170, toOrder: 0, reorder: null},
  { code: "SCD0010", name: "Sábanas Cajon individuales", stock: 300 , securityStock: 165, toOrder: 0, reorder: null},
  { code: "SCD0011", name: "Protector Colchon Individual", stock: 265 , securityStock: 126, toOrder: 0, reorder: null},
  { code: "SCD0012", name: "Sábanas Lisa Matrimoniales", stock: 86 , securityStock: 53, toOrder: 0, reorder: null},
  { code: "SCD0013", name: "Sábanas Cajon Matrimonial ", stock: 6 , securityStock: 28, toOrder: 0, reorder: null},
  { code: "SCD0014", name: "Protector Colchon Matrimonial", stock: 33 , securityStock: 43, toOrder: 0, reorder: null},
  { code: "SCD0015", name: "Cobertor Matrimonial ", stock: 3 , securityStock: 1, toOrder: 0, reorder: null},
  { code: "SCD0016", name: "Sábanas planas Queen", stock: 15 , securityStock: 26, toOrder: 0, reorder: null},
  { code: "SCD0017", name: "Protector Colchon Queen", stock: 5 , securityStock: 16, toOrder: 0, reorder: null},
  { code: "SCD0018", name: "Inserto Queen", stock: 12 , securityStock: 27, toOrder: 0, reorder: null},
  { code: "SCD0019", name: "Duvet Queen", stock: 27 , securityStock: 27, toOrder: 0, reorder: null},
  { code: "SCD0020", name: "Sábanas Lisa King", stock: 157 , securityStock: 50, toOrder: 0, reorder: null},
  { code: "SCD0021", name: "Sábana cajon King", stock: 24 , securityStock: 49, toOrder: 0, reorder: null},
  { code: "SCD0022", name: "Cobertor King ", stock: 12 , securityStock: 1, toOrder: 0, reorder: null},
  { code: "SCD0023", name: "Protector Colchon King", stock: 64 , securityStock: 38, toOrder: 0, reorder: null},
  { code: "SCD0024", name: "Inserto King", stock: 48 , securityStock: 27, toOrder: 0, reorder: null},
  { code: "SCD0025", name: "Duvet King", stock: 54 , securityStock: 35, toOrder: 0, reorder: null},
  { code: "SCD0026", name: "Almohadas std", stock: 397 , securityStock: 131, toOrder: 0, reorder: null},
  { code: "SCD0027", name: "Fundas Almohadas lisa std", stock: 914 , securityStock: 319, toOrder: 0, reorder: null},
  { code: "SCD0028", name: "Protector Almohada std cierre", stock: 425 , securityStock: 126, toOrder: 0, reorder: null},
  { code: "SCD0029", name: "Almohadas King ", stock: 0 , securityStock: 59, toOrder: 0, reorder: null},
  { code: "SCD0030", name: "Protector almohada cierre ", stock: 0 , securityStock: 1, toOrder: 0, reorder: null},
  { code: "SCD0031", name: "Funda Almohada King", stock: 71 , securityStock: 163, toOrder: 0, reorder: null},
  { code: "SCD0032", name: "Cortinas Frescura ", stock: 49 , securityStock: 1, toOrder: 0, reorder: null},
  { code: "SCD0033", name: "Cortinas Blackout ", stock: 131 , securityStock: 1, toOrder: 0, reorder: null},
  { code: "SCD0034", name: "Cojines decorativos", stock: 67 , securityStock: 1, toOrder: 0, reorder: null},
  { code: "SCD0035", name: "Forros decorativos", stock: 0 , securityStock: 1, toOrder: 0, reorder: null},
  
];

export const InputsArray = [];

export const OutputsArray = [];

export const BASE_URL = "/selina_test";

export const INPUTS_KEY = "inputs-register";

export const INVENTORY_KEY = "inventory";

export const OUTPUTS_KEY = "outputs_register";

export const DEMAND_PRONOS_KEY = "demand-pronos";

export const headerItems = {
  imgFooter: "https://selina-res.cloudinary.com/image/upload/if_iw_gt_2560,c_scale,w_2560/e_sharpen:80,q_auto:good/f_auto/v1/s-cf-1/xdw7oj4u3s4v/7wcp0CllQpA4HAZ9Rr4FQr/de8c01157022b708957b2b5687ef8449/asset-1.svg",
  img: "https://www.selina.com/static/media/selina_logo_black.b62a0982.svg",
  navigation: [
    { name: "Inicio ", url: BASE_URL },
    { name: "Inventario", url: `${BASE_URL}/inventario` },
    { name: "Entradas", url: `${BASE_URL}/entradas`},
    { name: "Salidas", url: `${BASE_URL}/salidas`}

  ]
};

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

export const DateFormatterMX = new Intl.DateTimeFormat('es-MX', options);

export const dateIsValid = (date) =>  {
  return !Number.isNaN(new Date(date).getTime());
}

export const addDays = (date, days) => {
  date.setDate(date.getDate() + days);
  return date;
}

export const noWhites = new Set(["SCD0001", "SCD0002", "SCD0003"]);

export const noWhitesObj = {
  SCD0001: {
    multiplier: 0.5 / 60.0
  },
  SCD0002: {
    multiplier: 0.3 / 60.0
  },
  SCD0003: {
    multiplier: 0.8 / 60.0
  }
  
}