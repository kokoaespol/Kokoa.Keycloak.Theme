import { createUseI18n } from "keycloakify/login";

export const { useI18n, ofTypeI18n } = createUseI18n({
    en: {
        loginAccountTitle: "Welcome back to Kokoa"
    },
    es: {
        loginAccountTitle: "Bienvenido de vuelta a Kokoa"
    }
});

export type I18n = typeof ofTypeI18n;
