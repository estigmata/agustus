import { CategoryPlace } from './../share/category.place';

export const PLACES: CategoryPlace[] = [
  { name: "Barbeque", places: [
    { avatar: "F", avatarColor:"#b71c1c", name: "Factory Grill" },
    { avatar: "B", avatarColor:"#880e4f", name: "El Bunker Grill" },
    { avatar: "K", avatarColor:"#4a148c", name: "Kansas Grill" }
  ]},
  { name: "Fast Food", places: [
    { avatar: "M", avatarColor:"#1a237e", name: "Mama Ulupica" },
    { avatar: "T", avatarColor:"#01579b", name: "La Tirana" },
    { avatar: "A", avatarColor:"#006064", name: "Mama Mia" }
  ]},
  { name: "Pizza", places: [
    { avatar: "P", avatarColor:"#004d40", name: "El Padrino" },
    { avatar: "D", avatarColor:"#33691e", name: "Don Corleone" },
    { avatar: "S", avatarColor:"#827717", name: "Sole Mio" }
  ]}
];
