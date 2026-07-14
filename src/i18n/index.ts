// Aggregator: per gebied een record { nl, en, de, es, fr }.
// Componenten en templates kiezen hun taal via `pick(dict, Astro.currentLocale)`.
import nlUi from './nl/ui';
import nlHome from './nl/home';
import nlWerkwijze from './nl/werkwijze';
import nlOver from './nl/over';
import nlContact from './nl/contact';
import nlMotoren from './nl/motoren';
import nlTarieven from './nl/tarieven';
import nlVoorbeeld from './nl/voorbeeld';

import enUi from './en/ui';
import enHome from './en/home';
import enWerkwijze from './en/werkwijze';
import enOver from './en/over';
import enContact from './en/contact';
import enMotoren from './en/motoren';
import enTarieven from './en/tarieven';
import enVoorbeeld from './en/voorbeeld';

import deUi from './de/ui';
import deHome from './de/home';
import deWerkwijze from './de/werkwijze';
import deOver from './de/over';
import deContact from './de/contact';
import deMotoren from './de/motoren';
import deTarieven from './de/tarieven';
import deVoorbeeld from './de/voorbeeld';

import esUi from './es/ui';
import esHome from './es/home';
import esWerkwijze from './es/werkwijze';
import esOver from './es/over';
import esContact from './es/contact';
import esMotoren from './es/motoren';
import esTarieven from './es/tarieven';
import esVoorbeeld from './es/voorbeeld';

import frUi from './fr/ui';
import frHome from './fr/home';
import frWerkwijze from './fr/werkwijze';
import frOver from './fr/over';
import frContact from './fr/contact';
import frMotoren from './fr/motoren';
import frTarieven from './fr/tarieven';
import frVoorbeeld from './fr/voorbeeld';

export { pick, asLocale, routeFor, ROUTES, LOCALES, LOCALE_LABELS, OG_LOCALES, DEFAULT_LOCALE } from './config';
export type { Locale } from './config';

export const uiDict = { nl: nlUi, en: enUi, de: deUi, es: esUi, fr: frUi };
export const homeDict = { nl: nlHome, en: enHome, de: deHome, es: esHome, fr: frHome };
export const werkwijzeDict = { nl: nlWerkwijze, en: enWerkwijze, de: deWerkwijze, es: esWerkwijze, fr: frWerkwijze };
export const overDict = { nl: nlOver, en: enOver, de: deOver, es: esOver, fr: frOver };
export const contactDict = { nl: nlContact, en: enContact, de: deContact, es: esContact, fr: frContact };
export const motorenDict = { nl: nlMotoren, en: enMotoren, de: deMotoren, es: esMotoren, fr: frMotoren };
export const tarievenDict = { nl: nlTarieven, en: enTarieven, de: deTarieven, es: esTarieven, fr: frTarieven };
export const voorbeeldDict = { nl: nlVoorbeeld, en: enVoorbeeld, de: deVoorbeeld, es: esVoorbeeld, fr: frVoorbeeld };
