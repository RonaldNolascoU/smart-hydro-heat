import { screen } from "./screenName";
import {
  HomeStack,
  StaticsStack,
  AlarmsStack,
  NotificationsStack,
  SettingsStack,
} from "../navigation";

export const tabScreen = [
  {
    name: screen.home.tab,
    component: HomeStack,
    options: { title: "Inicio" },
  },
  {
    name: screen.statics.tab,
    component: StaticsStack,
    options: { title: "Estadisticas" },
  },
  {
    name: screen.alarms.tab,
    component: AlarmsStack,
    options: { title: "Programar" },
  },
  {
    name: screen.notifications.tab,
    component: NotificationsStack,
    options: { title: "Notificaciones" },
  },
  {
    name: screen.settings.tab,
    component: SettingsStack,
    options: { title: "Configuraciones" },
  },
];
