import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_6st8c7j";
const TEMPLATE_ID = "template_k8juz5k";
const PUBLIC_KEY = "HLWK7Nm8fBGlwRTwn";

export const sendEmail = (templateParams) => {
  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
};
