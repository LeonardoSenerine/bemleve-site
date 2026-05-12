/**
 * Configuração central do contato por WhatsApp.
 * Mude o número ou a mensagem aqui — todo o site passa a refletir.
 */

/** Número no formato internacional, sem espaços ou símbolos. */
export const WHATSAPP_NUMBER = "5511997481154"; // (11) 99748-1154

/** Mensagem pré-preenchida que abre quando o cliente clica no botão. */
export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de conversar sobre as marmitas, vim pelo site e estou interessada.";

/** URL completa pronta para usar em <a href>. */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;
